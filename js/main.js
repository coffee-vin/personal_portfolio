//select dom items
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
const menuBranding = document.querySelector('.menu-branding');
const menuBranding2 = document.querySelector('.menu-branding2');
const navItems = document.querySelectorAll('.nav-item');

//set init state of menu
let showMenu = false;

menuBtn.addEventListener('click',toggleMenu);

function toggleMenu(){
    if(!showMenu){
        menuBtn.classList.add('close');
        menu.classList.add('show');
        menuNav.classList.add('show');
        menuBranding.classList.add('show');
        menuBranding2.classList.add('show');  
        navItems.forEach(item => item.classList.add('show'));
        //set menu state
        showMenu = true; 
    }else{
        menuBtn.classList.remove('close');
        menu.classList.remove('show');
        menuNav.classList.remove('show');
        menuBranding.classList.remove('show'); 
        menuBranding2.classList.remove('show'); 
        navItems.forEach(item => item.classList.remove('show'));
        //set menu state
        showMenu = false; 

    }
}