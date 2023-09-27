let burgerbtn = document.querySelector('.burger_btn');
let burgermenu = document.querySelector('.burger_menu');
let btnlang = document.querySelector('.lang')

console.log(btnlang)

burgerbtn.addEventListener('click', function(){
    burgermenu.classList.toggle('active');
    burgerbtn.classList.toggle('active');
})

btnlang.addEventListener('click', function() {
    if(btnlang.innerHTML=='<img src="./img/Planet.svg" alt="#"> EN'){
        btnlang.innerHTML='<img src="./img/Planet.svg" alt="#"> RU'
    } else {
        btnlang.innerHTML='<img src="./img/Planet.svg" alt="#"> EN'
    } 
})


