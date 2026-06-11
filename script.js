const formulario = document.getElementById('formulario');
const resultado = document.getElementById('resultado');

formulario.addEventListener('submit', function(e) {
    e.preventDefault();

    const agua = parseFloat(document.getElementById('agua').value);
    const fertilizantes = parseFloat(document.getElementById('fertilizantes').value);
    const defensivos = parseFloat(document.getElementById('defensivos').value);

    // Índice simples: 100 - (peso dos insumos)
    let indice = 100 - (agua*0.3 + fertilizantes*0.4 + defensivos*0.3);

    if (indice < 0) indice = 0;
    if (indice > 100) indice = 100;
    indice = indice.toFixed(1);

    let mensagem = '';
    let cor = '';

    if (indice >= 70) {
        mensagem = 'Excelente! Práticas sustentáveis.';
        cor = '#a8e6a8'; // verde
    } else if (indice >= 40) {
        mensagem = 'Médio. Pode melhorar a sustentabilidade.';
        cor = '#fff3b0'; // amarelo
    } else {
        mensagem = 'Alerta! Alto impacto ambiental.';
        cor = '#ffc1c1'; // vermelho
    }

    resultado.textContent = `Índice de Sustentabilidade: ${indice}/100 - ${mensagem}`;
    resultado.style.backgroundColor = cor;
});