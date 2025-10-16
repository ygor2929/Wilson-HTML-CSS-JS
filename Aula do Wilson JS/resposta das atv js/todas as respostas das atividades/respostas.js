//1. Crie três variáveis (nome, idade, cidade) e exiba a frase: Sou ___, tenho ___ anos e moro em ___. Restrição: use template string.
// const nome ='Ygor';
// const idade = '24';
// const cidade = 'Sarandi';

// console.log(`Sou ${nome},tenho ${idade} anos e moro em ${cidade}.`)

// //EX 2 
// const n = 'Ygor';
// const carro = 'BMW';
// const cor = 'Preta';

// console.log(`Eu ${n} gosto de ${carro} da cor ${cor}.`)

//2. Declare duas variáveis (largura e altura), calcule e mostre a área de um retângulo.
// const a = 23;
// const b = 10;
// const result = a * b;

// console.log(`Largura ${a},Altura ${b}`)
// console.log(`O resultado da largura ${a} x altura ${b} é ${result}`)
// console.log(`A multiplicação da largura x a altura é ${a * b}`)

//3. Declare uma variável de temperatura em Celsius e converta para Fahrenheit e Kelvin e mostre as duas.
// const celcius = 37;
// const resultFah = celcius * 1.8 + 32;
// const resultkel = celcius + 273.15;

// console.log(`${celcius}°C é o mesmo que ${resultFah.toFixed(2)}°F Fahrenheit`);//.toFixed(2)mostra só duas casas depois da virgula
// console.log(`${celcius}°C é o mesmo que ${resultkel.toFixed(2)}°K Kelvin`);
// console.log(`${celcius}°C é o mesmo que ${resultkel.toFixed(2)}°K Kelvin e também é a mesma coisa ${resultFah.toFixed(2)}°F Fahrenheit`);

//4. Crie uma variável saldo e simule 3 operações: depósito, saque e tarifa fixa. Atualize o saldo a cada operação e mostre o resultado final. (Usar o operador de atribuição de adição)
// let saldo = 1000.00;

// const deposito = 500;
// const saque = 200;
// const tarifa = 15;

// console.log(`O saldo atual é de ${saldo.toFixed(2)}.`);
// console.log(`------------------------------`);

// saldo += deposito;

// console.log(`O saldo depois do deposito é de ${saldo.toFixed(2)}.`);
// console.log(`------------------------------`);

// saldo -= saque;

// console.log(`O saldo depois do saque é de ${saldo.toFixed(2)}.`);
// console.log(`------------------------------`);

// saldo -= tarifa;

// console.log(`O saldo depois da tarifa é de ${saldo.toFixed(2)}.`);
// console.log(`------------------------------`);


//5. crie duas variáveis (preco, descontoPorcent) e calcule o preço final. Arredonde para 2 casas sem usar biblioteca externa.
// const preco = 300;
// const descontoPorcent = 10;

// console.log(`O preço do produto é ${preco.toFixed(2)} e tem ${descontoPorcent}% de desconto.`)
// console.log(`--------------------------------------------------------------------`)

// const desconto =  preco * (descontoPorcent / 100);

// console.log(`O valor do desconto é ${desconto.toFixed(2)} reais.`)
// console.log(`--------------------------------------------------------------------`)

// const valorfinal = preco - desconto;
// console.log(`O valor final com o desconto é ${valorfinal.toFixed(2)}.`)
// console.log(`--------------------------------------------------------------------`)

//6. Dado um número N, mostre “par” ou “ímpar”.
// const parOuImpar = 29873;
// if (parOuImpar % 2 === 0) {
//     console.log(`O número ${parOuImpar} é par`)
// } else {
//     console.log(`O número ${parOuImpar} é ímpar`)
// }

//7. Dadas nota1, nota2 e nota3, calcule a média e classifique:
//○ >= 7: “Aprovado”
//○ >= 5 e < 7: “Recuperação”
//○ < 5: “Reprovado”

// const n1 = 6;
// const n2 = 5;
// const n3 = 3;
// const media = (n1 + n2 + n3) / 3;

// console.log(`A media do aluno é ${media.toFixed(2)}`);
// console.log(`----------------------------`);

// if(media >= 7)
// {
//     console.log(`Aluno com a nota ${media.toFixed(2)} está "APROVADO"`)
// }
// else if (media >= 5 && media < 7 )
// {
//     console.log(`Aluno com a nota ${media.toFixed(2)} está "RECUPERAÇÃO"`)
// }
// else
// {
//     console.log(`Aluno com a nota ${media.toFixed(2)} está "REPROVADO"`)
// }


//8. Com uma variável renda calcule a faixa de imposto:
//○ renda < 2000 → “Isento”
//○ 2000–5000 → “5%”
//○ 5000–10000 → “10%”

// const renda = 1500;
// const descont1 = 5;
// const descont2 = 10;

// console.log(`A renda é de ${renda}`)
// console.log(`----------------------------------------------------------------`)

// desconto10 = renda * descont2.toFixed(2) / 100;
// desconto5 = renda * descont1.toFixed(2) / 100;

