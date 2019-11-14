function exibeResultado(resultado) {
    var ul = document.querySelector("#mensagem-resultado");
    ul.innerHTML = "";
    resultado.forEach(
        function (resultado) {
            var li = document.createElement("li");
            li.textContent = resultado;
            ul.appendChild(li);
        });
}

var pesquisaNome = document.getElementById("btn-nome");
pesquisaNome.addEventListener('click', function () {
    console.log("botao pesquisa nome funfando!");
    modal.style.display = "block";
    conteudomodal.innerHTML = template_pesquisa_nome();
    var salvarPesquisaNome = document.getElementById("salvar-pesquisar-nome");

    salvarPesquisaNome.addEventListener('click', function () {
        console.log("botao salvar pesquisa funcionando");
        var formularioPesquisa = document.querySelector("#form-pesquisa-nome").namepesquisa.value;
        console.log(formularioPesquisa);
        exibeResultado(searchName(formularioPesquisa));
    })



})


function searchName(name) {
    let resultado = [];

    for (let index = 0; index < rifas.length; index++) {
        if (rifas[index].nome == name) {
            resultado.push('O ' + name + ' foi encontrado na rifa ' + parseFloat((rifas[index].id) + 1))
        }

    }

    return resultado;
}



var pesquisaNumber = document.getElementById("btn-number");
pesquisaNumber.addEventListener('click', function () {
    console.log("botao pesquisa nome funfando!");
    modal.style.display = "block";
    conteudomodal.innerHTML = template_pesquisa_numero();
    var salvarPesquisaNome = document.getElementById("salvar-pesquisar-number");

    salvarPesquisaNome.addEventListener('click', function () {
        console.log("botao salvar pesquisa funcionando");
        var formularioPesquisa = document.querySelector("#form-pesquisa-number").numberpesquisa.value;
        console.log(formularioPesquisa);
        exibeResultado(searchNumber(formularioPesquisa));
    })
})

function searchNumber(id){
    let resultado = [];
    id = id -1;
    if(id == rifas[id].id && !rifas[id].status){
        resultado.push("A RIFA " + parseFloat((id)+1));
        resultado.push("Nome: "+rifas[id].nome)
        resultado.push("Telefone: "+rifas[id].telefone)
    }
    else{
        resultado.push("Rifa não foi comprada!")
    }
    return resultado;

}