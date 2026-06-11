let pontos = 0;

const botoes = document.querySelectorAll('.acao');
const resultado = document.getElementById('resultado');
const reiniciar = document.getElementById('reiniciar');

function atualizarResultado() {
    resultado.textContent = `Pontuação: ${pontos}`;
    
    if (pontos >= 20) {
        resultado.style.backgroundColor = "#a8e6a8"; // verde
        resultado.textContent += " 🎉 Produção Sustentável!";
    } else if (pontos >= 10) {
        resultado.style.backgroundColor = "#fff3b0"; // amarelo
        resultado.textContent += " 🙂 Produção Razoável";
    } else if (pontos > 0) {
        resultado.style.backgroundColor = "#ffc1c1"; // vermelho claro
        resultado.textContent += " ⚠️ Sustentabilidade Baixa";
    } else {
        resultado.style.backgroundColor = "#ffc1c1";
        resultado.textContent = "Pontuação: 0";
    }
}

botoes.forEach(botao => {
    botao.addEventListener('click', () => {
        const valor = parseInt(botao.getAttribute('data-points'));
        pontos += valor;
        if (pontos < 0) pontos = 0;
        atualizarResultado();
    });
});

reiniciar.addEventListener('click', () => {
    pontos = 0;
    atualizarResultado();
});