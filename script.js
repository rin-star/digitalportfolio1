/**
 * 3D scroll animation using GSAP ScrollTrigger
 */

// GSAP animations for hero + timeline
gsap.registerPlugin(ScrollTrigger);

// hero intro
gsap.from("header.hero h1", { y:40, opacity:0, duration:1, ease:"expo.out", delay:0.12 });
gsap.from("header.hero p", { y:28, opacity:0, duration:0.9, ease:"power3.out", delay:0.32 });

// section headings
gsap.utils.toArray(".section-title").forEach((el, i) => {
  gsap.from(el, { y:18, opacity:0, duration:0.8, ease:"power3.out", delay: i*0.08, scrollTrigger:{ trigger: el, start: "top 88%" }});
});

// cards stagger
gsap.utils.toArray(".card").forEach((card, i) => {
  gsap.from(card, {
    y:30, opacity:0, duration:0.9, ease:"power4.out",
    delay: 0.02 * i,
    scrollTrigger:{ trigger: card, start: "top 92%", toggleActions: "play none none reverse" }
  });

  // small mouse tilt for interactivity
  card.addEventListener("mousemove", (e) => {
    const r = card.getBoundingClientRect();
    const sx = (e.clientX - r.left)/r.width - 0.5;
    const sy = (e.clientY - r.top)/r.height - 0.5;
    gsap.to(card, { rotationY: sx*6, rotationX: -sy*4, duration:0.35, ease:"power1.out" });
  });
  card.addEventListener("mouseleave", () => gsap.to(card, { rotationY:0, rotationX:0, duration:0.5, ease:"power2.out" }));
});