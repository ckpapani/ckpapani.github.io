$( ".accordion" ).accordion({
  collapsible: true,
  active: false,
  heightStyle: "content"
});

// Άνοιγμα Sidebar
document.getElementById('openSidebar').addEventListener('click', function() {
  document.getElementById('sidebar').classList.add('active');
  showMainMenu();
});

// Κλείσιμο Sidebar
function closeSidebar() {
  document.getElementById('sidebar').classList.remove('active');
  setTimeout(() => {
      showMainMenu(); // Επαναφορά στο αρχικό μενού μετά το κλείσιμο
  }, 300);
}

// Άνοιγμα υπομενού με animation
function openSubmenu(submenuId) {
  // Απόκρυψη όλων των μενού
  document.querySelectorAll('.menu').forEach(menu => {
      menu.classList.remove('active');
      setTimeout(() => {
          menu.style.display = 'none';
      }, 300);
  });

  // Εμφάνιση του επιλεγμένου υπομενού
  setTimeout(() => {
      let submenu = document.getElementById(submenuId);
      submenu.style.display = 'block';
      setTimeout(() => submenu.classList.add('active'), 10);
  }, 300);
}

// Επιστροφή στο βασικό μενού
function goBack() {
  showMainMenu();
}

// Εμφάνιση του βασικού μενού με animation
function showMainMenu() {
  document.querySelectorAll('.submenu').forEach(menu => {
      menu.classList.remove('active');
      setTimeout(() => {
          menu.style.display = 'none';
      }, 300);
  });

  setTimeout(() => {
      let mainMenu = document.querySelector('.main-menu');
      mainMenu.style.display = 'block';
      setTimeout(() => mainMenu.classList.add('active'), 10);
  }, 300);
}

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

    




