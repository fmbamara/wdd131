// Function to set the current year in the footer
function setCurrentYear() {
    const currentYear = new Date().getFullYear();
    document.getElementById('currentyear').textContent = currentYear;
}

// Function to set the last modified date in the footer
function setLastModifiedDate() {
    const lastModified = document.lastModified;
    document.getElementById('lastModified').textContent = `Last Modified: ${lastModified}`;
}

// JavaScript for the responsive hamburger menu
const hamButton = document.querySelector('.ham');
const mainnav = document.querySelector('nav');

// Add a click event listener to the hamburger button
hamButton.addEventListener('click', () => {
    mainnav.classList.toggle('responsive');
});

// Call the functions to execute when the page loads
setCurrentYear();
setLastModifiedDate();
// Function to set the current year in the footer
function setCurrentYear() {
    const currentYear = new Date().getFullYear();
    document.getElementById('currentyear').textContent = currentYear;
}

// Function to set the last modified date in the footer
function setLastModifiedDate() {
    const lastModified = document.lastModified;
    document.getElementById('lastModified').textContent = `Last Modified: ${lastModified}`;
}

// JavaScript for the responsive hamburger menu
const menuToggle = document.getElementById('menu-toggle');
const mainNav = document.getElementById('main-nav');

menuToggle.addEventListener('click', () => {
    mainNav.classList.toggle('open');
    if (mainNav.classList.contains('open')) {
        menuToggle.textContent = 'X';
    } else {
        menuToggle.textContent = '☰';
    }
});

// Call the functions to execute when the page loads
setCurrentYear();
setLastModifiedDate();