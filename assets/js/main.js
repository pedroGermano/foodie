let mnu = document.querySelector(".ri-menu-3-line");
let clos = document.querySelector(".ri-close-line");
let nav = document.querySelector(".resp-nav");

mnu.addEventListener("click", function(){
    nav.style.right = "0%";
})

clos.addEventListener("click", function(){
    nav.style.right = "-100%";
})