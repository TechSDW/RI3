import Cliente from "./Classes/Cliente.js";
import Telefone from "./Classes/Telefone.js";
import Endereço from "./Classes/Endereço.js";
import Empresa from "./Classes/Empresa.js";

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