// if (renda > 5000 && renda <= 10000)
// {
//     console.log(`O valor do desconto é ${desconto10.toFixed(2)}`)
//     console.log(`Então o valor da renda ficarias ${renda - desconto10.toFixed(2)}`)
//     console.log(`----------------------------------------------------------------`)
// }else if (renda <= 5000 && renda >= 2000)
// {
//     console.log(`O valor do desconto é ${desconto5.toFixed(2)}`)
//     console.log(`Então o valor da renda ficarias ${renda - desconto5.toFixed(2)}`)
//     console.log(`----------------------------------------------------------------`)
// }else
// {
//     console.log(`Com essa renda michuruca é ISENTO`)
//     console.log(`Então o valor da renda ficarias ${renda}`)
//     console.log(`----------------------------------------------------------------`)
// }


//9. Dentro do horário de 00:00 e 23:00, mostre: “Bom dia” (5–11), “Boa tarde” (12–17), “Boa noite” (18–23 ou 0–4).

// const hora = 4; 

// console.log(`Simulando para a hora: ${hora}h`);

// if (hora >= 5 && hora <= 11) {
//   console.log("Bom dia");
// } else if (hora >= 12 && hora <= 17) {
//   console.log("Boa tarde");
// } else if ((hora >= 18 && hora <= 23) || (hora >= 0 && hora <= 4)) {
//   console.log("Boa noite");
// } else {
//   console.log("Hora inválida."); 
// }


//10. Dado idade e temAutorizacao (boolean), permita “Entrada permitida” somente se (idade >= 18) ou (idade < 18 e temAutorizacao === true). Senão, “Entrada negada”.

// idade = 18;
// temAutorizacao = true;

// console.log(`A pessoa tem ${idade} anos.`)
// console.log(`------------------------------`)

// if (idade >= 18 && (idade < 18 || temAutorizacao === true)) {
//   console.log("Resultado: Entrada permitida"); 
// } else {
//   console.log("Resultado: Entrada negada");
//}

//11. Mostre todos os números de 1 a 50 que sejam múltiplos de 3.
// console.log(`O mulitplo de 3 entre 1 a 50 são:`)

//  for(let i = 1; i <= 50; i++)
//  {
// if (i % 3 === 0)
// {
//     console.log(i);
// }
//  }
//12. Calcule a soma dos números pares entre 1 e 100.
// let soma = 0;

// for(let i = 1; i <= 100; i++)
// {
// if (i % 2 === 0)
// {
//   console.log(i)
// soma += i;
// }
// }
// console.log(`A soma de todos os números pares entre 1 a 100 é: ${soma}`)


//13. Dado inicio e fim, liste todos os números do intervalo decrescendo (ex.: 20 a 5).


// for (let i = 20; i >= 5; i--)
// {
// console.log(i);
// }

//14. Imprima a tabuada de N de 1 a 10 num único string, com quebras de linha
// const n = 8;

// for (let i =  1; i <= 10; i++)
// {
// console.log(`\n${n} x ${i} = ${n * i}`)
// }

//15. Gere os primeiros termos da sequência de Fibonacci e mostre em uma linha.

// const Termos = 10;

// let sequenciaFibonacci = [0, 1];

// if (Termos <= 0) {
//   sequenciaFibonacci = []; 
// } else if (Termos === 1) {
//   sequenciaFibonacci = [0]; 
// } else {
//   for (let i = 2; i < Termos; i++) {
//     const proximoNumero = sequenciaFibonacci[i - 1] + sequenciaFibonacci[i - 2];
//     sequenciaFibonacci.push(proximoNumero);
//   }
// }
// console.log("Os primeiros termos da sequência de Fibonacci são:");
// console.log(sequenciaFibonacci.join(" / "));

// //EXEMPLO 2
// const quantidade = 20;
// let secFibonacci = [];
// let a = 0;
// let b = 1;


// for (let i = 0; i < quantidade; i++){
//   secFibonacci.push(a);
  
//   let proximoNumero = a + b;
  
//   a = b;
//   b = proximoNumero;
// }
// console.log("Os primeiros termos da sequência de Fibonacci são:")
// console.log(secFibonacci.join("/"));

//exemplo 3 

// let a = 0;
// let b = 1;

// for(let i = 0; i <= 10; i++){
//   console.log(a);
//   [a, b] = [b, a+b]
// }



//16. Dado um array nomes, exiba cada nome com seus índices.
// const nomes = ["Ygor","Bruno", "Jose", "Ana"]
// nomes.push("Pedro");  //acrescenta no final 
// nomes.unshift("2");  //acrescenta no começo 
// nomes.splice(2, 0, 'karlos') // acrecenta nome com o indice 
// for (let i = 0; i < nomes.length; i++){
//     console.log(`Índice ${i}: ${nomes[i]}`)
// }

//17. Dado numeros, crie outro array apenas com os valores maiores que 10 usando for (usar push).
// let list1 = ["1","2","3","10","11","12"];
// let n10 = [];

// for (let i = 0; i < list1.length; i++){
//     if (list1[i] >= 10){
//         n10.push(list1[i])
//     }
// }
// console.log(n10)

