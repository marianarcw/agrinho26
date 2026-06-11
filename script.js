const form = document.getElementById('formSustentavel');
const resultado = document.getElementById('resultado');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const agua = parseFloat(document.getElementById('agua').value);
    const fertilizantes = parseFloat(document.getElementById('fertilizantes').value);
    const defensivos = parseFloat(document.getElementById('defensivos').value);

    let indice = 100 - (agua * 0.3 + fertilizantes * 0.4 + defensivos * 0.3);
    if (indice < 0) indice = 0;
    if (indice > 100) indice = 100;
    indice = indice.toFixed(2);

    let mensagem = '';
    if (indice >= 80) {
        mensagem = 'Excelente! Continue com práticas sustentáveis.';
    } else if (indice >= 50) {
        mensagem = 'Bom, mas reduza fertilizantes e defensivos.';
    } else {
        mensagem = 'Alerta! Reduza insumos e adote manejo sustentável.';
    }

    resultado.innerHTML = `Índice de Sustentabilidade: ${indice}/100<br>${mensagem}`;
});