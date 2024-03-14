const mobileNavbar = document.querySelector(".mobileBtn");
const headerNavbar = document.querySelector("#header");
const logo = document.querySelector("#logo");

const toggleNavbar = () => {
  headerNavbar.classList.toggle("active");
  logo.style.width = headerNavbar.classList.contains("active") ? "100px" : "150px";
};

const scrollFunction = () => {
  const scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
  logo.style.width = scrollTop > 0 ? "100px" : "150px";
};

mobileNavbar.addEventListener("click", toggleNavbar);
window.onscroll = scrollFunction;

// dropdown exhibit=====================================
// const exhibitDrop = document.querySelector(".exhibitDropdown");
// const exhibitOption = document.querySelector(".dropdownOption");

// const toggleDropdown = () => {
//   if ((exhibitOption).display === "none") {
//     document.exhibitOption.style.display = "block";
//   }
// }

// exhibitDrop.addEventListener("click", toggleDropdown);

// dropdown exhibit=====================================