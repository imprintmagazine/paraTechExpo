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

headerNavbar.addEventListener("click", toggleNavbar);
window.onscroll = scrollFunction;


// header.js

// Function to toggle the exhibitor dropdown
function toggleExhibitDropdown() {
  var dropdown = document.getElementById("exhibitorDropdown");
  dropdown.classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.exhibitBtn')) {
    var dropdown = document.getElementById("exhibitorDropdown");
    if (dropdown.classList.contains('show')) {
      dropdown.classList.remove('show');
    }
  }
};
