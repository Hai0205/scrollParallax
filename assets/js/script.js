// A $( document ).ready() block.
$(document).ready(function () {
  gsap.registerPlugin(ScrollTrigger);
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".strategies_image-wrapper",
      start: "top 30%",
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
});
