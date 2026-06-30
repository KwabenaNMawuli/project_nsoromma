// Nsoromma — minimal progressive enhancement.
// The page is fully usable without JavaScript; this only improves the
// mobile menu and keeps the footer year current.

(function () {
  "use strict";

  /* ---- Mobile navigation toggle ---- */
  var toggle = document.querySelector(".nav-toggle");
  var menu = document.getElementById("primary-menu");

  if (toggle && menu) {
    toggle.addEventListener("click", function () {
      var open = menu.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(open));
    });

    // Close the menu after choosing a destination (small screens).
    menu.addEventListener("click", function (e) {
      if (e.target.closest("a") && menu.classList.contains("is-open")) {
        menu.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      }
    });

    // Allow Escape to close the menu and return focus to the toggle.
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && menu.classList.contains("is-open")) {
        menu.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
        toggle.focus();
      }
    });
  }

  /* ---- Current year in footer ---- */
  var year = document.getElementById("year");
  if (year) {
    year.textContent = String(new Date().getFullYear());
  }

  /* ---- Friendly placeholder for the download action ----
     Replace the alert with a real APK link/href when the build is ready. */
  document.querySelectorAll("[data-download]").forEach(function (el) {
    el.addEventListener("click", function (e) {
      // If a real APK URL has been set on the element, let the browser handle it.
      var href = el.getAttribute("href");
      if (href && href.indexOf(".apk") !== -1) return;
      // Otherwise, the button currently routes to the install guide (#install).
      // Hook your distribution link here when available.
    });
  });
})();
