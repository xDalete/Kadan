document.addEventListener("DOMContentLoaded", () => {
  // Carregar orçamentos do localStorage e mostrar na lista
  loadOrcamentos();
});

function loadOrcamentos() {
  const orcamentos = JSON.parse(localStorage.getItem("orcamentos")) || [];
  const orcamentoList = document.getElementById("orcamento-list");
  orcamentoList.innerHTML = "";

  orcamentos
    .sort((a, b) => a.data.localeCompare(b.data)) // Ordena por data ou nome
    .forEach((orcamento) => {
      const div = document.createElement("div");
      div.textContent = `Orçamento #${orcamento.id} - Cliente: ${orcamento.cliente} - Data: ${orcamento.data}`;
      orcamentoList.appendChild(div);
    });
}

function filterOrcamentos() {
  const filter = document.getElementById("search-orcamento").value.toUpperCase();
  const items = document.getElementById("orcamento-list").getElementsByTagName("div");

  Array.from(items).forEach((item) => {
    const text = item.textContent || item.innerText;
    item.style.display = text.toUpperCase().indexOf(filter) > -1 ? "" : "none";
  });
}
