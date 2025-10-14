
// Method 1: Basic toggle function
function toggleMenu() {
    const navMenu = document.getElementById('navmenu');
    const hamburger = document.getElementById('hamburger');
    
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
}

// Add event listener to hamburger
document.getElementById('hamburger').addEventListener('click', toggleMenu);

// Close menu when clicking outside
document.addEventListener('click', function(event) {
    const navMenu = document.getElementById('navmenu');
    const hamburger = document.getElementById('hamburger');
    
    if (!hamburger.contains(event.target) && !navMenu.contains(event.target)) {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    }
});

// Close menu when clicking on a link
document.querySelectorAll('navmenu a').forEach(link => {
    link.addEventListener('click', () => {
        document.getElementById('navmenu').classList.remove('active');
        document.getElementById('hamburger').classList.remove('active');
    });
});

