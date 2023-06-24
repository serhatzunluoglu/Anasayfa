
let buton= document.querySelector(".navbar-bottom-categories");
let bars= document.querySelector("#toggle_button_1");
let xmark= document.querySelector("#toggle_button_2");


function categories_on_off(){
    if(buton.classList.contains("display-on")==true){
        buton.classList.remove("display-on");
        buton.classList.add("display-off");
        xmark.classList.remove("display-on");
        xmark.classList.add("display-off");
        bars.classList.remove("display-off");
        bars.classList.add("display-on");
    }
    else if(buton.classList.contains("display-off")==true){
        buton.classList.remove("display-off");
        buton.classList.add("display-on");
        bars.classList.remove("display-on");
        bars.classList.add("display-off");
        xmark.classList.remove("display-off");
        xmark.classList.add("display-on");
    }
}
