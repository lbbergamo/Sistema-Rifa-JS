console.log('Estou funcionando - savecache.js');

var botaosalvar = document.querySelector("#btnSaveCache");
botaosalvar.addEventListener('click', function () {
    event.preventDefault();
    console.log('Botão Funcionando - botaosalvar')
    let refinamentoRifa = [];
    for (let index = 0; index < rifas.length; index++) {
       if(!rifas[index].status){
           refinamentoRifa.push(rifas[index]);
       }
        
    }
    setRifa(refinamentoRifa);
})

var botaoimportar = document.querySelector("#btnImportCache");
botaoimportar.addEventListener('click', function () {
    event.preventDefault();
    console.log('Estou funcionando - Botão Importar');
    let rifaImport = getrifa();
    for (let index = 0;  index < rifaImport.length; index++) {
       trocandoDados(rifaImport[index]);
    }
     alert("rifa importados com sucesso!");
})

function setRifa(rifa) {
    var _rifa = JSON.stringify(rifa);
    localStorage.setItem("rifa", _rifa);
    console.log("salvo com sucesso!")
}

function getrifa() {
    let saverifa = JSON.parse(localStorage.getItem("rifa"));
    return saverifa;
}
