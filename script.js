function loading() {
    var m = gsap.timeline()

    m.to(" #yellow1", {
        top: "-100%",
        duration: 0.5,
        delay: 0.2,
        ease: "expo.out"

    })
    m.from(" #yellow2", {
        top: "100%",
        duration: 0.7,
        delay: 0.6,
        ease: "expo.out"
    }, "anim")
    m.to(".loader h1", {
        delay: 0.2,
        color: "black",
        duration: 0.5
    }, "anim")
    m.to("#nav h2", {
        top: -100,
        delay: 0.2,
        color: "black",
        duration: 0.5,
        ease: "expo.in"
    }, "anim")
    m.to(".loader", {
        display: "none"
    })
}
loading()



var elem = document.querySelectorAll(".elem")
var page2 = document.querySelector("#page2")
elem.forEach(function (el) {
    el.addEventListener("mouseenter", function () {
        var bgimg = el.getAttribute("data-img")
        page2.style.backgroundImage = `url(${bgimg})`
        page2.style.objectFit = "cover"
        page2.style.objectPosition = "center"

    })
    el.addEventListener("mouseleave", function () {

        page2.style.backgroundColor = "black"


    })
})
// locomotive
function loco() {
    const scroll = new LocomotiveScroll({
        el: document.querySelector('#main'),
        smooth: true
    });

    var jaotop = document.querySelector(".footer h2")
    jaotop.addEventListener("click", function () {
        scroll.scrollTo(0)
    })
}
loco()