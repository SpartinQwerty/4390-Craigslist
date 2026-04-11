function initPageScripts() {
  const spinner = document.getElementById("loading-spinner");
  const postForm = document.querySelector(".post-form");
  const searchInput = document.getElementById("site-search");
  const searchForm = document.getElementById("search-form");
  const suggestionsBox = document.getElementById("search-suggestions");
  const recentItems = document.querySelectorAll(".searchable-item");
  const noResultsMessage = document.getElementById("no-results-message");
  const searchResultsMessage = document.getElementById("search-results-message");

  function showLoading() {
    if (spinner) spinner.classList.add("show");
  }

  function hideLoading() {
    if (spinner) spinner.classList.remove("show");
  }

  function clearSearchState() {
    if (suggestionsBox) {
      suggestionsBox.innerHTML = "";
      suggestionsBox.classList.add("hidden");
    }

    if (searchResultsMessage) {
      searchResultsMessage.textContent = "";
    }

    if (noResultsMessage) {
      noResultsMessage.hidden = true;
    }

    recentItems.forEach(item => {
      item.style.display = "";
    });
  }

  function runSearch(query) {
    if (!recentItems.length) return;

    const trimmedQuery = query.trim().toLowerCase();

    if (trimmedQuery === "") {
      clearSearchState();
      return;
    }

    if (searchResultsMessage) {
      searchResultsMessage.textContent = "Searching...";
    }

    if (suggestionsBox) {
      suggestionsBox.innerHTML = "";
      suggestionsBox.classList.remove("hidden");
    }

    showLoading();

    setTimeout(() => {
      let matchCount = 0;
      const suggestions = [];

      recentItems.forEach(item => {
        const searchableText = (item.dataset.search || "").toLowerCase();
        const title = item.querySelector("h3")?.textContent || "Result";

        if (searchableText.includes(trimmedQuery)) {
          item.style.display = "";
          matchCount++;

          if (suggestions.length < 5) {
            suggestions.push(title);
          }
        } else {
          item.style.display = "none";
        }
      });

      if (suggestionsBox) {
        suggestionsBox.innerHTML = "";

        if (suggestions.length > 0) {
          suggestions.forEach(text => {
            const suggestion = document.createElement("div");
            suggestion.className = "suggestion-item";
            suggestion.textContent = text;
            suggestion.addEventListener("click", () => {
              searchInput.value = text;
              runSearch(text);
            });
            suggestionsBox.appendChild(suggestion);
          });
        } else {
          const emptySuggestion = document.createElement("div");
          emptySuggestion.className = "suggestion-item";
          emptySuggestion.textContent = "No matching suggestions";
          suggestionsBox.appendChild(emptySuggestion);
        }
      }

      if (noResultsMessage) {
        noResultsMessage.hidden = matchCount !== 0;
      }

      if (searchResultsMessage) {
        searchResultsMessage.textContent =
          matchCount > 0 ? `${matchCount} result(s) found` : "";
      }

      hideLoading();
    }, 700);
  }

  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      runSearch(e.target.value);
    });
  }

  if (searchForm) {
    searchForm.addEventListener("submit", (e) => {
      e.preventDefault();
      runSearch(searchInput.value);
    });
  }

  if (postForm) {
    postForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const submitButton = postForm.querySelector(".submit-btn");
      const originalText = submitButton.textContent;

      submitButton.disabled = true;
      submitButton.textContent = "Posting...";
      showLoading();

      setTimeout(() => {
        hideLoading();
        submitButton.disabled = false;
        submitButton.textContent = originalText;
        alert("Listing posted successfully!");
        postForm.reset();
      }, 1500);
    });
  }
}
