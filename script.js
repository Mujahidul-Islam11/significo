function homePageAnimation (){
    gsap.set(".rowContainer", {scale: 5})

var tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".home",
        start: "top top",
        end: "bottom top",
        pin: true,
        scrub: 3
    },
})
tl.to(".vdocont",{
    '--clip': "0%",
    ease: Power2,
}, 'a').to(".rowContainer",{
    scale: 1,
    ease: Power2,
}, 'a').to(".lft",{
    xPercent: -10,
    stagger: 0.3,
    ease: Power2,
}, 'b').to(".rgt",{
    xPercent: 10,
    stagger: 0.3,
    ease: Power2,
}, 'b')
}

homePageAnimation();