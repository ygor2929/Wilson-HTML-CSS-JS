// 1) Calculadora de Viagem
// Crie um script que calcule o custo total de uma viagem. Você terá as seguintes variáveis:
// distanciaKm: A distância total da viagem em quilômetros.
// consumoKmLitro: O consumo médio do veículo em km por litro.
// precoLitro: O preço do litro do combustível.
// Calcule o total de litros necessários e o custo total da viagem. Exiba o resultado de forma clara, formatado para duas casas decimais.


// const distanciaKm = 200;
// const consumoKmLitro = 40;
// const precoLitro = 6.70;

// const totaldL = distanciaKm / consumoKmLitro;
// const custoTotal = consumoKmLitro * precoLitro;

// console.log(`O carro com ${distanciaKm.toFixed(2)}Km ,fez ${totaldL}Km/L e gastou R$${custoTotal.toFixed(2)}`);



// 2) Classificador de Triângulos
// Dados três lados de um triângulo, ladoA, ladoB e ladoC, crie um script que primeiro verifique se eles podem formar um triângulo. Depois, caso possam, classifique o triângulo como:
// Equilátero: todos os lados são iguais.
// Isósceles: dois lados são iguais.
// Escaleno: todos os lados são diferentes.
// Regra para formar um triângulo: A soma de quaisquer dois lados deve ser sempre maior que o terceiro lado.

const ladoA = 10;
const ladoB = 10;
const ladoC = 50;

if(ladoA + ladoB > ladoC && ladoA + ladoC > ladoB && ladoB + ladoC > ladoA){
   console.log("Os lados podem formar um triângulo")
if (ladoA === ladoB && ladoB === ladoC)
{
    console.log("O triângulo é um Equilátero")
}else if (ladoA === ladoB || ladoB === ladoC || ladoA === ladoC)
{
    console.log("O triângulo é um Isósceles")
}else
{
   console.log("O triângulo é um Escaleno")
}

}else{
    console.log("Os lados não podem formar um triângulo")
}

// 3) Verificador de Número Primo
// Crie um script que, dado um número N, verifique se ele é um número primo. Um número primo é aquele que só é divisível por 1 e por ele mesmo.
// Dica: Crie um laço for que comece em 2 e vá até N-1. Dentro do laço, verifique se N é divisível por algum desses números. Se for, ele não é primo.

// const numeroParaverificar = 4;
// let numPrimo = true;

// if (numeroParaverificar < 2) {
//     numPrimo = false;
// } else {
//     for (let i = 2; i < numeroParaverificar; i++) {
//         if (numeroParaverificar % i === 0) {
//             numPrimo = false;
//             break;
//         }
//     }
// }

// if (numPrimo) {
//     console.log(`${numeroParaverificar} é um número primo.`);
// } else {
//     console.log(`${numeroParaverificar} não é um número primo.`);
// }