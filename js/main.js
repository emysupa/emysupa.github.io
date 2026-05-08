(function () {
  "use strict";

  function currentPageName() {
    var path = window.location.pathname.split("/").pop();
    return path === "" ? "index.html" : path;
  }

  function markActiveNavigation() {
    var current = currentPageName();
    document.querySelectorAll(".side-nav a").forEach(function (link) {
      var href = link.getAttribute("href") || "";
      if (href === current) {
        link.setAttribute("aria-current", "page");
      }
    });
  }

  function setCurrentYear() {
    var year = new Date().getFullYear();
    document.querySelectorAll("[data-current-year]").forEach(function (node) {
      node.textContent = year;
    });
  }

  function setupPublicationFilters() {
    var searchInput = document.getElementById("publicationSearch");
    var publications = Array.prototype.slice.call(document.querySelectorAll(".publication"));
    var filterButtons = Array.prototype.slice.call(document.querySelectorAll("[data-filter]"));
    var emptyMessage = document.getElementById("noPublicationsMessage");
    var activeFilter = "all";

    if (!publications.length) {
      return;
    }

    function applyFilters() {
      var query = searchInput ? searchInput.value.trim().toLowerCase() : "";
      var visibleCount = 0;

      publications.forEach(function (publication) {
        var type = publication.getAttribute("data-type") || "";
        var searchable = (publication.textContent + " " + (publication.getAttribute("data-search") || "")).toLowerCase();
        var typeMatches = activeFilter === "all" || type === activeFilter;
        var searchMatches = query === "" || searchable.indexOf(query) !== -1;
        var isVisible = typeMatches && searchMatches;
        publication.hidden = !isVisible;
        if (isVisible) {
          visibleCount += 1;
        }
      });

      if (emptyMessage) {
        emptyMessage.hidden = visibleCount !== 0;
      }
    }

    if (searchInput) {
      searchInput.addEventListener("input", applyFilters);
    }

    filterButtons.forEach(function (button) {
      button.addEventListener("click", function () {
        activeFilter = button.getAttribute("data-filter") || "all";
        filterButtons.forEach(function (otherButton) {
          otherButton.classList.toggle("is-active", otherButton === button);
        });
        applyFilters();
      });
    });
  }

  function setupCitationButtons() {
    document.querySelectorAll(".copy-citation").forEach(function (button) {
      button.addEventListener("click", function () {
        var citation = button.getAttribute("data-citation") || "";
        if (!citation) {
          return;
        }

        function markCopied() {
          var originalText = button.textContent;
          button.textContent = "Copied";
          window.setTimeout(function () {
            button.textContent = originalText;
          }, 1400);
        }

        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(citation).then(markCopied).catch(function () {
            window.prompt("Copy citation:", citation);
          });
        } else {
          window.prompt("Copy citation:", citation);
        }
      });
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    markActiveNavigation();
    setCurrentYear();
    setupPublicationFilters();
    setupCitationButtons();
  });
})();
