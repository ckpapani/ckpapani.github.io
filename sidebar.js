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
