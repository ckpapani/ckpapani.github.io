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


 
let v = document.getElementsByClassName("youtube-player"); 
  
for (let n = 0; n < v.length; n++) { 
      v[n].onclick = function () { 
        let iframe = document.createElement("iframe"); 
        iframe.setAttribute("src", "https://www.youtube.com/embed/" + this.dataset.id); 
        iframe.setAttribute("style", "width: 100%; height: 100%; position: absolute; top: 0; left: 0;");
        iframe.setAttribute("allow","accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture");
         
      
        if (this.dataset.fullscreen == 1){ 
          iframe.setAttribute("allowfullscreen", "");
        } 
        while (this.firstChild) { 
          this.removeChild(this.firstChild); 
        } 
        this.appendChild(iframe); 
      }; 
    } 




    /* 
    iframe.setAttribute("frameborder", "0"); 
        iframe.setAttribute("id", "youtube-iframe");
    + "?autoplay=0&autohide=2&border=0&wmode=opaque&enablejsapi=1&rel="+ this.dataset.related +"&controls="+this.dataset.control+"&showinfo=" + this.dataset.info */




/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}