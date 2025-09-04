import Endereço from "./Endereço.js"

export default class Empresa{
    #cnpj

    constructor(razaoSocial, nome, cnpj, endereço){
        this.razaoSocial = razaoSocial;
        this.nome = nome;
        this.#cnpj = cnpj;
        this.endereço = new Endereço(endereço.getEstado, endereço.getCidade, endereço.getRua, endereço.getNumero);
        this.clientes = new Set();
        this.telefones = new Set();
    }

    set setRazaoSocial(razaoSocial){
        this.razaoSocial = razaoSocial;}
    get getRazaoSocial(){
        return this.razaoSocial;}
    get getUpperRazaoSocial(){
        return this.razaoSocial.toUpperCase();}
    get getLowerRazaoSocial(){
        return this.razaoSocial.toLowerCase();}

    set setNome(nome){
        this.nome = nome;}
    get getNome(){
        return this.nome;}
    get getUpperNome(){
        return this.nome.toUpperCase();}
    get getLowerNome(){
        return this.nome.toLowerCase();}

    get getCnpj(){
        return this.#cnpj;}

    set setEndereço(endereço){
        this.endereço = endereço;}
    get getEndereço(){
        return this.endereço;}

    set addCliente(cliente){
        this.clientes.add(cliente);}
    get getClientes(){
        return this.clientes;}

    set addTelefone(telefone){
        this.telefones.add(telefone);}
    get getTelefones(){
        return this.telefones;}

    get DescriçaoEmpresa(){
        let descriçaoClientes = ""
        this.clientes.forEach(element => {
            descriçaoClientes += element.DescriçaoCliente;
        });

        return `Razão social: ${this.getUpperRazaoSocial}
Nome fantasia: ${this.nome}
---------------------------
${descriçaoClientes}`
    }
}