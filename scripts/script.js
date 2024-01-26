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