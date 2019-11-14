console.log("estou funcionando - rifa.js");
var rifas = [];
for (let index = 0; index < 50; index++) {
    rifas[index] = new Rifa(index, "", "");

    if ((index % 5) == 0) {
        adicionaRifa(rifas[index]);
    }
}

function adicionaRifa(rifas) {
    var tabela = document.querySelector("#table-rifa");
    var rifaTr = montaTr(rifas);
    tabela.appendChild(rifaTr);

}



function montaTr(rifas) {

    var RifaTr;

    RifaTr = document.createElement("tr");

    RifaTr.appendChild(montaTd(rifas.id + 1));
    RifaTr.appendChild(montaTd(rifas.id + 2));
    RifaTr.appendChild(montaTd(rifas.id + 3));
    RifaTr.appendChild(montaTd(rifas.id + 4));
    RifaTr.appendChild(montaTd(rifas.id + 5));

    return RifaTr;
}

function montaTd(id) {

    var td = document.createElement("td");
    td.innerHTML = template_card(id);
    td.setAttribute("id", id-1);
    td.setAttribute("class","card-rifa")
    return td;
}




function template_card(id) {
    return ` 
    <div class="card" style="width: 10rem;">
    <div class="card-body text-center">
        <h5 class="card-title" id="id"> ${id}</h5>
            <p class="card-text" id="nome">RIFA</p>
            <p class="card-text" id="telefone">DISPONIVEL</p>
    </div>
</div>
`
}
