export default class Telefone{
    constructor(ddd, numero){
        this.ddd = ddd;
        this.numero = numero;
    }

    set setDdd(ddd){
        this.ddd = ddd;}
    get getDdd(){
        return this.ddd;}
    get getUpperDdd(){
        return this.ddd.toUpperCase();}
    get getLowerDdd(){
        return this.ddd.toLowerCase();}

    set setNumero(numero){
        this.numero = numero;}
    get getNumero(){
        return this.numero;}
    get getUpperNumero(){
        return this.numero.toUpperCase();}
    get getLowerNumero(){
        return this.numero.toLowerCase();}

    get DescriçaoTelefone(){
        return `DDD: ${this.ddd} Número: ${this.numero}\n`
    }
}