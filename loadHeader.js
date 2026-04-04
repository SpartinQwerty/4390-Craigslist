fetch("header.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("header-placeholder").innerHTML = data;

    initHeaderScripts();
  });

function initHeaderScripts() {
  const locationSelect = document.getElementById("locationMenu");
  const darkModeBtn = document.getElementById("darkModeButton");

  const savedLocation = localStorage.getItem("selectedLocation");
  if (savedLocation && locationSelect) {
    locationSelect.value = savedLocation;
  }

  if (locationSelect) {
    locationSelect.addEventListener("change", function () {
      localStorage.setItem("selectedLocation", locationSelect.value);
    });
  }

  const themeLink = document.getElementById("theme-style");

  const savedTheme = localStorage.getItem("theme");
  if (savedTheme && themeLink) {
    themeLink.href = savedTheme;
  }

  if (darkModeBtn) {
    darkModeBtn.addEventListener("click", function () {
      const isDark = themeLink.getAttribute("href") === "darkmode.css";

      if (isDark) {
        themeLink.href = "styles.css";
        localStorage.setItem("theme", "styles.css");
      } else {
        themeLink.href = "darkmode.css";
        localStorage.setItem("theme", "darkmode.css");
      }
    });
  }
}
