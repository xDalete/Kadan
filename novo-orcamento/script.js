// novo-orcamento.js

document.addEventListener('DOMContentLoaded', () => {
    const clienteSelect = document.getElementById('cliente');
    const produtosAdicionados = document.getElementById('produtos-adicionados');
    const productList = document.getElementById('product-list');
    const searchProduct = document.getElementById('search-product');
    const addItemButton = document.getElementById('add-item-button');
    const modal = document.getElementById('product-modal');
    const closeModal = document.querySelector('.close');

    // Carregar clientes e produtos do localStorage
    const clientes = DB.cliente.get();
    const produtos = DB.produto.get();

    // Preencher o select de clientes
    clientes.forEach(cliente => {
        const option = document.createElement('option');
        option.value = cliente.id;
        option.textContent = cliente.nome;
        clienteSelect.appendChild(option);
    });

    // Adicionar produto à lista de produtos adicionados
    function addProdutoToList(produto) {
        const li = document.createElement('li');
        li.textContent = produto.nome;
        produtosAdicionados.appendChild(li);
    }

    // Preencher a lista de produtos
    function populateProductList(products) {
        productList.innerHTML = '';
        products.forEach(produto => {
            const li = document.createElement('li');
            li.textContent = produto.nome;
            li.addEventListener('click', () => {
                addProdutoToList(produto);
                modal.style.display = 'none';
            });
            productList.appendChild(li);
        });
    }

    // Inicializar a lista de produtos
    populateProductList(produtos.sort((a, b) => a.nome.localeCompare(b.nome)));

    // Filtrar produtos
    searchProduct.addEventListener('input', (event) => {
        const query = event.target.value.toLowerCase();
        const filteredProducts = produtos.filter(produto => 
            produto.nome.toLowerCase().includes(query)
        );
        populateProductList(filteredProducts.sort((a, b) => a.nome.localeCompare(b.nome)));
    });

    // Exibir o modal
    addItemButton.addEventListener('click', () => {
        modal.style.display = 'block';
    });

    // Fechar o modal
    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});

