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
