const mobileNavbar = document.querySelector(".mobileBtn");
const headerNavbar = document.querySelector("header"); // Changed the selector to target the header element
const logos = document.querySelectorAll(".logo"); // Changed the variable name to logos and corrected the selector

const toggleNavbar = () => {
  headerNavbar.classList.toggle("active");
  logos.forEach((logo) => { // Iterating over NodeList to apply style to each logo
    logo.style.width = headerNavbar.classList.contains("active") ? "100px" : "150px";
  });
};

const scrollFunction = () => {
  const scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
  logos.forEach((logo) => { // Iterating over NodeList to apply style to each logo
    logo.style.width = scrollTop > 0 ? "50px" : "150px";
  });
};

mobileNavbar.addEventListener("click", toggleNavbar); // Changed to mobileNavbar
window.onscroll = scrollFunction;
