export default class Produto {
    nome
    valorCusto
    precoVenda
    quantidade
    /**
     * @param {number} id
     * @param {string} nome
     * @param {number} valorCusto
     * @param {number} precoVenda
     * @param {number} quantidade
    */
    constructor(id, nome, valorCusto, precoVenda, quantidade) {
        this.id = id;
        this.nome = nome;
        this.valorCusto = valorCusto;
        this.precoVenda = precoVenda;
        this.quantidade = quantidade;
    }
    getId() {
        return this.id;
    }
    setId(id) {
        this.id = id;
    }
    getNome() {
        return this.nome;
    }
    setNome(nome) {
        this.nome = nome;
    }
    getValorCusto() {
        return this.valorCusto;
    }
    setValorCusto(valorCusto) {
        this.valorCusto = valorCusto;
    }
    getPrecoVenda() {
        return this.precoVenda;
    }
    setPrecoVenda(precoVenda) {
        this.precoVenda = precoVenda;
    }
    getQuantidade() {
        return this.quantidade;
    }
    setQuantidade(quantidade) {
        this.quantidade = quantidade;
    }
}
