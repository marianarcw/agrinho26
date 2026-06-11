const etapas = [
    {
        titulo: "Plantio",
        descricao: "Preparação do solo e plantio de sementes de forma sustentável.",
        imagem: "imagens/plantio.jpg"
    },
    {
        titulo: "Irrigação",
        descricao: "Uso de irrigação eficiente para economizar água e nutrir as plantas.",
        imagem: "imagens/irrigacao.jpg"
    },
    {
        titulo: "Colheita",
        descricao: "Colheita cuidadosa para manter a qualidade e reduzir desperdício.",
        imagem: "imagens/colheita.jpg"
    },
    {
        titulo: "Compostagem",
        descricao: "Transformação de resíduos em adubo orgânico para o solo.",
        imagem: "imagens/compostagem.jpg"
    }
];

let indice = 0;

const tituloEl = document.getElementById("titulo");
const descricaoEl = document.getElementById("descricao");
const imagemEl = document.getElementById("imagem");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

function mostrarEtapa(i) {
    tituloEl.textContent = etapas[i].titulo;
    descricaoEl.textContent = etapas[i].descricao;
    imagemEl.src = etapas[i].imagem;
}

prevBtn.addEventListener("click", () => {
    indice = (indice - 1 + etapas.length) % etapas.length;
    mostrarEtapa(indice);
});

nextBtn.addEventListener("click", () => {
    indice = (indice + 1) % etapas.length;
    mostrarEtapa(indice);
});

// Inicializa
mostrarEtapa(indice);