const mail = document.getElementsByClassName("mail")[0];
const linkedin = document.getElementsByClassName("linkedIn")[0];
const github = document.getElementsByClassName("github")[0];
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".navbar-nav");
const navLinks = document.querySelectorAll(".nav-link");
const dropButton = document.querySelector(".dropbtn");
const FirstProject = document.getElementById("first-project");
const SecondProject = document.getElementById("second-project");

mail.addEventListener("click", function () {
  window.open("mailto:abdna59@gmail.com");
});
linkedin.addEventListener("click", function () {
  window.open("https://tr.linkedin.com/in/abdullah-naifeh-9a82a1149");
});
github.addEventListener("click", function () {
  window.open("https://github.com/Abdullah-Naifeh");
});

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

navLinks.forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  })
);

FirstProject.addEventListener("click", () => {
  window.open("https://refubook-venus.netlify.app/");
});

SecondProject.addEventListener("click", () => {
  window.open(
    "https://recoded-spark-turkey-2022.github.io/mad-libs-los-galacticos/"
  );
});

function ViewRefuBookCode() {
  window.open("https://github.com/Recoded-Spark-Turkey-2022/Venus");
}

function ViewMadLibsCode() {
  window.open(
    "https://github.com/Recoded-Spark-Turkey-2022/mad-libs-los-galacticos"
  );
}


// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}