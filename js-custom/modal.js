var modal2 = document.getElementById("modalInformativo");
var span = modal2.querySelector(".close")
span.addEventListener("click", function () {
    modal2.style.display = "none";
})
// Get the modal
var modal = document.getElementById("myModal");


// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

span.addEventListener("click", function () {
    modal.style.display = "none";

})

function closeModal() {

    modal.style.display = "none";

}

var conteudomodal = document.getElementById("modal-content");
