let pontos = 0;

const botoes = document.querySelectorAll('.acao');
const resultado = document.getElementById('resultado');
const reiniciar = document.getElementById('reiniciar');

botoes.forEach(botao => {
    botao.addEventListener('click', () => {
        const valor = parseInt(botao.getAttribute('data-points'));
        pontos += valor;

        if (pontos < 0) pontos = 0;

        resultado.textContent = `Pontuação: ${pontos}`;

        if (pontos >= 30) {
            resultado.textContent = `🎉 Produção Sustentável! Pontos: ${pontos}`;
        } else if (pontos >= 15) {
            resultado.textContent = `🙂 Produção Razoável. Pontos: ${pontos}`;
        } else {
            resultado.textContent = `⚠️ Alto impacto ambiental. Pontos: ${pontos}`;
        }
    });
});

reiniciar.addEventListener('click', () => {
    pontos = 0;
    resultado.textContent = '';
});