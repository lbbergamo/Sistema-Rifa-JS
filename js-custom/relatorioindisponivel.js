var relatorioIndisponivel = document.getElementById("relatorioIndisp");
relatorioIndisponivel.addEventListener('click', function () {
    console.log("botao pesquisa nome funfando!");
    modal.style.display = "block";
    conteudomodal.innerHTML = template_relatorio_indisponivel();
    exibeResultado(_indisponivel());
})


function _indisponivel() {
    let resultado = [];

    for (let index = 0; index < rifas.length; index++) {
        if (!rifas[index].status) {
            resultado.push(parseFloat((rifas[index].id)+1));
        }
    }
    if(resultado.length == 0){
        resultado.push("NENHUMA RIFA VENDIDA");
    }

    return resultado;
}
