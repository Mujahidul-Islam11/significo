(function () {
  const locomotiveScroll = new LocomotiveScroll();
})();

function homeAnimation() {
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
}

function realPageAnimation() {
  gsap.to(".slide", {
    scrollTrigger: {
      trigger: ".real",
      start: "top top",
      end: "bottom bottom",
      scrub: 1,
    },
    xPercent: -200,
    ease: Power4,
  });
}

function teamPageAnimation() {
  document.querySelectorAll(".listItem").forEach(function (Item) {
    Item.addEventListener("mousemove", function (details) {
      gsap.to(this.querySelector(".picture"), {
        opacity: 1,
        ease: Power4,
        duration: 0.5,
        x: gsap.utils.mapRange(
          0,
          window.innerWidth,
          -200,
          200,
          details.clientX
        ),
      });
    });
    Item.addEventListener("mouseleave", function (details) {
      gsap.to(this.querySelector(".picture"), {
        opacity: 0,
        ease: Power4,
        duration: 0.5,
      });
    });
  });
}

homeAnimation();
realPageAnimation();
teamPageAnimation();
