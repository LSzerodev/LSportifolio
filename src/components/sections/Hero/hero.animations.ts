import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function HeroAnimation(root: HTMLElement) {
  gsap.registerPlugin(ScrollTrigger);

  // Detecta se é mobile
  const isMobile = window.innerWidth <= 768;
  const scaleValue = isMobile ? 1 : 1.5; // Sem scale em mobile para evitar quebra de layout
  const yValue = isMobile ? -30 : -100; // Movimento Y menor em mobile

  const ctx = gsap.context(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: root,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });

    tl.fromTo(
      root,
      { scale: 1, y: 0 },
      { scale: scaleValue, y: yValue, ease: "none", opacity: 0, delay: 0.5}
    );

    const textY = isMobile ? -30 : -100;
    tl.to(root.querySelector("h1"), { y: textY }, 0);
    tl.to(root.querySelector("h2"), { y: textY }, 0);
  }, root);

  return () => ctx.revert();
}
