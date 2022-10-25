let navBar = document.querySelector('.navbar');

document.querySelector('#menu-bar').onclick = ()=>{
    navBar.classList.toggle('active');
}

document.querySelector('#close').onclick = ()=>{
    navBar.classList.remove('active');
}

window.onscroll = () =>{
    navBar.classList.remove('active');

    if(window.scrollY > 100){
        document.querySelector('header').classList.add('active');
    }
    else{
        document.querySelector('header').classList.remove('active');
    }
}

let themeToggler = document.querySelector('#theme-toggler');

themeToggler.onclick = () =>{
    themeToggler.classList.toggle('fa-sun');
    if(themeToggler.classList.contains('fa-sun')){
        document.querySelector('body').classList.add('active');
    }
    else{
        document.querySelector('body').classList.remove('active');
    }
}

document.querySelectorAll('.small-image-1').forEach(images => {
    images.onclick = () => {
        document.querySelector('.big-image-1').src = images.getAttribute('src');
    }
});

document.querySelectorAll('.small-image-2').forEach(images => {
    images.onclick = () =>{
        document.querySelector('.big-image-2').src = images.getAttribute('src');
    }
});

document.querySelectorAll('.small-image-3').forEach(images =>{
    images.onclick = () =>{
        document.querySelector('.big-image-3').src = images.getAttribute('src');
    }
});

let countDate = new Date('oct 21, 2022 00:00:00').getTime();

function countDown(){
    let now = new Date().getTime();

    gap = countDate - now;

    let seconds = 1000;
    let minutes = seconds * 60;
    let hours = minutes * 60;
    let days = hours * 24;

    let d = Math.floor(gap / (days));
    let h = Math.floor((gap % (days)) / (hours));
    let m = Math.floor((gap % (hours)) / (minutes));
    let s = Math.floor((gap % (minutes)) / (seconds));

    document.getElementById('day').innerText = d;
    document.getElementById('hour').innerText = h;
    document.getElementById('minute').innerText = m;
    document.getElementById('second').innerText = s;
}

setInterval(function(){
    countDown()
}, 1000);

var swiper = new Swiper(".product-slider", {
    slidesPerView : 3,
    loop : true,
    spaceBetween : 10,
    autoplay : {
        delay : 4000,
        disableOnInteraction : false,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        0:{
            slidesPerView: 1,
        },

        550:{
            slidesPerView: 2,
        },

        800:{
            slidesPerView:3,
        },

        1000:{
            slidesPerView: 3,
        },
    },
});

var swiper = new Swiper(".review-slider", {
    slidesPerView: 3,
    loop: true,
    spaceBetween: 10,
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },

    breakpoints: {
        0: {
            slidesPerView: 1,
        },

        550: {
            slidesPerView: 2,
        },

        800: {
            slidesPerView: 3,
        },

        1000: {
            slidesPerView: 3
        },
    },
});