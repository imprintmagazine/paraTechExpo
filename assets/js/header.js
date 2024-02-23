const mobileNavbar = document.querySelector(".mobileBtn");
const headerNavbar = document.querySelector("#header");
const logo = document.querySelector("#logo");

const toggleNavbar = () => {
  headerNavbar.classList.toggle("active");
  logo.style.width = headerNavbar.classList.contains("active") ? "100px" : "150px";
};

const scrollFunction = () => {
  const scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
  logo.style.width = scrollTop > 50 ? "100px" : "150px";
};

mobileNavbar.addEventListener("click", toggleNavbar);
window.onscroll = scrollFunction;