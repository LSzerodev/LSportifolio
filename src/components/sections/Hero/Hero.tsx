import { useLayoutEffect, useRef } from "react";
import styles from "./Hero.module.css";
import { HeroAnimation } from "./hero.animations";
function Hero() {

  const heroRef = useRef<HTMLElement>(null)

  useLayoutEffect(() => {
    if(!heroRef.current) return;
    return HeroAnimation(heroRef.current);
  }, [])

  return (
    <section ref={heroRef} className={styles.HeroSection} >
      <div className={styles.TextHero}>
        <h2>UI/UX Design & Desenvolvedor fullstack</h2>
        <h1>PORTIFOLIO</h1>
      </div>
    </section>
  );
}
export default Hero;
