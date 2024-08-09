// Referências para elementos do DOM
const formProduto = document.getElementById("form-produto");
const codigoInput = document.getElementById("codigo");
const nomeInput = document.getElementById("nome");
const valorCustoInput = document.getElementById("valor-custo");
const precoVendaInput = document.getElementById("preco-venda");
const quantidadeInput = document.getElementById("quantidade");

// Função para obter o próximo código disponível
function getNextCodigo() {
  let produtos = JSON.parse(localStorage.getItem("produtos")) || [];
  let ultimoCodigo = produtos.length ? produtos[produtos.length - 1].codigo : 0;
  return ultimoCodigo + 1;
}

// Função para adicionar um novo produto ao localStorage
function addProduto(e) {
  e.preventDefault();

  const produto = {
    codigo: parseInt(codigoInput.value, 10),
    nome: nomeInput.value,
    valorCusto: parseFloat(valorCustoInput.value),
    precoVenda: parseFloat(precoVendaInput.value),
    quantidade: parseInt(quantidadeInput.value, 10),
  };

  let produtos = JSON.parse(localStorage.getItem("produtos")) || [];
  produtos.push(produto);
  localStorage.setItem("produtos", JSON.stringify(produtos));

  alert("Produto adicionado com sucesso!");
  formProduto.reset();
  initializeForm();
}

// Função para inicializar o formulário com o próximo código
function initializeForm() {
  codigoInput.value = getNextCodigo();
}

// Evento para adicionar o produto ao enviar o formulário
formProduto.addEventListener("submit", addProduto);

// Inicializa o formulário quando a página carrega
initializeForm();
