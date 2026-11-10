// Get the current year
const currentYear = new Date().getFullYear();

// Display the current year in the footer
document.getElementById("currentyear").textContent = currentYear;

// Display the last modified date
document.getElementById("lastModified").textContent =
    `Last Modification: ${document.lastModified}`;

// Hamburger menu
const menuButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");

menuButton.addEventListener("click", () => {
  navigation.classList.toggle("open");
  menuButton.classList.toggle("open");
});
