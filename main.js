
console.log("merhaba");

let buton= document.querySelector(".navbar-bottom-categories");

console.log(buton.classList.contains("navbar-bottom-categories"));

function categories_on(){
    if(buton.classList.contains("display-on")==true){
        buton.classList.remove("display-on");
        buton.classList.add("display-off");
    }
    else if(buton.classList.contains("display-off")==true){
        buton.classList.remove("display-off");
        buton.classList.add("display-on");
    }
}
