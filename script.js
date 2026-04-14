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

  /* ─── Graceful teardown (for SPA/test-runner environments) ── */
  window.__profileCardCleanup = function () {
    clearInterval(timeInterval);
  };
})();
