// //Criar uma variável chamada 'nome' e mostre no console: "Olá, meu nome é.......". Usando templateString
const nome = 'Wilson';
console.log(`Olá, meu nome é ${nome}`);

// //Crie duas variáveis de números e mostre a soma
const num1 = 3;
const num2 = 5;
const soma = num1 + num2;
console.log(`A soma de ${num1} + ${num2} é ${soma}`);

// //calcule o dobro de um número armazenado em uma variável
// const n1 = 10;
// const mult = n1 * 2;
// console.log(`O dobro de ${n1} é ${mult}`);

// const num = 7;
// console.log(`O dobro de ${num} é ${num + num}`);

// //Verifique se um número é par ou impar
// const parOuImpar = 2;
// if (parOuImpar % 2 === 0) {
//     console.log(`O número ${parOuImpar} é par`)
// } else {
//     console.log(`O número ${parOuImpar} é ímpar`)
// }

// //Verificar se uma pessoa é maior de idade
// const idade = 18;
// if (idade >=18) {
//     console.log('Maior de idade')
// } else {
//     console.log('Menor de idade');
// }

// //operador ternário ? :
// const idade2 = 18;
// const maioridade2 = (idade2 >= 18) ? `Você tem ${idade2} e é maior de idade` : 'Menor de idade';
// console.log(maioridade2)

// //Receba uma nota (0-10) e exiba: "Aprovado" >7, "Recuperação >=5 && <=6.9" ou "Reprovado < 4.9"
// const nota = 11;
// if (nota >=7 && nota <=10) {
//     console.log('Aprovado')
// } else if (nota >=5 && nota <= 6.9) {
//     console.log('Recuperação')
// } else if (nota <= 4.9 && nota >= 0) {
//     console.log('Reprovado')
// } else {
//     console.log('Nota inválida')
// }

//Troca de valores - Declare duas variáveis numericas e crie um script que troque os valores entre elas.
//Ou seja,no final a primeira variavel deve ter o valor da segunda e o da segunda deverá ter o valor da primeira 
// R:
// let n1 = 10;
// let n2 = 11;

// console.log(`Antes das troca n1:${n1} n2:${n2}`)

// let n3 = n1
// n1 = n2;
// n2 = n3;

// console.log(`Depois das trocas:n1:${n1} n2:${n2}`)

//Crie duas variaáveis numéricas e exiba o reusltado das 4 operaçoes básicas e do resto da divisão 
// const n1 = 10;
// const n2 = 20;

// console.log(`A soma de ${n1} + ${n2} = ${n1 + n2}`)
// console.log(`A subtração de ${n1} - ${n2} = ${n1 - n2}`)
// console.log(`A multiplicação de ${n1} * ${n2} = ${n1 * n2}`)
// console.log(`A divisão  de ${n1} / ${n2} = ${n1 / n2}`)
// console.log(`O resto da divisão de ${n1} % ${n2} = ${n1 % n2}`)


//crie uma variável para receber uma cor do semáforo e depois exiba se o usuario pode seguir ,se atentar ou parar .crie uma variavel para cor invalida 

// const cor = 'verde';

// if (cor === 'verde'){
//     console.log(`O semáforo está ${cor}, pode seguir!`)
// }else if(cor === 'vermelho'){
//     console.log(`O semáforo está ${cor}, não pode seguir!`)
// }else if(cor === 'amarelo'){
//     console.log(`O semáforo está ${cor}, ATENÇÃO!`)
// }else{
//     console.log(`${cor} invalida,Digite uma cor valida"verde,vermelho ou amarelo"!`)
// }

//usando laço for e uma estrutura if , crie um script que conte e exiba no console quantos nuemros pares existem entre 1 a 50 

// let pares = 0;

// for (let i = 1; i <= 50; i++){
//     if (i % 2 === 0){
//         console.log(`${i} é par`)
//         pares++;
//     }
// }
// console.log(`A quantidade de numeoros pares de 1 a 50 são:${pares}`)