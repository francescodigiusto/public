import "../css/main.scss"

// import "./vendor.js";
import "./functions.js";

function FaqExpand(e) {
    let myEl = e.currentTarget;
    document.querySelectorAll(".faq.active").forEach( (el) => {
        if(el != myEl)
            el.classList.remove("active")
    })
    myEl.classList.toggle("active");
}

document.querySelectorAll(".faq").forEach((faq) => {
    faq.addEventListener("click", FaqExpand);
})