console.log("Estou funcionando - incluind.js");
var tabela = document.querySelector("#table-rifa");

var rifasid = document.querySelectorAll(".card-rifa");

for (let index = 0; index < rifasid.length; index++) {
    let rifaTable = rifasid[index];
    rifaTable.addEventListener("dblclick", function () {
        let id = rifaTable.querySelector(".card-title").textContent;
        console.log(id)


        if (rifas[id - 1].status) {
            modal.style.display = "block";
            conteudomodal.innerHTML = template_modal(id);
            botaoSalvar(id - 1);
        } else {

            modal.style.display = "block";
            conteudomodal.innerHTML = template_edit(rifas[id - 1]);
            botaoSalvar(id - 1);
        }
        console.log(rifas[id - 1].status)


    })

}






// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

function botaoSalvar(id) {
    var botaoSalvar = document.getElementById("salvar-view");
    botaoSalvar.addEventListener('click', function () {
        console.log("ESTOU FUNCIONDANDO - BOTAO SALVAR ");
        var formview = document.querySelector("#form-view");
        var dados = obtendoInfoView(formview, id);
        console.log(dados);
        
        var r = confirm("Você tem certeza?");
        if (r == true) {
            rifas[id].importando(dados.id, dados.nome, dados.telefone);
            trocandoDados(rifas[id]);
            closeModal();
        }
        console.log(rifas)
    })
 
}

function obtendoInfoView(form, id) {
    var dados = {
        id: id,
        nome: form.nameview.value,
        telefone: form.telefoneview.value
    }
    return dados
}

function trocandoDados(rifa) {
    return document.getElementById(rifa.id).innerHTML = template_editcard(rifa);
}
