// Get the modal
var modal_adr = document.getElementById("modal-adr");
var modal_ios = document.getElementById("modal-ios");
var modal_win = document.getElementById("modal-win");

// Get the button that opens the modal
var btn_adr = document.getElementById("adr");
var btn_ios = document.getElementById("ios");
var btn_win = document.getElementById("win");

function drkmode() {
   var element = document.body;
   element.classList.toggle("darkmode");
}

// Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon 
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn_adr.onclick = function() {
  modal_adr.style.display = "block";
}
// When the user clicks the button, open the modal 
btn_ios.onclick = function() {
  modal_ios.style.display = "block";
}
// When the user clicks the button, open the modal 
btn_win.onclick = function() {
  modal_win.style.display = "block";
}

//android
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal_adr.style.display = "none";
  modal_ios.style.display = "none";
  modal_win.style.display = "none";
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal_adr) {
    modal_adr.style.display = "none";
  }
  else if (event.target == modal_ios) {
    modal_ios.style.display = "none";
  }
  else if (event.target == modal_win) {
    modal_win.style.display = "none";
  }
}

