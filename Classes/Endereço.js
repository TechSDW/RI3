export default class Endereço{
    constructor(estado, cidade, rua, numero){
        this.estado = estado;
        this.cidade = cidade;
        this.rua = rua;
        this.numero = numero;
    }

    set setEstado(estado){
        this.estado = estado;}
    get getEstado(){
        return this.estado;}
    get getUpperEstado(){
        return this.estado.toUpperCase();}
    get getLowerEstado(){
        return this.estado.toLowerCase();}

    set setCidade(cidade){
        this.cidade = cidade;}
    get getCidade(){
        return this.cidade;}
    get getUpperCidade(){
        return this.cidade.toUpperCase();}
    get getLowerCidade(){
        return this.cidade.toLowerCase();}

    set setRua(rua){
        this.rua = rua;}
    get getRua(){
        return this.rua;}
    get getUpperRua(){
        return this.rua.toUpperCase();}
    get getLowerRua(){
        return this.rua.toLowerCase();}

    set setNumero(numero){
        this.numero = numero;}
    get getNumero(){
        return this.numero;}
    get getUpperNumero(){
        return this.numero.toUpperCase();}
    get getLowerRua(){
        return this.numero.toLowerCase();}

    get DescriçaoEndereço(){
        return `Estado: ${this.getUpperEstado} Cidade: ${this.cidade} Rua: ${this.rua} Número: ${this.numero}`
    }
}