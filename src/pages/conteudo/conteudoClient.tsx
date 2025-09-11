"use client";

import Image from "next/image";
import styles from "./conteudo.module.css";
import arrows from "../../img/icons/arrow/arrow aqui.svg";
import arrowRght from "../../img/icons/arrow/right-arrow 1.svg";
import { PrismicRichText } from "@prismicio/react";
import { useState } from "react";

export default function ConteudoClient({ conteudo }: { conteudo: any[] }) {
  const ITEMS_PAGE = 3;
  const [currentIndex, setCurrentIndex] = useState(0);

  function handleRight(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    if (currentIndex + ITEMS_PAGE < conteudo.length) {
      setCurrentIndex(currentIndex + ITEMS_PAGE);
    }
  }
  function handleLeft(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    if (currentIndex - ITEMS_PAGE < conteudo.length) {
      setCurrentIndex(currentIndex - ITEMS_PAGE);
    }
  }
  const currentItems = conteudo.slice(currentIndex, currentIndex + ITEMS_PAGE);

  return (
    <div className={styles.Container}>
      <div className={styles.Content}>
        
        {currentItems.map((item, index) => (
          <section className={styles.card} key={index}>
            {item.data.img?.url ? (
              <Image
                src={item.data.img.url}
                alt="Banner"
                className={styles.img}
                width={1280}
                height={296}
              />
            ) : (
              <div>
                <p>nenhuma imagem</p>
              </div>
            )}
            <h4>
              {/* CORREÇÃO: Renderize o campo "Text" diretamente */}
              {item.data.title}
            </h4>
            <div>
              <PrismicRichText field={item.data.date} />
            </div>
            <span>{item.data.describe}</span>
            <div className={styles.line}></div>
          </section>
        ))}
{
    conteudo.length > ITEMS_PAGE && (
        <div className={styles.ContainerBtn}>
          <div className={styles.ContentBtn}>
            {
                currentIndex > 0 ? (
                    <button 
                    className={styles.btnArrowRight} 
                    onClick={handleLeft}
                    disabled={currentIndex === 0}
                    >
                    <Image src={arrows} alt="arrow" width={25} height={25} />
                    </button>

                ): 
                null
            }
          </div>
          <div className={styles.ContentBtn}>
            {
                currentIndex + ITEMS_PAGE >= conteudo.length ? (
                    null
                ):
                (
                   <button 
                    className={styles.btnArrowRight}
                    onClick={handleRight}  
                    >
                    <Image src={arrowRght} alt="arrow" width={25} height={25} />
                    </button> 
                )
            }
          </div>
        </div>
    )
}
      </div>
    </div>
  );
}
