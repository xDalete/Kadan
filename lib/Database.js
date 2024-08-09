import Produto from "./Produto.js";
import Cliente from "./Cliente.js";
import Orcamento from "./Orcamento.js";

class DBProduto {
  /**
   * @returns {Produto[]}
   */
  static get() {
    let produtos = localStorage.getItem("produtos");
    if (!produtos) return [];
    return JSON.parse(produtos).items.map(
      (produto) =>
        new Produto(
          produto.id,
          produto.nome,
          produto.valorCusto,
          produto.precoVenda,
          produto.quantidade
        )
    );
  }

  /**
   * @param {number} id
   */
  static getById(id) {
    return this.get().find((produto) => produto.getId() === id);
  }

  /**
   * @param {Produto} produto
   */
  static add(produto) {
    let produtos = localStorage.getItem("produtos");
    produtos = produtos ? JSON.parse(produtos) : { counter: 0, items: [] };
    produto.setId(produtos.counter);
    produtos.items.push(produto);
    produtos.counter += 1;
    localStorage.setItem("produtos", JSON.stringify(produtos));
    return new Produto(
      produto.id,
      produto.nome,
      produto.valorCusto,
      produto.precoVenda,
      produto.quantidade
    );
  }

  /**
   * @param {Produto} produtoEditado
   */
  static edit(produtoEditado) {
    let produtos = localStorage.getItem("produtos");
    produtos = produtos ? JSON.parse(produtos) : { counter: 0, items: [] };
    const foundIndex = produtos.items.findIndex(
      (produto) => produto.id === produtoEditado.id
    );
    produtos.items[foundIndex] = produtoEditado;
    localStorage.setItem("produtos", JSON.stringify(produtos));
    return new Produto(
      produtoEditado.id,
      produtoEditado.nome,
      produtoEditado.valorCusto,
      produtoEditado.precoVenda,
      produtoEditado.quantidade
    );
  }

  static delete(id) {
    let produtos = localStorage.getItem("produtos");
    produtos = produtos ? JSON.parse(produtos) : { counter: 0, items: [] };
    if (produtos.items.findIndex((produto) => produto.id === id) === -1)
      return false;
    produtos.items = produtos.items.filter((produto) => produto.id !== id);
    localStorage.setItem("produtos", JSON.stringify(produtos));
    return true;
  }
}

class DBCliente {
  /**
   * @returns {Cliente[]}
   */
  static get() {
    let clientes = localStorage.getItem("clientes");
    if (!clientes) return [];
    return JSON.parse(clientes).items.map(
      (cliente) =>
        new Cliente(
          cliente.id,
          cliente.nome,
          cliente.nomeFantasia,
          cliente.email,
          cliente.telefone,
          cliente.cpf_cnpj // Atualizado para refletir o campo correto
        )
    );
  }

  /**
   * @param {number} id
   */
  static getById(id) {
    return this.get().find((cliente) => cliente.getId() === id);
  }

  /**
   * @param {Cliente} cliente
   */
  static add(cliente) {
    let clientes = localStorage.getItem("clientes");
    clientes = clientes ? JSON.parse(clientes) : { counter: 0, items: [] };
    cliente.setId(clientes.counter);
    clientes.items.push(cliente);
    clientes.counter += 1;
    localStorage.setItem("clientes", JSON.stringify(clientes));
    return new Cliente(
      cliente.id,
      cliente.nome,
      cliente.nomeFantasia,
      cliente.email,
      cliente.telefone,
      cliente.cpf_cnpj // Atualizado para refletir o campo correto
    );
  }

  /**
   * @param {Cliente} clienteEditado
   */
  static edit(clienteEditado) {
    let clientes = localStorage.getItem("clientes");
    clientes = clientes ? JSON.parse(clientes) : { counter: 0, items: [] };
    const foundIndex = clientes.items.findIndex(
      (cliente) => cliente.id === clienteEditado.id
    );
    clientes.items[foundIndex] = clienteEditado;
    localStorage.setItem("clientes", JSON.stringify(clientes));
    return new Cliente(
      clienteEditado.id,
      clienteEditado.nome,
      clienteEditado.nomeFantasia,
      clienteEditado.email,
      clienteEditado.telefone,
      clienteEditado.cpf_cnpj // Atualizado para refletir o campo correto
    );
  }

  static delete(id) {
    let clientes = localStorage.getItem("clientes");
    clientes = clientes ? JSON.parse(clientes) : { counter: 0, items: [] };
    if (clientes.items.findIndex((cliente) => cliente.id === id) === -1)
      return false;
    clientes.items = clientes.items.filter((cliente) => cliente.id !== id);
    localStorage.setItem("clientes", JSON.stringify(clientes));
    return true;
  }
}

class DBOrcamento {
  /**
   * @returns {Orcamento[]}
   */
  static get() {
    let orcamentos = localStorage.getItem("orcamentos");
    if (!orcamentos) return [];
    return JSON.parse(orcamentos).items.map(
      (orcamento) =>
        new Orcamento(orcamento.id, orcamento.cliente, orcamento.produtos)
    );
  }

  /**
   * @param {number} id
   */
  static getById(id) {
    return this.get().find((orcamento) => orcamento.getId() === id);
  }

  /**
   * @param {Orcamento} orcamento
   */
  static add(orcamento) {
    let orcamentos = localStorage.getItem("orcamentos");
    orcamentos = orcamentos
      ? JSON.parse(orcamentos)
      : { counter: 0, items: [] };
    orcamento.setId(orcamentos.counter);
    orcamentos.items.push(orcamento);
    orcamentos.counter += 1;
    localStorage.setItem("orcamentos", JSON.stringify(orcamentos));
    return new Orcamento(orcamento.id, orcamento.cliente, orcamento.produtos);
  }

  /**
   * @param {Orcamento} orcamentoEditado
   */
  static edit(orcamentoEditado) {
    let orcamentos = localStorage.getItem("orcamentos");
    orcamentos = orcamentos
      ? JSON.parse(orcamentos)
      : { counter: 0, items: [] };
    const foundIndex = orcamentos.items.findIndex(
      (orcamento) => orcamento.id === orcamentoEditado.id
    );
    orcamentos.items[foundIndex] = orcamentoEditado;
    localStorage.setItem("orcamentos", JSON.stringify(orcamentos));
    return new Orcamento(
      orcamentoEditado.id,
      orcamentoEditado.cliente,
      orcamentoEditado.produtos
    );
  }

  static delete(id) {
    let orcamentos = localStorage.getItem("orcamentos");
    orcamentos = orcamentos
      ? JSON.parse(orcamentos)
      : { counter: 0, items: [] };
    if (orcamentos.items.findIndex((orcamento) => orcamento.id === id) === -1)
      return false;
    orcamentos.items = orcamentos.items.filter(
      (orcamento) => orcamento.id !== id
    );
    localStorage.setItem("orcamentos", JSON.stringify(orcamentos));
    return true;
  }
}

export default class DB {
  static produto = DBProduto;
  static cliente = DBCliente;
  static orcamento = DBOrcamento;
}
