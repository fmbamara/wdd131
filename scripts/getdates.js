// getdates.js

// Get the current year
const currentYear = new Date().getFullYear();

// Insert the year into the first <p> inside footer
document.querySelector("footer p").textContent = `©${currentYear} 🌸 Franklin Mbamara 🌸 Nigeria`;

// Get last modified date of the document
const lastModified = document.lastModified;

// Insert into the <small> tag inside footer
document.querySelector("footer small").textContent = `Last Modification: ${lastModified}`;
