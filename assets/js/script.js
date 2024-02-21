const mobileNavbar = document.querySelector(".mobileBtn");
const headerNavbar = document.querySelector("#header");

const toggleNavbar = () => {
  headerNavbar.classList.toggle("active");

  // Check if headerNavbar has the class "active"
  if (headerNavbar.classList.contains("active")) {
    document.querySelector("#logo").style.width = "100px";
  } else {
    document.querySelector("#logo").style.width = "150px"; // Reset the style if not active
  }
};

mobileNavbar.addEventListener("click", () => toggleNavbar());

//window scroll down
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.querySelector("#logo").style.width = "100px";
  } else {
    document.querySelector("#logo").style.width = "150px";

  }
} 