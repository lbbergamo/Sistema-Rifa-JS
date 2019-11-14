var relatorioDisponivel = document.getElementById("relatorioDisp");
relatorioDisponivel.addEventListener('click', function () {
    console.log("botao pesquisa nome funfando!");
    modal.style.display = "block";
    conteudomodal.innerHTML = template_relatorio_disponivel();
    exibeResultado(_disponivel());
})


function _disponivel() {
    let resultado = [];

    for (let index = 0; index < rifas.length; index++) {
        if (rifas[index].status) {
            resultado.push(parseFloat((rifas[index].id)+1));
        }
    }

    return resultado;
}


