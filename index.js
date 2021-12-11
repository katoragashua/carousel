window.addEventListener("load", startCarousel);
let slidePosition = 0;
let carouselImages = document.getElementsByClassName("carousel-images"); // let carouselImages = document.querySelectorAll(".carousel-images"); // carouselImages can also be declared using querySelectorAll as seen
const dotContainer = document.querySelector(".dotContainer");
const container = document.querySelector(".container")
let totalSlides = carouselImages.length;
const dots = document.querySelectorAll(".dots");
let totalDots = dots.length;
let dotPosition = 0;

// let previousSlide = document.querySelector(".next-image");
// let nextSlide = document.querySelector(".next-image");


function play() {
    hide();

    if (slidePosition === totalSlides - 1) {
        slidePosition = 0;
        dotPosition = 0;
    }else {
        slidePosition++;
        dotPosition ++;
    }

    carouselImages[slidePosition].classList.add("current-carousel");
    dots[dotPosition].classList.add("current-dot");
}


function hide() {

    // Using a forEach() loop
    // carouselImages.forEach(function(image) {
    //     image.classList.remove("current-carousel");
    //     image.classList.add("hidden");
    // })

    // Using a for of loop
    for(let image of carouselImages) {
        image.classList.remove("current-carousel");
        image.classList.add("hidden");
    }

    for(let dot of dots) {
        dot.classList.remove("current-dot");
        dot.classList.add("dots");
    }
}

function startCarousel() {
    setInterval(play, 5000);
};


// Check out this code. 
// function createDots() {
//     for(let i = 0; i < 8; i++) {
//         const dots = document.createElement("div");
//         dots.classList.add("dots");
//         console.log(dots);
//         // const allDots = document.querySelectorAll(".dots");
//         dotContainer.appendChild(dots);
//         dotsArray.push(dots);
//         dotsArray[dotPosition].classList.add("current-dot");
//     }
//     setInterval(() => {
//         dotsArray.forEach(index => {
//             index.classList.remove('current-dot')
//         })

//         let totalDots = dotsArray.length;
//         if(dotPosition === totalDots -1) {
//             dotPosition = 0;
//         }else {
//             dotPosition++;
//         }
        
//         dotsArray[dotPosition].classList.add("current-dot");
//     }, 5000)
    
// }

// createDots();
