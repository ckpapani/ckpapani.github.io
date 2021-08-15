$(document).ready(function () {
  $( "#accordion1" ).accordion({
    collapsible: true,
    active: false,
    heightStyle: "content",
    beforeActivate: onBeforeActivate
  });
  
  $( "#accordion2" ).accordion({
    collapsible: true,
    active: false,
    heightStyle: "content",
    beforeActivate: onBeforeActivate
  });
  
  $( "#accordion3" ).accordion({
    collapsible: true,
    active: false,
    heightStyle: "content",
    beforeActivate: onBeforeActivate
  });
});

function onBeforeActivate(event, ui) {
  let innerTemplate = ui.newPanel.find("template");
  if (innerTemplate.length > 0) {
    innerTemplate.replaceWith(innerTemplate.html());
  } else {
    // This panel has been opened before.
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