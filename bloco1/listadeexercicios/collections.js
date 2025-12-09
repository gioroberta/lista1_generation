const prompt = require("readline-sync");


// Escreva um programa para criar uma Collection Array de Objetos do 
// tipo string. O programa deverá solir ao usuário, que ele digite 
// via teclado 5 cores e deverá adicioná-las individualmente no Array. 
// Em seguida, faça o que se pede:
// Mostre na tela todas as cores adicionadas. 
// Mostre na tela todas as cores adicionadas, ordenadas em ordem crescente.

/*

// Cria um array vazio
let cores = [];

// Solicita 5 cores ao usuário
for (let i = 0; i < 5; i++) {
    let cor = prompt.question(`Digite a cor ${i + 1}: `);
    cores.push(cor);
}

// Mostra todas as cores digitadas
console.log("\nCores digitadas:");
console.log(cores);

// Ordena as cores
let coresOrdenadas = [...cores].sort();

// Mostra as cores ordenadas
console.log("\nCores em ordem crescente:");
console.log(coresOrdenadas);

*/

let numerosDigitados = [];

// Pede 10 números diferentes
while (numerosDigitados.length < 10) {
    let num = prompt.questionInt(`Digite o número ${numerosDigitados.length + 1}: `);

    if (numerosDigitados.includes(num)) {
        console.log("Número já digitado! Digite outro.");
    } else {
        numerosDigitados.push(num);
    }
}

// Cria o Set a partir do array
let numerosSet = new Set(numerosDigitados);


// join : “junta” todos os elementos do array em uma única string
// os ... antes tranformam o set em array, pra possiblitar usar os metodos de array
// Mostra os elementos do Set
console.log("\nElementos do Set:");
console.log([...numerosSet].join(", "));

