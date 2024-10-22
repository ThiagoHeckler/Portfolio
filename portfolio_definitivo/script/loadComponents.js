function loadComponent(componentId, url) {
  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Failed to load component");
      }
      return response.text();
    })
    .then((data) => {
      document.getElementById(componentId).innerHTML = data;
    })
    .catch((error) => console.error("Erro ao carregar o componente:", error));
}

document.addEventListener("DOMContentLoaded", () => {
  loadComponent("header", "../layout/header.html");
});
