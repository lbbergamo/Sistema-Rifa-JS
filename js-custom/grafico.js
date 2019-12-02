var disponivel = parseFloat(50 - (relatorioPesquisa()));
var indisponivel = relatorioPesquisa();

function relatorioPesquisa() {
    let indisponivel = 0;
    for (let index = 0; index < rifas.length; index++) {
        if (!this.rifas[index].status) {
            indisponivel = +1;
        }

    }

    return indisponivel;
}

var data = {
    labels: [
        "Disponivel",
        "Indisponivel"
    ],
    datasets: [
        {
            data: [disponivel, indisponivel],
            backgroundColor: [
                "#46BFBD",
                "#F7464A",
            ]
        }]
};



var relatorioON = document.getElementById("relatorioGrafico");
relatorioON.addEventListener('click', function () {
    modal.style.display = "block";
    conteudomodal.innerHTML = template_relatorio_grafico();
    var ctx = document.getElementById("relatorioDisponivel").getContext("2d");
    var pieChart = new Chart(ctx, {
        type: 'pie',
        data: data
      });

})
// 