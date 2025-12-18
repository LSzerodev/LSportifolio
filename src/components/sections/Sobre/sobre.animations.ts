import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

export function SobreAnimation(root: HTMLElement, title: HTMLElement) {
  gsap.registerPlugin(ScrollTrigger, SplitText);

  const ctx = gsap.context(() => {
    const split = SplitText.create(title, {
      type: "words, chars",
      mask: "lines",
      autoSplit: true,
    });

    const tl = gsap.timeline({
      scrollTrigger: {          
        trigger: root,
        start: "top 80%", // Inicia quando a seção está quase totalmente visível
        end: "center 20%",
        scrub: 2,
      }
    });


    tl.addLabel("start")
      .fromTo(split.chars, 
        { opacity: 0.5, y: 5, stagger: 0.05, },
        { opacity: 1, y: -5, stagger: 0.05 }
    )
  }, root);

  return () => ctx.revert();
}
