let acc = document.getElementsByClassName("accordion");
let i;
for (i = 0; i < acc.length; i++) {
  acc[i].onclick = function() {
    for(j = 0; j < acc.length; j++) {
      acc[j].nextElementSibling.style.display="none";
    }
    this.classList.toggle("active");
    let panel = this.nextElementSibling;
    if (panel.style.display === "block"){
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    } 
  }
}

/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}