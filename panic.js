<script>
function disguiseTab() {
  document.title = "Google Docs";

  let favicon = document.querySelector("link[rel~='icon']");
  if (!favicon) {
    favicon = document.createElement("link");
    favicon.rel = "icon";
    document.head.appendChild(favicon);
  }

  favicon.href = "https://upload.wikimedia.org/wikipedia/commons/e/ec/GDocs_Favicon_Recreation.png?_=20220509151807";

  // Save state so it persists across pages
  localStorage.setItem("disguised", "true");
}

// Run automatically on every page load if previously enabled
window.addEventListener("DOMContentLoaded", () => {
  if (localStorage.getItem("disguised") === "true") {
    disguiseTab();
  }
});
</script>
