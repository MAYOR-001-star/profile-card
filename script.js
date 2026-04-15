/**
 * script.js — Profile Card behaviour
 *
 * Responsibilities:
 *  1. Display & continuously update the current epoch time in milliseconds
 *     (data-testid="test-user-time") via Date.now(). aria-live="polite"
 *     on the <output> element ensures screen-readers are notified.
 */

(function () {
  "use strict";

  /* ─── Epoch Time Counter ─────────────────────────────────── */

  const timeEl = document.getElementById("user-time");

  /**
   * Writes Date.now() into the <output> element.
   * aria-live="polite" on the element means screen readers will
   * read the updated value after the current speech has finished.
   */
  function updateTime() {
    if (!timeEl) return;
    timeEl.textContent = Date.now().toString();
  }

  // Run once immediately so the value is present before the first tick.
  updateTime();

  // Then refresh every 500 ms for a smooth live display.
  const timeInterval = setInterval(updateTime, 500);

  /* ─── Avatar Upload ──────────────────────────────────────── */

  var avatarUploadInput = document.getElementById("avatar-upload");
  var avatarImg = document.getElementById("avatar-img");

  if (avatarUploadInput && avatarImg) {
    avatarUploadInput.addEventListener("change", function () {
      var file = this.files && this.files[0];
      if (!file || !file.type.startsWith("image/")) return;

      var reader = new FileReader();
      reader.onload = function (e) {
        // Swap the image source
        avatarImg.src = e.target.result;
        avatarImg.alt = "User-uploaded profile photo for Baruwa Abdul-azeez Mayowa";

        // Trigger the CSS swap animation
        avatarImg.classList.remove("swapped");
        // Force reflow so the animation restarts cleanly
        void avatarImg.offsetWidth;
        avatarImg.classList.add("swapped");
      };
      reader.readAsDataURL(file);
    });
  }

  /* ─── Graceful teardown (for SPA/test-runner environments) ── */
  window.__profileCardCleanup = function () {
    clearInterval(timeInterval);
  };
})();
