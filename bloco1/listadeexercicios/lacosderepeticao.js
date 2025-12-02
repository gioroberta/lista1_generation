const prompt = require("readline-sync");

// 1) DO Escreva um algoritmo, que leia 2 números inteiros via teclado, onde o primeiro número deve ser menor 
// do que o segundo número. Caso contrário, deve ser exibida uma mensagem na tela 
// informando que o intervalo é inválido e sair do programa. 
// No intervalo informado, mostre na tela todos os números que são múltiplos de 3 e 5. 

/*
let a, b;
console.log("Digite dois numeros, no qual o primeiro número deve ser menor que o segundo numero.");
a = prompt.questionInt("Digite o primeiro numero: ");
b = prompt.questionInt("Digite o segundo numero: ");

if (a >= b) {
    console.log("Intervalo é inválido. O primeiro número deve ser menor que o segundo.");
    process.exit();
}

for (let i = a; i <= b; i++) {
    if (i % 3 === 0 && i % 5 === 0){
        console.log(`${i} é múltiplo de 3 e 5`);
    }
}
*/

// 2) WHILE Escreva um algoritmo, que leia a idade de várias pessoas (números inteiros),
// via teclado e mostre na tela o total de pessoas cuja idade seja menor que 21 anos 
// e o total de pessoas cuja idade, seja maior que 50 anos. A leitura dos dados deve ser 
// finalizada ao digitar uma idade negativa.

/*
let contador21 = 0, contador50 = 0;
let idade = prompt.questionInt("Digite uma idade: ");

while (idade>0) {
    if (idade < 21) {
        contador21++;
    } else if (idade > 50) {
        contador50++;
    }
idade = prompt.questionInt("Digite uma idade: ");
}
console.log(`Total de pessoas com idade inferior a 21 anos: ${contador21}`);
console.log(`Total de pessoas com idade superior a 50 anos: ${contador50}`);
*/



// 3) DO WHILE Escreva um algoritmo, que leia números inteiros via teclado, até que o número zero seja digitado. 
// Ao final, mostre na tela a soma de todos os números digitados, que sejam positivos.

/*
let numero, contador = 0;

do {
    numero = prompt.questionInt("Digite um numero: ")
    if (numero > 0) {
    contador+= numero;
}
} while (numero != 0)


console.log(`A soma de todos os números digitados positivos é: ${contador}`)
*/

// 4)VETORES Dado um vetor contendo 10 números inteiros não ordenados e não repetidos, 
// construa um algoritmo que consiga pesquisar dados no vetor, onde o usuário irá digitar um número 
// e o programa deve exibir na tela a posição deste número no vetor. 
// Caso o número não seja encontrado, a mensagem: “Não foi encontrado!” deve ser exibida na tela.


let vetor = [2, 5, 1, 3, 4, 9, 7, 8, 10, 6];

let numero = prompt.questionInt("Digite o numero que voce deseja encontrar: ");
let encontrado = false;

for (let i = 0; i < vetor.length; i++) {
    if (vetor[i] === numero) {
        console.log(`O número ${numero} está localizado na posição: ${i}`)
        encontrado = true;
    }
}

        if (encontrado === false) {
            console.log(`O número ${numero} não foi encontrado.`);
        }








