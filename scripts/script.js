// JavaScript Document
console.log("Howdy!");



var menuButton = document.querySelector('header nav button');

menuButton.addEventListener('click', function(){
    var navigation = document.querySelector('header nav');
    navigation.classList.toggle("menu-active");

});










var trailer = document.getElementById("trailer");


// gebruikte bron: https://www.youtube.com/watch?v=UMdvufdewD8
window.onmousemove = e => {
    var x = e.clientX - trailer.offsetWidth / 2,
            y = e.clientY - trailer.offsetHeight / 2;
  
    var keyframes = {
        transform: `translate(${x}px, ${y}px)`
    }

    trailer.animate(keyframes, { 
        duration: 800, 
        fill: "forwards" 
    });
};








// GOEDE VERSIE

// var image = document.querySelector('.cursor-arrow');


// image.addEventListener('mouseenter', function(){
//   var cursorImage = document.querySelector('#trailer img');
//   cursorImage.classList.add('trailer-img-hover');
//   trailer.classList.add("trailer-hover");

// });


// image.addEventListener('mouseleave', function(){
//   var cursorImage = document.querySelector('#trailer img');
//   cursorImage.classList.remove('trailer-img-hover');
//   trailer.classList.remove("trailer-hover");

// });







var image = document.getElementsByClassName("cursor-arrow");

for (var i=0; i<image.length; i++) {
  image[i].addEventListener("mouseover", function(){
    var cursorImage = document.querySelector('#trailer img');
    cursorImage.classList.add('trailer-img-hover');
    trailer.classList.add("trailer-hover");
  });
}


for (var i=0; i<image.length; i++) {
  image[i].addEventListener("mouseleave", function(){
    var cursorImage = document.querySelector('#trailer img');
    cursorImage.classList.remove('trailer-img-hover');
    trailer.classList.remove("trailer-hover");
  });
}





// JAARTAL IN FOOTER
window.onload = e => {
  document.getElementById("current-year").innerHTML = new Date().getFullYear();
}





document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger, SplitText);

  
  /* =========================
     HERO (page load)
  ========================= */

  // gsap.from(".hero", {
  //   opacity: 0,
  //   y: 50,
  //   duration: 1.4,
  //   ease: "power3.out",
  //   stagger: 0.15,
  //   delay: 0.2
  // });

  //   gsap.from(".hero > a", {
  //   opacity: 0,
  //   y: 50,
  //   duration: 1.4,
  //   ease: "power3.out",
  //   delay: 0.2
  // });

  /* =========================
     SPLIT TEXT TITLES
  ========================= */

  const titles = document.querySelectorAll(".title");

  titles.forEach(title => {
    const split = new SplitText(title, {
      type: "words",
      wordsClass: "split-word"
    });

    gsap.from(split.words, {
      scrollTrigger: {
        trigger: title,
        start: "top 80%",
        toggleActions: "play none none none"
      },
      y: 50,
      filter: "blur(2px)",
      opacity: 0,
      duration: 1.8,
      ease: "power3.out",
      stagger: 0.04
    });
  });

  /* =========================
     ALGEMENE FADE-IN
     (NIET hero & titles)
  ========================= */

  const fadeElements = document.querySelectorAll(".fade-item");

  fadeElements.forEach(el => {
    gsap.from(el, {
      scrollTrigger: {
        trigger: el,
        start: "top 80%"
      },
      opacity: 0,
      y: 5,
      filter: "blur(1px)",
      duration: 1.2,
      ease: "power3.inOut"
    });
  });



  /* =========================
    IMAGE FADE-IN
  ========================= */

  const fadeImages = document.querySelectorAll(".fade-image");

  fadeImages.forEach(el => {
    gsap.from(el, {
      scrollTrigger: {
        trigger: el,
        start: "top 80%"
      },
      opacity: 0,
      y: 5,
      filter: "blur(2px)",
      duration: 1.2,
      ease: "power3.inOut"
    });
  });

});




/* 
delay: 0.4,
y: 5,
*/



