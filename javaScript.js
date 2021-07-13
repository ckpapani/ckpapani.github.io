for(let i = 0; i< modalBtn.length; i++){

      modalBtn[i].addEventListener('click',function(){
        modal[i].style.display = "block";
        document.getElementsByClassName("close")[i].addEventListener("click",function(){
          modal[i].style.display = "none";
        });
      });

};



/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

