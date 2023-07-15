const mail = document.getElementsByClassName('mail')[0]
const linkedin = document.getElementsByClassName('linkedIn')[0]
const github = document.getElementsByClassName('github')[0]
const hamburger = document.querySelector('.hamburger')
const navMenu = document.querySelector('.navbar-nav')
const navLinks = document.querySelectorAll('.nav-link')


mail.addEventListener('click', function () {
    window.open('mailto:abdna59@gmail.com')
});
linkedin.addEventListener('click', function () {
    window.open('https://tr.linkedin.com/in/abdullah-naifeh-9a82a1149')
});
github.addEventListener('click', function () {
    window.open('https://github.com/Abdullah-Naifeh')
});

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active')
    navMenu.classList.toggle('active')
})

navLinks.forEach( n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
} ))


