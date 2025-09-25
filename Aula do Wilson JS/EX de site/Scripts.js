// console.log(document.body);//Mostra no console o body do HTML

// console.log(document.body.childNodes); // Mostra no console um Array com todos os elementos usados no body do HTML

// console.log(document.body.childNodes[1]); // como é um Array, posso acessar o índice. Aqui estou acessando o índice 1 do body, que vai ser o header.    

// console.log(document.body.childNodes[1].childNodes); // aqui pesquisa a lista (array) do indíce 1 da lista do body.

// console.log(document.body.childNodes[1].childNodes[1].textContent); // aqui pesquisa o índice 1 da lista do header (que é o índice 1 da lista do body). Como estou usando o textContent, ele não vai trazer a lista, mas sim o texto do índice, que será "Título".

//Selecionar por TAG
const listaItens = document.getElementsByTagName('li');

console.log(listaItens);

// const botao = document.getElementById('btn');

// botao.addEventListener('click', function() { alert("Você clicou no botão!")});
const cor = document.getElementById('btn');
cor.addEventListener('click',function() {document.body.style.backgroundColor = '#798aebff'})