// //Criar uma variável chamada 'nome' e mostre no console: "Olá, meu nome é.......". Usando templateString
// const nome = 'Wilson';
// console.log(`Olá, meu nome é ${nome}`);

// //Crie duas variáveis de números e mostre a soma
// const num1 = 3;
// const num2 = 5;
// const soma = num1 + num2;
// console.log(`A soma de ${num1} + ${num2} é ${soma}`);

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
// Criar uma variável 'nome' com seu nome e mostrar 'Olá,<nome>!.'
// let nome = 'Ygor';
// console.log('Olá,' + nome)
// console.log(`Olá,${nome}`)


// variavel nome,idade,cidade - 'Meu nome é 'nome', eu tenho 'idade' anos e moro em 'cidade'
// let nome = 'Ygor';
// let idade = '23+1';
// let cidade = 'Sarandi';
// console.log(`Meu nome é ${nome}, eu tenho ${idade} anos e moro em ${cidade}`)


// imprimindo tipos de dados 
// EX1
// const numero = 123;
// const numero2 = 123;
// // const naoEhNumero = '123';
// //console.log(numero + naoEhNumero); não soma,só add na frente 
// // console.log(numero - naoEhNumero); //Ele subtrai
// // console.log(typeof naoEhNumero);
// // console.log(typeof numero);
// // console.log(typeof true);
// // console.log(typeof '');
// console.log(numero + numero2);

// EX2
// const num1 =  7;
// const num2 =  '11';
// console.log(num1 == num2);

// const num3 =  7;
// const num4 =  '7';
// console.log(num3 == num4);

// const num5 =  7;
// const num6 =  '7';
// console.log(num5 === num6);


// Crie 5 variaveis com tipos diferentes.Em seguida imprima no console os tipos delas.

// let number1 = 12;
// console.log(typeof number1 );

// let sting1 = 'Olá,Ygor';
// console.log(typeof sting1);

// let boolean1 = true;
// console.log(typeof boolean1);

// let object1 = [1,'oi',false];
// console.log(typeof object1)

// let semValor;
// console.log(semValor);

// EX3
// const idade =  18;

// if (idade >= 18){
//     console.log('É maior de idade')
// } else {
// console.log('É menor de idade')
// }

// exercicio
// const votar = 69;

// if (votar < 16){
//     console.log('Não pode votar')
// }else if (votar >= 16 && votar < 18){
// console.log('Não é obrigatorio votar,mas pode votar')
// }else if(votar >= 18 && votar < 70){
//     console.log('É obrigatorio votar')
// }else{
//     console.log('Não é obrigatorio,mas pode votar')
// }

// ver se o numero é par ou impar 
// const numero = 12;
// if (numero % 2 === 0) {
//     console.log('É par')
// }else{
//     console.log('É impar')
// }

// criar variavel com valor .Condiçãp se o valor > 100 desconto de 10% senão decaonto de 5%.Valor final com 2 casas decimais 
// const valor = 2000;
// if (valor > 100) {
//     desconto = valor * 0.10;
// }else{

// desconto = valor * 0.05;
// }
// console.log(`O desconto é de : R$ ${desconto.toFixed(2)}`)

// ex4
// Criar uma variavel mostrando o dia 3.Mostre dom=1 seg=2...
// const dia =  10;
// let nomeDia ;
// switch(dia){
//     case 1:
//         nomeDia = "Domingo";
//         break;
//     case 2:
//         nomeDia = "Segunda";
//         break;
//     case 3:
//          nomeDia = "Terça";
//          break;
//     case 4:
//         nomeDia = "Quarta";
//         break;
//     case 5:
//         nomeDia = "Quinta";
//         break;
//     case 6:
//          nomeDia = "Sexta";
//          break;
//     case 7:
//          nomeDia = "Sábado";
//         break; 
        
//         default: nomeDia = 'Dia invalido'
        
// }
// console.log(nomeDia);

// laços (for/while)
// imprima os numeros de 1 a 5
// for (let i = 0; i < 5; i++){
//     console.log(i);
// }

// const n = 50;
// let total = 0;
// for(let i = 1; i <= n; i++){
//     total += i;
// }
// console.log(total);

// mostrar a tabuada do 7 de 1 a 10

// const n = 23;
// for (let i = 1; i <= 10; i++){
//     console.log(`${n} x ${i} = ${n * i}`)
// }

//while
//imprimir de 5 a 1 
// let i = 5;
// while (i >= 1){
//     console.log(i);
//     i--;
// }

//imprimir numero de 0 a 10,mas de 2 em 2 while
// let i = 0;
//  while (i <= 100){
//      console.log(i);
//     i = i + 2;
// }

//imprimir numero de 0 a 10,mas de 2 em 2 for 

// for (let i = 0; i <= 10; i = i + 2){
//     console.log(i);
// }

