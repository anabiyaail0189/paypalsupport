// ======================================
// Tech Support Center
// JavaScript
// ======================================

// Mobile Menu

const menuBtn = document.getElementById("menuBtn");

const navbar = document.querySelector(".navbar");

menuBtn.addEventListener("click", () => {

    navbar.classList.toggle("mobile-nav");

});

// Close menu when a link is clicked

const links = document.querySelectorAll(".navbar a");

links.forEach(link=>{

    link.addEventListener("click",()=>{

        navbar.classList.remove("mobile-nav");

    });

});

// Sticky Shadow

const header = document.querySelector(".header");

window.addEventListener("scroll",()=>{

    if(window.scrollY>20){

        header.style.boxShadow="0 15px 40px rgba(0,0,0,.10)";

    }

    else{

        header.style.boxShadow="0 5px 20px rgba(0,0,0,.06)";

    }

});

console.log("Tech Support Center Loaded");