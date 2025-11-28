const prompt = require("prompt-sync")();

// ===== Exercício 1 =====
/*
let salario = Number(prompt("Digite seu salário: "));
let abono = Number(prompt("Digite o abono: "))
const novoSalario = (salario + abono);

console.log(`Seu novo salário é R$${novoSalario.toFixed(2)}`);
*/

// ===== Exercício 2 =====
/*
let nota1 = Number(prompt("Digite a primeira nota: "));
let nota2 = Number(prompt("Digite a segunda nota: "));
let nota3 = Number(prompt("Digite a terceira nota: "));
let nota4 = Number(prompt("Digite a quarta nota: "));

const media = (nota1 + nota2 + nota3 + nota4) / 4;

console.log(`Média final: ${media.toFixed(2)}`);
*/

// ===== Exercício 3 =====
/*
let salarioBruto = Number(prompt("Digite o salário bruto: "));
let adicionalNoturno = Number(prompt("Digite o adicional noturno: "));
let horasExtras = Number(prompt("Digite o valor da hora extra: "));
let descontos = Number(prompt("Digite o valor dos descontos:"));

const salarioLiquido = salarioBruto + adicionalNoturno + (horasExtras * 5) - descontos;

console.log(`O salário líquido é de ${salarioLiquido.toFixed(2)}`);
*/

// ===== Exercício 4 =====
let v1 = Number(prompt("Digite o primeiro valor: "));
let v2 = Number(prompt("Digite o segundo valor: "));
let v3 = Number(prompt("Digite o terceiro valor: "));
let v4 = Number(prompt("Digite o quarto valor: "));

const calculo =  (v1 * v2) - (v3 * v4);

console.log(`Diferença do produto entre o v1 e v2 pelo produto entre o v3 e o v4: ${calculo}`);

