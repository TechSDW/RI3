import Endereço from "./Endereço.js"

export default class Cliente{
    #cpf

    constructor(nome, cpf, endereço){
        this.nome = nome;
        this.#cpf = cpf;
        this.endereço = new Endereço(endereço.getEstado, endereço.getCidade, endereço.getRua, endereço.getNumero);
        this.telefones = new Set();
    }

    set setNome(nome){
        this.nome = nome;}
    get getNome(){
        return this.nome;}
    get getUpperNome(){
        return this.nome.toUpperCase();}
    get getLowerNome(){
        return this.nome.toLowerCase();}

    set setEndereço(endereço){
        this.endereço = endereço;}
    get getEndereço(){
        return this.endereço;}

    set addTelefone(telefone){
        this.telefones.add(telefone);}
    get getTelefones(){
        return this.telefones;}

    get getCpf(){
        return this.#cpf;}

    get DescriçaoCliente(){
        let descriçaoTelefones = ""

        this.telefones.forEach(element => {
            descriçaoTelefones += element.DescriçaoTelefone
        });

        return `Nome: ${this.nome}
${this.endereço.DescriçaoEndereço}
${descriçaoTelefones}\n`
    }
}