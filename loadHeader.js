fetch("header.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("header-placeholder").innerHTML = data;

    initHeaderScripts();
  });

function initHeaderScripts() {
  const locationSelect = document.getElementById("locationMenu");
  const mobileLocationSelect = document.getElementById("mobileLocationMenu");
  const darkModeBtn = document.getElementById("darkModeButton");
  const mobileDarkModeBtn = document.getElementById("mobileDarkModeButton");
  const mobileMenuToggle = document.getElementById("mobileMenuToggle");
  const mobileMenu = document.getElementById("mobileMenu");
  
  // Live search functionality
  const headerSearch = document.getElementById("headerSearch");
  const searchSuggestions = document.getElementById("searchSuggestions");
  const headerLoader = document.getElementById("headerLoader");
  const searchForm = document.getElementById("searchForm");
  
  // Sample search data
  const searchItems = [
    "For Sale",
    "Services",
    "Housing",
    "Jobs",
    "Community",
    "Discussion Forums",
    "Bikes",
    "Cars",
    "Computer Help"
  ];
  
  let searchTimeout; // Store timeout ID to cancel previous requests

  if (headerSearch) {
    headerSearch.addEventListener("input", function() {
      const query = this.value.toLowerCase().trim();
      
      // Clear old results (but keep loader)
      searchSuggestions.innerHTML = '<div id="headerLoader" class="header-loader hidden"></div>';
      const loaderRef = document.getElementById("headerLoader");
      
      // Cancel previous timeout to prevent race conditions
      if (searchTimeout) {
        clearTimeout(searchTimeout);
      }
      
      // If empty, hide everything
      if (query === "") {
        loaderRef.classList.add("hidden");
        searchSuggestions.classList.remove("active");
        return;
      }
      
      // Show loader
      loaderRef.classList.remove("hidden");
      searchSuggestions.classList.add("active");
      
      // Simulate loading delay with debounce
      searchTimeout = setTimeout(() => {
        loaderRef.classList.add("hidden");
        
        // Filter matches
        const matches = searchItems.filter(item =>
          item.toLowerCase().includes(query)
        );
        
        // Show results
        if (matches.length > 0) {
          matches.forEach(match => {
            const suggestion = document.createElement("div");
            suggestion.className = "suggestion-item";
            suggestion.textContent = match;
            suggestion.addEventListener("click", function() {
              headerSearch.value = match;
              searchSuggestions.innerHTML = '<div id="headerLoader" class="header-loader hidden"></div>';
              searchSuggestions.classList.remove("active");
            });
            searchSuggestions.appendChild(suggestion);
          });
        } else if (query !== "") {
          const noResults = document.createElement("div");
          noResults.className = "suggestion-item no-results";
          noResults.textContent = "No results found";
          searchSuggestions.appendChild(noResults);
        }
      }, 600);
    });
    
    // Close suggestions when clicking outside
    document.addEventListener("click", function(event) {
      if (!event.target.closest(".topbar-center")) {
        searchSuggestions.classList.remove("active");
      }
    });
    
    // Handle form submission
    if (searchForm) {
      searchForm.addEventListener("submit", function(e) {
        e.preventDefault();
        if (headerSearch.value.trim()) {
          window.location.href = "search.html?q=" + encodeURIComponent(headerSearch.value);
        }
      });
    }
  }

  // Sync desktop and mobile location dropdowns
  const savedLocation = localStorage.getItem("selectedLocation");
  if (savedLocation) {
    if (locationSelect) locationSelect.value = savedLocation;
    if (mobileLocationSelect) mobileLocationSelect.value = savedLocation;
  }

  if (locationSelect) {
    locationSelect.addEventListener("change", function () {
      localStorage.setItem("selectedLocation", locationSelect.value);
      if (mobileLocationSelect) mobileLocationSelect.value = locationSelect.value;
    });
  }

  if (mobileLocationSelect) {
    mobileLocationSelect.addEventListener("change", function () {
      localStorage.setItem("selectedLocation", mobileLocationSelect.value);
      if (locationSelect) locationSelect.value = mobileLocationSelect.value;
    });
  }

  const themeLink = document.getElementById("theme-style");

  const savedTheme = localStorage.getItem("theme");
  if (savedTheme && themeLink) {
    themeLink.href = savedTheme;
  }

  if (darkModeBtn) {
    darkModeBtn.addEventListener("click", function () {
      toggleDarkMode(themeLink);
    });
  }

  if (mobileDarkModeBtn) {
    mobileDarkModeBtn.addEventListener("click", function () {
      toggleDarkMode(themeLink);
      // Close mobile menu after clicking
      mobileMenu.classList.remove("active");
      mobileMenuToggle.classList.remove("active");
    });
  }

  // Mobile menu toggle
  if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener("click", function () {
      mobileMenu.classList.toggle("active");
      mobileMenuToggle.classList.toggle("active");
    });
  }

  // Close mobile menu when clicking on a link
  if (mobileMenu) {
    mobileMenu.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", function () {
        mobileMenu.classList.remove("active");
        mobileMenuToggle.classList.remove("active");
      });
    });
  }

  // Close mobile menu when clicking outside
  document.addEventListener("click", function (event) {
    const isMobile = window.innerWidth <= 768;
    if (isMobile && mobileMenuToggle && !event.target.closest(".mobile-menu") && !event.target.closest(".mobile-menu-toggle")) {
      mobileMenu.classList.remove("active");
      mobileMenuToggle.classList.remove("active");
    }
  });
}

function toggleDarkMode(themeLink) {
  const isDark = themeLink.getAttribute("href") === "darkmode.css";

  if (isDark) {
    themeLink.href = "styles.css";
    localStorage.setItem("theme", "styles.css");
  } else {
    themeLink.href = "darkmode.css";
    localStorage.setItem("theme", "darkmode.css");
  }
}
