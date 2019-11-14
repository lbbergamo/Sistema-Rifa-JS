var sorteio = document.getElementById("btn-sorteio");
sorteio.addEventListener('click', function () {
    console.log("botao pesquisa nome funfando!");
    modal.style.display = "block";
    conteudomodal.innerHTML = template_sorteio(getRndInteger(0,50));
})


function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }