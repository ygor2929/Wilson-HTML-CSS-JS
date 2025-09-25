const bmw = document.getElementById("foto bmw");

const mensagem = document.getElementById("mensagem");

bmw.addEventListener("mouseover", function() {
    mensagem.textContent = "Carro alemão de luxo"
    mensagem.addEventListener('mouseout' , function() {
        mensagem.textContent = ''
    });
    
});