document.addEventListener("DOMContentLoaded", () => {
  // Carregar clientes do localStorage e mostrar na lista
  loadClients();
});

function loadClients() {
  const clients = JSON.parse(localStorage.getItem("clientes")) || [];
  const clientList = document.getElementById("client-list");
  clientList.innerHTML = "";

  clients
    .sort((a, b) => a.nome.localeCompare(b.nome))
    .forEach((client) => {
      const div = document.createElement("div");
      div.textContent = client.nome;
      clientList.appendChild(div);
    });
}

function filterClients() {
  const filter = document.getElementById("search-client").value.toUpperCase();
  const items = document.getElementById("client-list").getElementsByTagName("div");

  Array.from(items).forEach((item) => {
    const text = item.textContent || item.innerText;
    item.style.display = text.toUpperCase().indexOf(filter) > -1 ? "" : "none";
  });
}
