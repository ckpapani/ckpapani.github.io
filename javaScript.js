$( ".accordion" ).accordion({
  collapsible: true,
  active: false,
  heightStyle: "content"
});


$(".hamburger").click(function(){
  $("#myLinks").toggle(500);
});



/* $( ".dropdown" ).accordion({
  collapsible: true,
  active: true,
  heightStyle: "content"
}); */

$(document).ready(function(){
    $("#junior").click(function(event){
      event.stopPropagation();
      $("#juniorIndex").slideToggle();
    });
    $("#juniorIndex").on("click", function(event){
      event.stopPropagation();
    });
    $("#high").click(function(event){
      event.stopPropagation();
      $("#highIndex").slideToggle();
    });
    $("#highIndex").on("click", function(event){
      event.stopPropagation();
    });
    $("#material").click(function(event){
      event.stopPropagation();
      $("#materialIndex").slideToggle();
    });
    $("#materialIndex").on("click", function(event){
      event.stopPropagation();
    });
});

$(document).on("click", function(){
  $("#juniorIndex").hide();
  $("#highIndex").hide(); 
  $("#materialIndex").hide(); 
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






