import styles from "./sobre.module.css";
import css from "../../img/icons/css.svg";
import js from "../../img/icons/js.svg";
import ts from "../../img/icons/ts.svg";
import scss from "../../img/icons/scss.svg";
import figma from "../../img/icons/figma.svg";
import html from "../../img/icons/html.svg";
import node from "../../img/icons/node.svg";
import github from "../../img/icons/github.svg";
import wordpress from "../../img/icons/wordpress.svg";
import react from "../../img/icons/react.svg";
import firebase from "../../img/icons/firebase.svg";
import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Sobre() {
  const icons = [
    figma,
    wordpress,
    html,
    react,
    firebase,
    css,
    js,
    ts,
    scss,
    github,
    node,
  ];

  const [activeIcons, setActiveIcons] = useState<number[]>([]); // índices ativos
  const [isMobile, setIsMobile] = useState(false);

  function getRandomIndexes(arrayLength: number, count: number) {
    let indexes: number[] = [];
    while (indexes.length < count) {
      const rand = Math.floor(Math.random() * arrayLength);
      if (!indexes.includes(rand)) indexes.push(rand);
    }
    return indexes;
  }
  
  useEffect(() => {
    // Função para verificar e atualizar o estado 'isMobile'
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 662);
    };

    // Executa a função uma vez para definir o estado inicial
    handleResize();

    // Adiciona o 'ouvinte' para o evento de redimensionamento da janela
    window.addEventListener('resize', handleResize);

    // Intervalo para a animação do desktop
    const interval = setInterval(() => {
      // Evita rodar a lógica do desktop se estiver no mobile
      if (window.innerWidth > 662) { 
        setActiveIcons(getRandomIndexes(icons.length, 3));
      }
    }, 3000);

    // ✅ Função de limpeza: remove o ouvinte e o intervalo quando o componente desmontar
    return () => {
      window.removeEventListener('resize', handleResize);
      clearInterval(interval);
    };
  }, []);
  

  return (
    <div className={styles.Container}>
      <div className={styles.Content}>
        <div className={styles.ContentLeft}>
          <h1>LS SITES</h1>
          <p>
            Sou Luís, desenvolvedor de sites e aplicações, e neste espaço
            compartilho meus projetos publicados no GitHub, TikTok e LinkedIn.
            <br />
            <br />
            Este é mais um trabalho desenvolvido com Next.js e outras
            tecnologias modernas, onde aplico meus conhecimentos em Node.js,
            Express, TypeScript, JavaScript, React, WordPress e testes de
            aplicações.
            <br />
            <br />
            Também domino áreas como APIs, CSS/SCSS, Figma, UI/UX e Firebase.
            Cada projeto que publico é uma oportunidade de mostrar minhas
            habilidades na prática e de como transformo ideias em soluções
            digitais eficientes e bem estruturadas.
          </p>
          <Link href={'https://wa.me/5567998797391'}>
            <button className={styles.btn}>Contate-me</button>
          </Link>
        </div>
        <div className={styles.ContentRight}>
          {
            isMobile ? (
              <div className={styles.slideTrack}>
                {
                    icons.concat(icons).map((item, index) => (
                      <div className={styles.contentIcons} key={index}>
                        <Image 
                          src={item}
                          alt="icon"
                          className={styles.icon}
                        />
                      </div>
                    ))
                }
              </div>
            ): (
              icons.map((item, index) => (
            <div
              className={`${styles.contentIcons} ${activeIcons.includes(index) ? styles.active : ""}`}
              key={index}
            >
              <Image src={item} alt="figma" className={styles.icon} />
            </div>
          )))
          }
        </div>
      </div>
    </div>
  );
}
