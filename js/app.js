let menuBar = document.querySelector('.menu_bar');

let menuSection = document.querySelector('.menu');

let cross = document.querySelector('.cross');

let menuParent = document.querySelectorAll('.menu_parent li a'); // Fix: Use querySelectorAll

menuBar.addEventListener('click', function(){
   menuSection.classList.add('active_menu')
   cross.classList.add('active_cross')
})

cross.addEventListener('click', function(){
    menuSection.classList.remove('active_menu')
})




menuParent.forEach((item) => {
    item.addEventListener('click', function () {
        menuSection.classList.remove('active_menu');
    });
});



const btn = document.querySelector('.btn');

btn.addEventListener('click', function() {
  btn.textContent = "You're now browsing the course!";
});