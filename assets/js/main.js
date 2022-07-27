// countdown timer js
let dayItem = document.querySelector("#days");
let hoursItem = document.querySelector("#hours");
let minItem = document.querySelector("#min");
let secItem = document.querySelector("#sec");


let countDown = () =>{
    let futuerDate = new Date ("30 july 2022");
    let curentDate = new Date ();
    let mydate = futuerDate - curentDate;


    let days = Math.floor(mydate / 1000 / 60 / 60 / 24);
    let hours = Math.floor(mydate / 1000 / 60 / 60) % 24;
    let min = Math.floor(mydate / 1000 / 60) % 60;
    let sec = Math.floor(mydate / 1000) % 60;

    dayItem.innerHTML =  days;
    hoursItem.innerHTML =  hours;
    minItem.innerHTML =  min;
    secItem.innerHTML =  sec;
}
countDown()
setInterval(countDown, 1000)
// scroll to tp
// navbar hide
let navBar = document.querySelectorAll('.nav-link');
let navcollapse = document.querySelector('.navbar-collapse.collapse')
navBar.forEach(function(a){
    a.addEventListener("click",function(){
        navcollapse.classList.remove("show");
    })
})