let searchBtn= document.querySelector("#search-btn i");
let searchForm= document.querySelector(".search-form");
let menu= document.querySelector("#menu-btn i");
let navBar= document.querySelector(".navbar");

searchBtn.onclick=()=>{
    searchBtn.classList.toggle("fa-times")
    searchForm.classList.toggle("active")
    menu.classList.remove("fa-times")
    navBar.classList.remove("active")
}
menu.onclick=()=>{
    menu.classList.toggle("fa-times");
    navBar.classList.toggle("active")
    searchBtn.classList.remove("fa-times")
    searchForm.classList.remove("active")

}
window.onscroll=()=>{
    searchBtn.classList.remove("fa-times");
    searchForm.classList.remove(".active")
    menu.classList.remove("fa-times")
    navBar.classList.remove(".active")
}



let slides= document.querySelectorAll(".home .slide")
console.log(slides);
let index=0;
function next(){
    slides[index].classList.remove("active")
    index=(index+1)% slides.length; //1%2=1
    slides[index].classList.add("active")
}

function prev(){
   slides[index].classList.remove("active")
   index= (index-1+slides.length)%slides.length  //0-1+2=1%2=1
   console.log(index);
   slides[index].classList.add("active")
}
