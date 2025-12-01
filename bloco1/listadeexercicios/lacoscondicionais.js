// IF 1) Desenvolva um algoritmo que leia 3 valores inteiros 
// A, B e C e imprima na tela se a soma de A + B é maior, menor ou igual a C.

const prompt = require("readline-sync");

/*
let a = prompt.questionInt("Digite o primeiro valor: ");
let b = prompt.questionInt("Digite o segundo valor: ");
let c = prompt.questionInt("Digite o terceiro valor: ");

const soma = a + b;

if (soma > c) {
    console.log(`Soma = ${soma}, A soma de A+B é maior que C.`);
} else if (soma == c) {
    console.log(`Soma = ${soma}, A soma de A+B é igual a C.`);
    
} else {
    console.log(`Soma = ${soma}, A soma de A+B é menor que C. `);

}
*/






// 2) Escreva um algoritmo que leia um número inteiro via teclado e mostre na tela uma mensagem 
// indicando se este número é par ou ímpar e se o número é positivo ou negativo.

/*
let numero = prompt.questionInt("Digite o valor: ")
let tipo, sinal;

if (numero % 2 == 0) {
    tipo = 'par'
} else {
    tipo = 'impar'
}

if (numero > 0) {
    sinal = 'positivo'
} else {
    sinal = 'negativo'
}

console.log(`O número ${numero} é ${tipo} e ${sinal}.`);

*/






// SWITCH 1) Com base na tabela abaixo, escreva um algoritmo que leia o 
// código de um item (número inteiro entre 1 e 6) e a quantidade comprada deste item (número inteiro). 
// A seguir, mostre na tela o valor total da conta e o nome do produto que foi comprado.

/*
const codigo = prompt.questionInt("Digite o codigo do produto entre 1 e 6: ");
const qtd = prompt.questionInt("Digite a quantidade do produto: ");
let produto, preco;


switch (codigo) {
    case 1:
        produto = 'Cachorro quente';
        preco = 10.00;
        break;
    case 2:
        produto = 'X-salada';
        preco = 15.00;
        break;
    case 3:
        produto = 'X-bacon';
        preco = 18.00;
        break;
    case 4:
        produto = 'Bauru';
        preco = 12.00;
        break;
    case 5:
        produto = 'refrigerante';
        preco = 8.00;
        break;
    case 6:
        produto = 'suco de laranja';
        preco = 13.00;
        break;

    default:
        console.log("Código inválido!");
        return;
}

const total = qtd * preco;

console.log(`O produto escolhido foi ${produto}, quantidade: ${qtd} e o valor total é de: R$${total}`);

*/






// 2) Com base na tabela abaixo, escreva um algoritmo que leia o Nome do Colaborador (string),
//  o Código do Cargo do Colaborador (número inteiro entre 1 e 6) e o Salário (número real).
//  A seguir, mostre na tela o Nome do Colaborador, o Cargo e o novo Salário reajustado.

/*
let nome = prompt.question("Digite o nome do colaborador: ");
let codigo = prompt.questionInt("Digite o codigo do colaborador: ");
let salario = prompt.questionInt("Digite o salario do colaborador: ");
let cargo, percentualReajuste;

switch(codigo) {
    case 1:
        cargo = 'Gerente';
        percentualReajuste = 0.10;
        break;
    case 2:
        cargo = 'Vendedor';
        percentualReajuste = 0.07;
        break;
    case 3:
        cargo = 'Supervisor';
        percentualReajuste = 0.09;
        break;
    case 4:
        cargo = 'Motorista';
        percentualReajuste = 0.06;
        break;
    case 5:
        cargo = 'Estoquista';
        percentualReajuste = 0.05;
        break;
    case 6:
        cargo = 'Técnico de TI';
        percentualReajuste = 0.08;
        break;
    default:
        console.log("Código inválido!");
        return;
}

let novoSalario = salario + (percentualReajuste * salario);

console.log(`Nome do colaborador: ${nome}`);
console.log(`Cargo do colaborador: ${cargo}`);
console.log(`Salário do colaborador: ${salario}`);
console.log(`Novo salário do colaborador: ${novoSalario}`);
*/
