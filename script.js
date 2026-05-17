// Sticky nav
const nav = document.getElementById("main-nav");
window.addEventListener("scroll", () =>
  nav.classList.toggle("solid", scrollY > 60),
);

// Scroll reveal
const obs = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add("in");
        obs.unobserve(e.target);
      }
    });
  },
  { threshold: 0.08, rootMargin: "0px 0px -40px 0px" },
);
document
  .querySelectorAll(".reveal,.reveal-l,.reveal-r")
  .forEach((el) => obs.observe(el));

// Stagger challenge cards
document
  .querySelectorAll(".challenge-grid .c-card,.diff-grid .d-card")
  .forEach((el, i) => {
    el.style.transitionDelay = i * 0.12 + "s";
  });

// CTA particles
const pc = document.getElementById("pcont");
for (let i = 0; i < 22; i++) {
  const p = document.createElement("div");
  const s = Math.random() * 7 + 3;
  p.style.cssText = `position:absolute;border-radius:50%;background:var(--gold);width:${s}px;height:${s}px;left:${Math.random() * 100}%;top:${Math.random() * 100}%;opacity:0;--dur:${Math.random() * 4 + 5}s;--delay:${Math.random() * 5}s;animation:pfloat var(--dur) var(--delay) ease-in-out infinite;`;
  pc.appendChild(p);
}
