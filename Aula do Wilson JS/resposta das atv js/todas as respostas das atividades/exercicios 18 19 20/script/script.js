// =======================================================
//  ARQUIVO SCRIPT.JS
// =======================================================

// --- Solução para a Questão 18 ---
// Seleciona o elemento com id="titulo" e altera seu texto.
const titulo = document.getElementById('titulo');
if (titulo) {
    titulo.textContent = 'Lista de Tarefas';
}


// --- Solução para a Questão 19 ---
// Seleciona o primeiro parágrafo dentro de section#sobre e muda sua cor.
const primeiroParagrafo = document.querySelector('#sobre p');
if (primeiroParagrafo) {
    primeiroParagrafo.style.color = 'blue';
}


// --- Solução para a Questão 20 ---
// Ao pressionar uma tecla, mostra qual foi pressionada dentro da div#caixa.
const caixa = document.getElementById('caixa');
if (caixa) {
    // Adiciona o "ouvinte de evento" ao documento inteiro.
    document.addEventListener('keydown', function(event) {
        // A propriedade 'key' do objeto 'event' nos dá o nome da tecla.
        caixa.textContent = `Tecla pressionada: ${event.key}`;
    });
}