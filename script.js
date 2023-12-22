const hamburgerMenu = document.getElementById('hamburgerMenu');
const closeNav = document.getElementById('close_navbar');
const navigasi = document.querySelector('.navigasi');
const menu = document.querySelectorAll('.menu-toggle')

hamburgerMenu.addEventListener('click', () => {
    closeNav.style.display = 'block';
    hamburgerMenu.style.display = 'none';
});

closeNav.addEventListener('click', () => {
    hamburgerMenu.style.display = 'block';
    closeNav.style.display = 'none';
});

for (let i = 0; i < menu.length; i++) {
    menu[i].addEventListener('click', () => {
        navigasi.classList.toggle('new');
    });
};

const nav = document.querySelectorAll('.nav-link')
for (let f = 0; f < nav.length; f++) {
    nav[f].addEventListener('click', () => {
        navigasi.classList.toggle('new');
    });
}

const header = document.getElementById('header');


window.addEventListener('scroll', () => {
    if (window.pageYOffset >= 1) {
        header.classList.add('sticky');
    } else {
        header.classList.remove('sticky');
    }
});

const selengkapnya = document.querySelector('.selengkapnya');
const closeSelengkapnya = document.querySelector('.selengkapnya-2');
const openSelengkapnya = document.querySelector('.selengkapnya-1');

openSelengkapnya.addEventListener('click', () => {
    selengkapnya.style.display = 'block';
    closeSelengkapnya.style.display = 'block';
    openSelengkapnya.style.display = 'none';
});

closeSelengkapnya.addEventListener('click', () => {
    selengkapnya.style.display = 'none';
    closeSelengkapnya.style.display = 'none';
    openSelengkapnya.style.display = 'block';
});

const selengkapnya2 = document.querySelector('.selengkapnya-3');
const closeSelengkapnya2 = document.querySelector('.selengkapnya-4');
const openSelengkapnya2 = document.querySelector('.selengkapnya-5');

openSelengkapnya2.addEventListener('click', () => {
    selengkapnya2.style.display = 'block';
    closeSelengkapnya2.style.display = 'block';
    openSelengkapnya2.style.display = 'none';
});

closeSelengkapnya2.addEventListener('click', () => {
    selengkapnya2.style.display = 'none';
    closeSelengkapnya2.style.display = 'none';
    openSelengkapnya2.style.display = 'block';
});

const selengkapnya3 = document.querySelector('.selengkapnya-6');
const closeSelengkapnya3 = document.querySelector('.selengkapnya-7');
const openSelengkapnya3 = document.querySelector('.selengkapnya-8');

openSelengkapnya3.addEventListener('click', () => {
    selengkapnya3.style.display = 'block';
    closeSelengkapnya3.style.display = 'block';
    openSelengkapnya3.style.display = 'none';
});

closeSelengkapnya3.addEventListener('click', () => {
    selengkapnya3.style.display = 'none';
    closeSelengkapnya3.style.display = 'none';
    openSelengkapnya3.style.display = 'block';
});

document.addEventListener('DOMContentLoaded', function () {
    // Set the date we're counting down to
    var countDownDate = new Date("Dec 30, 2023 23:59:59").getTime();

    // Update the countdown every 1 second
    var x = setInterval(function () {
        var now = new Date().getTime();
        var distance = countDownDate - now;

        // Calculate days, hours, minutes, and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Display the result
        document.getElementById("days").innerHTML = days;
        document.getElementById("hours").innerHTML = hours;
        document.getElementById("minutes").innerHTML = minutes;
        document.getElementById("seconds").innerHTML = seconds;

        // If the countdown is over, display a message
        if (distance < 0) {
            clearInterval(x);
            document.getElementById("days").innerHTML = "EXPIRED";
            document.getElementById("hours").innerHTML = "";
            document.getElementById("minutes").innerHTML = "";
            document.getElementById("seconds").innerHTML = "";
        }
    }, 1000);
});

const closeLogin = document.getElementById('closeLogin');
const loginPopUp = document.getElementById('loginPopUp');
const openLogin = document.getElementById('buuton');

openLogin.addEventListener('click', () => {
    loginPopUp.style.display = 'block';
    setTimeout(() => {
        loginPopUp.style.animation = 'none';
    },1000);
});

closeLogin.addEventListener('click', () => {
    loginPopUp.style.display = "none"
});



