console.log('Estou funcionando - deleterifa.js');

var botaoexclusaoRifa = document.querySelector("#btnDelAll");
botaoexclusaoRifa.addEventListener('click', function () {
    event.preventDefault();
    console.log('Botão Funcionando - botao exclusaoRifa')
    for (let index = 0; index <= 9; index++) {
        document.getElementById("table-rifa").deleteRow(0)
    }
    localStorage.removeItem('rifa');
    iniciarRifa();

})

