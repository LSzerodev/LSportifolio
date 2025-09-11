import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Image from "next/image";
import img1 from "../img/a1.png";
import arrow from '../img/icons/arrow/Arrow 2.svg'
import arrow2 from '../img/icons/arrow/arrow aqui.svg'

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
      </Head>

      <div className={styles.Container}>
        <div className={styles.ImageContent}>
        <div className={styles.ContentInfo}>
          <h1>Transformo ideias em <span className={styles.gradientProximo}>projetos</span> reais</h1>
          <p className={styles.ContentFrase}>
           Aqui você encontra todos os meus trabalhos atualizados: cada novo projeto, cada início de criação. Se você busca alguém comprometido em entregar soluções modernas e sob medida, está no lugar certo.
          </p>
        
          <button className={styles.btn}>
            <Image
              src={arrow}
              alt="algo"
              className={styles.arrowSvg}
            />
            Contate-me
            <Image
              src={arrow2}
              alt="algo"
              className={styles.arrowSvgg}
            />
          </button>
        </div>
      </div>
        </div>
    </>
  );
}
