console.log("Estou funcionando - incluind.js");
var tabela = document.querySelector("#table-rifa");
    var rifasid = document.querySelectorAll(".card-rifa");
for (let index = 0; index < rifasid.length; index++) {
    let rifaTable = rifasid[index];
    rifaTable.addEventListener("dblclick", function () {
        let id = rifaTable.querySelector(".card-title").textContent;
        if (rifas[id - 1].status) {
            modal.style.display = "block";
            conteudomodal.innerHTML = template_modal(id);
            botaoSalvar(id - 1);
        } else {
            modal.style.display = "block";
            conteudomodal.innerHTML = template_edit(rifas[id - 1]);
            botaoSalvar(id - 1);
        }
    })
}
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
function botaoSalvar(id) {
    var botaoSalvar = document.getElementById("salvar-view");
    botaoSalvar.addEventListener('click', function () {
        var formview = document.querySelector("#form-view");
        var dados = obtendoInfoView(formview, id);
        var r = confirm("Você tem certeza?");
        if (r == true ) {
            rifas[id].importando(dados.id, dados.nome, dados.telefone);
            trocandoDados(rifas[id]);
            closeModal();
        }
    })
 }
function obtendoInfoView(form, id) {
    var dados = {
        id: id,
        nome: form.nameview.value,
        telefone: form.telefoneview.value
    }

    if(form.nameview.value.length == 0){
        console.log("Dado Nao preenchido")
    }

    if(form.telefoneview.value.length == 0){
        console.log("Telefone não preenchido")
    }

    return dados
}

function trocandoDados(rifa) {
    return document.getElementById(rifa.id).innerHTML = template_editcard(rifa);
}
