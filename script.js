
  gsap.set(".slidesm", { scale: 5 });

  var tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".home",
      start: "top top",
      end: "bottom bottom",
      scrub: 1,
    },
  });
  tl.to(
    ".vdocont",
    {
      "--clip": "0%",
      ease: Power2,
    },
    "a"
  )
    .to(
      ".slidesm",
      {
        scale: 1,
        ease: Power2,
      },
      "a"
    )
    .to(
      ".lft",
      {
        xPercent: -10,
        stagger: 0.3,
        ease: Power2,
      },
      "b"
    )
    .to(
      ".rgt",
      {
        xPercent: 10,
        stagger: 0.3,
        ease: Power2,
      },
      "b"
    );

gsap.to(".slide", {
  scrollTrigger: {
    trigger: ".real",
    start: "top top",
    end: "bottom bottom",
    markers: true,
    scrub: 2,
  },
  xPercent: -200,
  ease: Power4,
});
