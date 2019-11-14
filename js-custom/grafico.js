var disponivel = parseFloat(50 - (relatorioPesquisa()));
var indisponivel = relatorioPesquisa();
console.log(rifas)

function relatorioPesquisa() {
    let indisponivel = 0;
    for (let index = 0; index < rifas.length; index++) {
        if (!this.rifas[index].status) {
            indisponivel = +1;
        }

    }

    return indisponivel;
}

console.log(indisponivel);
console.log(disponivel);
var data = [
    {
        value: indisponivel,
        color:"#F7464A",
        highlight: "#FF5A5E",
        label: "Indisponivel"
    },
    {
        value: disponivel,
        color: "#46BFBD",
        highlight: "#5AD3D1",
        label: "Disponivel"
    },
];
var relatorioON = document.getElementById("relatorioGrafico");
relatorioON.addEventListener('click', function () {
    modal.style.display = "block";
    conteudomodal.innerHTML = template_relatorio_grafico();
    var ctx = document.getElementById("relatorioDisponivel").getContext("2d");
new Chart(ctx).Pie(data);
})

