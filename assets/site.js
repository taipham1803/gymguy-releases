// Language toggle (English / Tiếng Việt). Remembers the choice; defaults to the browser language.
(function () {
  var KEY = "gg-lang";
  function pick() {
    try { var saved = localStorage.getItem(KEY); if (saved) return saved; } catch (e) {}
    var q = new URLSearchParams(location.search).get("lang");
    if (q === "vi" || q === "en") return q;
    return (navigator.language || "en").toLowerCase().indexOf("vi") === 0 ? "vi" : "en";
  }
  function apply(lang) {
    document.documentElement.lang = lang;
    document.querySelectorAll(".lang button").forEach(function (b) {
      b.classList.toggle("on", b.getAttribute("data-set") === lang);
    });
  }
  apply(pick());
  document.addEventListener("click", function (e) {
    var b = e.target.closest(".lang button");
    if (!b) return;
    var lang = b.getAttribute("data-set");
    try { localStorage.setItem(KEY, lang); } catch (err) {}
    apply(lang);
  });
})();
