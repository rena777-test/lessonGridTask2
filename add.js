window.onload = init;

let $ = function (id) {
    return document.getElementById(id);
}

function init(){
    let slider = $("myRange");
    let output = $("demo");
    output.innerHTML = slider.value;
    
    slider.oninput = function () {
        output.innerHTML = this.value + " % ";
    }
/* ------------------------------------------------------- */
    let slider22 = $("slider2");
    let output22 = $("percent2");
    output22.innerHTML = slider22.value;
    let hidenEl = document.querySelector(".hide");
    console.log(hidenEl);
    hidenEl.style.background = "";
    
    slider22.oninput = function () {
        output22.innerHTML = this.value;
    }
    /* ------------------------------------------------------- */

    let slider33 = $("slider3");
    let output33 = $("percent3");
    output33.innerHTML = slider33.value;
    
    slider33.oninput = function () {
        output33.innerHTML = this.value + " % ";
    }
}