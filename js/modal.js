
var noumonviModal = document.getElementById('noumonviModal');

// Get the button that opens the modal
var noumonviBtn = document.getElementById("noumonvi");

// Get the <span> element that closes the modal
var noumonviSpan = document.getElementsByClassName("close")[2];

// When the user clicks on the button, open the modal
noumonviBtn.onclick = function() {
    noumonviModal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
noumonviSpan.onclick = function() {
    noumonviModal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == noumonviModal) {
        noumonviModal.style.display = "none";
    }
}



var bagaramModal = document.getElementById('bagaramModal');

// Get the button that opens the modal
var bagaramBtn = document.getElementById("bagaram");

// Get the <span> element that closes the modal
var bagaramSpan = document.getElementsByClassName("close")[0];


// When the user clicks on the button, open the modal
bagaramBtn.onclick = function() {
    bagaramModal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
bagaramSpan.onclick = function() {
    bagaramModal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == bagaramModal) {
        bagaramModal.style.display = "none";
    }
}
