class Cliente{
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

class Telefone{
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

class Endereço{
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

class Empresa{
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

let endereço_cli1 = new Endereço("MG", "Uberlândia", "sei n fala patu", 800);
let telefone1_cli1 = new Telefone(12, 128391);
let telefone2_cli1 = new Telefone(12, 123891);
let cliente1 = new Cliente("plim", 71238921, endereço_cli1);
cliente1.addTelefone = telefone1_cli1;
cliente1.addTelefone = telefone2_cli1;

let endereço_cli2 = new Endereço("SC", "Joinville", "também sei n", 120);
let telefone1_cli2 = new Telefone(432, 342543);
let telefone2_cli2 = new Telefone(31, 5346634);
let cliente2 = new Cliente("caio", 654643, endereço_cli2);
cliente2.addTelefone = telefone1_cli2;
cliente2.addTelefone = telefone2_cli2;

let endereço_cli3 = new Endereço("RJ", "São Gonçalo", "rapaiz... ta triste", 750);
let telefone1_cli3 = new Telefone(62, 543532);
let telefone2_cli3 = new Telefone(32, 6532653);
let cliente3 = new Cliente("jooojo", 859302, endereço_cli3);
cliente3.addTelefone = telefone1_cli3;
cliente3.addTelefone = telefone2_cli3;

let endereço_cli4 = new Endereço("AC", "Rio Branco", "já desisti a esse ponto", 200);
let telefone1_cli4 = new Telefone(62, 543532);
let telefone2_cli4 = new Telefone(32, 6532653);
let cliente4 = new Cliente("fernando", 329483290, endereço_cli4);
cliente4.addTelefone = telefone1_cli4;
cliente4.addTelefone = telefone2_cli4;

let endereço_cli5 = new Endereço("PR", "Londrina", "so ruim em geografia", 110);
let telefone1_cli5 = new Telefone(62, 543532);
let telefone2_cli5 = new Telefone(32, 6532653);
let cliente5 = new Cliente("Astolfa", 128391, endereço_cli5);
cliente5.addTelefone = telefone1_cli5;
cliente5.addTelefone = telefone2_cli5;

let endereço_emp1 = new Endereço("SP", "São José dos Campos", "n sei nem daqui", 123);
let telefone1_emp1 = new Telefone(12, 65753806);
let telefone2_emp1 = new Telefone(12, 59832058);
let empresa1 = new Empresa("top Ltda", "mercadinho", "43534534", endereço_emp1);
empresa1.addTelefone = telefone1_emp1;
empresa1.addTelefone = telefone2_emp1;
empresa1.addCliente = cliente1;
empresa1.addCliente = cliente2;
empresa1.addCliente = cliente3;
empresa1.addCliente = cliente4;
empresa1.addCliente = cliente5;

console.log(empresa1.DescriçaoEmpresa)