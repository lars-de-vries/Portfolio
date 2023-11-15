// JavaScript Document
console.log("Howdy!");



var menuButton = document.querySelector('header nav button');

menuButton.addEventListener('click', function(){
    var navigation = document.querySelector('header nav');
    navigation.classList.toggle("menu-active");

});