//Arrays
// let lista =  ['Arroz', 'Feijão','Picanha'];
// console.log(lista);

// let lista2 =  ['Arroz', 'Feijão','Picanha'];
// console.log(lista2[1]);

// let lista3 =  ['Arroz', 'Feijão','Picanha'];
// console.log(lista3.length);

// let lista4 =  ['Arroz', 'Feijão','Picanha'];
// console.log(lista4.push('Macarrão'));
// console.log(lista4);
// console.log(lista4.unshift('Farinha'));
// console.log(lista4);

// let indice = lista4.indexOf('Feijão');
// if (indice !== -1 ){
//     lista4.splice(indice,1);
// }
// console.log(lista4);

//somar valores dentro de um array 
// let lista = [10, 2,1,2]
// let soma = 0;
// for (let i = 0; i < lista.length; i++){
//     soma += lista[i];
// }
// console.log("O resultado da soma de 10 + 2 + 1 + 2 é:", soma);

//encontre o maior numero dentro de um array 
// const arr = [12,3,25,70,33]
// let maiornum = arr [0];

// for (let i = 0; i < arr.length; i++){
//     if (arr[i] > maiornum){   //para achar o menor número,iverter o sinal aqui no if 
//         maiornum = arr[i]
//     }
// }
// console.log('O maior numero é:',maiornum);

//string 
//contar caracteres 
// const nome = 'Ygor Barbosa'
// console.log(nome);
// console.log("A quantidade de caracteres:", nome.length);//comprimento da frase contando o espaço e ,
// console.log(nome[11]); //mostra qual letra é 
// console.log(nome.indexOf('Barbosa')); // onde começa
// console.log(nome.slice(0,4)); // vai dar um pedaço da frase 
// console.log(nome.toUpperCase()) //deixa a frase inteira maiuscula
// console.log(nome.toLowerCase()) //deixa a frase inteira minuscula 
// console.log(nome.includes('')) //diferencia de maiusculo e minusculo 

// //Troca de valores - Declare duas variáveis numéricas e crie um script que troque os valores entre elas. Ou seja, no final a primeira variável deve ter o valor da segunda e o da segunda deverá ter o valor da primeira.

// // let a = 10;
// // let b = 15;
// // console.log(a);
// // console.log(b);

// // b = a;
// // a = b;

// // console.log(a);
// // console.log(b);

// let a1 = 20;
// let b1 = 35;
// console.log(`O valor de a1 é ${a1} e o valor de b1 é ${b1}`);
// let temporaria = a1;
// a1 = b1;
// b1 = temporaria;
// console.log(`O valor de a1 é ${a1} e o valor de b1 é ${b1}`);

//Crie duas variáveis numéricas e exiba o resultado das 4 operações básica e do resto da divisão.
// const a = 100;
// const b = 20;

// const soma = a + b;
// const subt = a - b;
// const mult = a * b;
// const div = a / b;
// const resto = a % b;

// console.log(`A soma de a e b é ${soma}. A subtração de a e b é ${subt}. A multiplicação de a e b ${mult}. A divisão de a e b é ${div}. O resto da divisão de a e b é ${resto}`);

// crie uma variável para receber uma cor do semáforo e depois exiba se o usuário pode seguir, se atentar ou parar. Crie uma variável, também para 'cor inválida'

// const cor = 'verde';
// if (cor === 'Verde' || cor === 'verde') {
//     console.log(`O semáforo está ${cor}, pode seguir`);
// } else if (cor === 'Amarelo') {
//     console.log(`O semáforo está ${cor}, atenção!`);
// } else if (cor === 'Vermelho') {
//     console.log(`O semáforo está ${cor}, não pode seguir`);
// } else {
//     console.log(`A cor ${cor} é inválida`);
// }

//usando o laço for e uma estrutura if, crie um script que conte e exiba no console quantos números pares exitem entre 1 e 50.

// let quantidadePar = 0;
// for (let i = 1; i <= 50; i++) {
//     if (i % 2 === 0) {
//         console.log(`${i} é par`);
//         quantidadePar++;
//     }
// }
// console.log(`Entre os números 1 e 50 têm ${quantidadePar} pares`);

// Some todos os números de 1 a 100 e mostre o resultado. (for)

// let soma = 0;
// for (let i = 1; i <= 100; i++){
//     soma += i;
// }
// console.log(`A soma de 1 a 100 é: ${soma}`);

// crie um array com 5 nomes e mostre cada nome 
//  let nomes = [ 'Ana','ze','ygor','joao','carlos']
//  for (let i = 0; i < nomes.length; i++) {   //.length mostra o que tem dentro do array 
//     console.log(nomes[i]);
    
//  }


// function apresentacao(nome){
//     return `Olá ${nome}`;                      //usando uma função 
// }
// console.log(apresentacao('Ygor'));


