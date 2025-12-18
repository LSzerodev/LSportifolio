import styles from "./Sobre.module.css";
import globoAbstrato from "../../../img/img-is-sections/abstract5g.png";
import { FaArrowDown } from "react-icons/fa6";
import { SobreAnimation } from "./sobre.animations";
import { useLayoutEffect, useRef } from "react";
import Image from "next/image";

function Sobre() {
  const sobreRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  const words = ["RESULTADOS REAIS", "PRECO FLEXIVEL", "WEBSITE DESIGN"];
  const steps = [
    { number: "01", title: "Entendimento do Problema" },
    { number: "02", title: "Experiência do Usuário (UX/UI)" },
    { number: "03", title: "Construção do Produto" },
    { number: "04", title: "Otimização, Escala e Resultados" },
  ];

  useLayoutEffect(() => {
    if (!sobreRef.current || !titleRef.current) return;
    return SobreAnimation(sobreRef.current, titleRef.current);
  }, []);

  return (
    <>
      <section className={styles.ContainerSobre} ref={sobreRef}>
        <div className={styles.ArrowDown}>
          <div className={styles.FormCentral}>
            <FaArrowDown color="#F0E6E4" size={30} />
          </div>
        </div>

        <h2 ref={titleRef} className={styles.SobreTitle}>
          Sou um desenvolvedor full stack e designer freelance, focado em
          transformar ideias em produtos digitais eficientes, com interfaces
          claras, decisões técnicas sólidas e execução ágil, aberto a projetos e
          oportunidades profissionais.
        </h2>

        <div className={styles.Carrosel}>
          <div className={styles.Track}>
            {[...words, ...words].map((word, index) => (
              <div key={index} className={styles.Item}>
                <Image
                  src={globoAbstrato}
                  alt="a"
                  className={styles.globoAbstract}
                  aria-hidden="true"
                />
                <span>{word}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.ContainerEtapas}>
        <div className={styles.etapaInfo}>
          <p>Passos para entrega</p>
        </div>

        <div className={styles.EtapasContent}>
          {steps.map((step, index) => (
            <div key={index} className={styles.EtapaRow}>
              <span className={styles.stepNumber}>{step.number}</span>
              <span className={styles.stepBullet}></span>
              <span className={styles.stepTitle}>{step.title}</span>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Sobre;
