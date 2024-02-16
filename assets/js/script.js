const mobileNavbar = document.querySelector(".mobileBtn");
const headerNavbar = document.querySelector("#header");

const toggleNavbar = () => {
    headerNavbar.classList.toggle("active");
};

mobileNavbar.addEventListener("click", () => toggleNavbar());
