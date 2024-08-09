export default class Cliente {
    id
    nome
    nomeFantasia
    email
    telefone
    cpf_cnpj
    /**
     * @param {number} id
     * @param {string} nome
     * @param {string} nomeFantasia
     * @param {string} email
     * @param {string} telefone
     * @param {string} cpf_cnpj
    */
    constructor(id, nome, nomeFantasia, email, telefone, cpf_cnpj) {
        this.id = id;
        this.nome = nome;
        this.nomeFantasia = nomeFantasia;
        this.email = email;
        this.telefone = telefone;
        this.cpf_cnpj = cpf_cnpj;
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
    getNomeFantasia() {
        return this.nomeFantasia
    }
    setNomeFantasia(nomeFantasia) {
        this.nomeFantasia = nomeFantasia
    }
    getEmail() {
        return this.email;
    }
    setEmail(email) {
        this.email = email;
    }
    getTelefone() {
        return this.telefone
    }
    setTelefone(telefone) {
        this.telefone = telefone
    }
    getCpf_Cnpj() {
        return this.cpf_cnpj;
    }
    setCpf_Cnpj(cpf_cnpj) {
        this.cpf_cnpj = cpf_cnpj;
    }
}
