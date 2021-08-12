$( "#accordion1" ).accordion({
  collapsible: true,
  active: false,
  heightStyle: "content"
});

$( "#accordion2" ).accordion({
  collapsible: true,
  active: false,
  heightStyle: "content"
});

$( "#accordion3" ).accordion({
  collapsible: true,
  active: false,
  heightStyle: "content"
});








/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

