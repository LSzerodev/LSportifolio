"use client";

import Image from "next/image";
import Link from "next/link"; // Faltava importar o Link
import styles from "./conteudo.module.css";
import { PrismicRichText } from "@prismicio/react";
import { useState } from "react";
import { asLink } from "@prismicio/client"; // Faltava importar a função 'asLink'

// Corrigido: Nomes de arquivos em 'import' não podem ter espaços.
// Renomeie os arquivos no seu projeto para corresponder a estes nomes.
import arrows from "../../img/icons/arrow/arrow left.svg";
import arrowRght from "../../img/icons/arrow/right-arrow 1.svg";

export default function ConteudoClient({ conteudo }: { conteudo?: any[] }) {
  const ITEMS_PAGE = 3;
  const [currentIndex, setCurrentIndex] = useState(0);

  const safeConteudo = conteudo ?? []; // Garante que 'conteudo' nunca seja nulo ou indefinido

  function handleRight(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    if (currentIndex + ITEMS_PAGE < safeConteudo.length) {
      setCurrentIndex(currentIndex + ITEMS_PAGE);
    }
  }

  function handleLeft(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    if (currentIndex - ITEMS_PAGE >= 0) {
      setCurrentIndex(currentIndex - ITEMS_PAGE);
    }
  }

  const currentItems = safeConteudo.slice(
    currentIndex,
    currentIndex + ITEMS_PAGE
  );

  if (safeConteudo.length === 0) {
    return <p>Nenhum conteúdo disponível.</p>;
  }

  return (
    <div className={styles.Container}>
      <div className={styles.Content}>
        {currentItems.map((item) => (
          // Melhoria: Usar um ID único do item como 'key' em vez do index.
          <section className={styles.card} key={item.id}>
            {item.data?.img?.url ? (
              <Image
                src={item.data.img.url}
                alt={item.data.img.alt || "Banner do projeto"}
                className={styles.img}
                width={1280}
                height={296}
                priority={true} // Adicionado para carregar imagens principais mais rápido
              />
            ) : (
              <div className={styles.placeholderImg}>
                <p>Nenhuma imagem disponível</p>
              </div>
            )}
            <h4>{item.data?.title}</h4>
            <div>
              <PrismicRichText field={item.data?.date} />
            </div>
            <span>{item.data?.describe}</span>
            <br />
            {/* Correção: O 'Link' do Next.js deve envolver o elemento <a> ou o botão */}
            
              <Link href={ asLink(item.data.link) || "/conteudo"} >
                <a className={styles.btn}  >
                  Clique no projeto
                </a>
              </Link>
          
            <div className={styles.line}></div>
          </section>
        ))}

        {safeConteudo.length > ITEMS_PAGE && (
          <div className={styles.ContainerBtn}>
            <div className={styles.ContentBtn}>
              {currentIndex > 0 && (
                <button
                  className={styles.btnArrowLeft} // Nome de classe mais específico
                  onClick={handleLeft}
                >
                  <Image src={arrows} alt="Seta para esquerda" width={25} height={25} />
                </button>
              )}
            </div>
            <div className={styles.ContentBtn}>
              {currentIndex + ITEMS_PAGE < safeConteudo.length && (
                <button
                  className={styles.btnArrowRight}
                  onClick={handleRight}
                >
                  <Image src={arrowRght} alt="Seta para direita" width={25} height={25} />
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}