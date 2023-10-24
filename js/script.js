document.querySelector('.burger').addEventListener('click', function(){
    this.classList.toggle('active');
    document.querySelector('.header__items').classList.toggle('open');
})

let counter = 0;

const arrowApp = document.querySelector('.button__arrow-up');
const arrowUnder = document.querySelector(".button__arrow");
const counterValue = document.querySelector(".book__col-people");


arrowApp.addEventListener('click', () =>{
    counter++;
    counterValue.innerHTML = counter;
});

arrowUnder.addEventListener('click', () =>{  
    if(counter<=0){
        counter=0;
    }else{
        counter-=1;
    }
    counterValue.innerHTML = counter;
});

const jsApp = document.querySelector(".js__arrow-up");
const jsUnder = document.querySelector(".js__arrow-under");
const jsValue = document.querySelector(".js-people");

jsApp.addEventListener('click', () =>{
    counter++;
    jsValue.innerHTML = counter;
});

jsUnder.addEventListener('click', () =>{
    if(counter<=0){
        counter=0;
    }else{
        counter-=1;
    }
    jsValue.innerHTML = counter;
});