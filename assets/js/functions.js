/*global jQuery */
/* Contents
// ------------------------------------------------>
	1.  Background INSERT
	2.  HEADER AFFIX
	3.	AJAX MAILCHIMP
	4.  AJAX CAMPAIGN MONITOR 
	5.  OWL CAROUSEL
    6.  SCROLL TO
    7.  Navbar Toggler
	8.  WOW
	9.  Youtube Background
*/    


/* ------------------  Background INSERT ------------------ */

var bgSection = document.querySelectorAll(".bg-section");
bgSection.forEach(function(el) {
    var bgSrc = el.children[0].src;
    var bgUrl = 'url(' + bgSrc + ')';
    el.parentNode.style["backgroundImage"] = bgUrl;
    el.parentNode.classList.add("bg-section")
    el.remove();
});


/* ------------------ HEADER AFFIX ------------------ */

window.addEventListener("scroll", () => {
    if(window.scrollY > 105)
        document.querySelector(".navbar-sticky").classList.add("navbar-fixed");
    else
        document.querySelector(".navbar-sticky").classList.remove("navbar-fixed");
})


/* ------------------ OWL CAROUSEL ------------------ */

// $(".owl-carousel").each(function() {
//     var $Carousel = $(this);
//     $Carousel.owlCarousel({
//         loop: $Carousel.data('loop'),
//         autoplay: $Carousel.data("autoplay"),
//         margin: $Carousel.data('space'),
//         nav: $Carousel.data('nav'),
//         dots: $Carousel.data('dots'),
//         dotsSpeed: $Carousel.data('speed'),
//         responsive: {
//             0: {
//                 items: 1
//             },
//             600: {
//                 items: $Carousel.data('slide-res')
//             },
//             1000: {
//                 items: $Carousel.data('slide'),
//             }
//         }
//     });
// });


/* ------------------ NAVBAR SCROLLING SECTION ------------------ */

if (document.querySelector('.body-scroll')) {
    window.addEventListener("scroll", function () {
        document.querySelectorAll('section').forEach(function (el) {
            let sectionID = el.getAttribute("id"),
                sectionTop = el.offsetTop - 100,
                sectionHight = el.offsetHeight,
                wScroll = window.scrollY,
                navHref = document.querySelector("a[href='#" + sectionID + "']"),
                nav = navHref.parentNode;
            if (wScroll > sectionTop - 1 && wScroll < sectionTop + sectionHight - 1) {
                nav.classList.add('active');
                let els = nav.parentNode.children;
                [].slice.call(els).forEach((el) => {
                    if(el != nav)
                        el.classList.remove("active")
                })
            }
        });
    });
}


/* ------------------  NAVBAR SCROLL TO ------------------ */

function scrollTo(element = document.documentElement, to = 0, duration = 1000) {
    var start = element.scrollTop,
        change = to - start,
        currentTime = 0,
        increment = 20;
        
    var animateScroll = function(){        
        currentTime += increment;
        var val = Math.easeInOutQuad(currentTime, start, change, duration);
        element.scrollTop = val;
        if(currentTime < duration) {
            setTimeout(animateScroll, increment);
        }
    };
    animateScroll();
}

Math.easeInOutQuad = function (t, b, c, d) {
    t /= d/2;
    if (t < 1) return c/2*t*t + b;
    t--;
    return -c/2 * (t*(t-2) - 1) + b;
};

document.querySelectorAll('.nav-item .nav-link').forEach((a) => {
    a.addEventListener("click", (event) => {
        var target = document.querySelector(a.getAttribute('href'));
        let els = a.parentNode.parentNode.children;
        [].slice.call(els).forEach((el) => {
                el.classList.remove("active")
        })
        a.parentNode.parentNode.classList.add('active');

        if (target) {
            event.preventDefault();
            scrollTo(document.documentElement, target.offsetTop - 100, 1000);
            
        }

        // If click link and navabr is show
        if (document.querySelector('.navbar-collapse').classList.contains('show')) {
            document.querySelector('.navbar-collapse').classList.toggle('show');
            document.querySelector('.navbar-toggler-icon').classList.toggle('active');
            document.querySelector('.navbar-toggler').classList.toggle('collapsed');
        }
    })
})


/* ------------------  Navbar Toggler ------------------ */

document.querySelector('.navbar-toggler').addEventListener("click", (evt) => {
    evt.currentTarget.classList.toggle("collapsed")
    document.querySelector(".navbar-toggler-icon").classList.toggle("active");
    document.querySelector("#navbarContent").classList.toggle("show");
});


/* ------------------  WOW Animated ------------------ */

let WOW = require("wowjs").WOW
var wow = new WOW({
    boxClass: 'wow',
    animateClass: 'animated',
    offset: 50,
    mobile: false,
    live: true

});
wow.init();