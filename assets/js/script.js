// A $( document ).ready() block.
$(document).ready(function () {
  gsap.registerPlugin(ScrollTrigger);

  // const lenis = new Lenis();

  // lenis.on("scroll", ScrollTrigger.update);

  // gsap.ticker.add((time) => {
  //   lenis.raf(time * 300);
  // });
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".strategies_image-wrapper",
      start: "top 20%",
      end: "bottom 70%",
      pin: true,
      scrub: true,
      markers: true,
    },
  });
  tl.to(".strategies_image-overlay-wrapper", {
    y: "-100%", // Đẩy phần tử overlay lên 100% chiều cao của nó
    ease: "none", // Không easing để hiệu ứng mượt hơn
  });
  tl.to(".strategies_static-image-wrapper", {
    y: "-30%", // Đẩy phần tử static image lên nhẹ nhàng, 30% chiều cao
    ease: "none", // Không easing để hiệu ứng mượt hơn
  });
  // gsap.ticker.lagSmoothing(0);
});
