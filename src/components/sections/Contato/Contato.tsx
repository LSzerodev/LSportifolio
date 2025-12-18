import styles from "./Contato.module.css";
import {
  FaLinkedinIn,
  FaInstagram,
  FaWhatsapp,
  FaTiktok,
  FaGithub,
} from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa6";
import groupDesign from "../../../img/img-is-sections/grupo designs.png";
import Image from "next/image";

function Contato() {
  const contactLinks = [
    {
      id: "linkedin",
      label: "LinkedIn",
      icon: <FaLinkedinIn />,
      className: styles.LinkedIn,
      url: "www.linkedin.com/in/lsfllps",
    },
    {
      id: "instagram",
      label: "Instagram",
      icon: <FaInstagram />,
      className: styles.Instagram,
      url: "https://www.instagram.com/lsflow1/",
    },
    {
      id: "whatsapp",
      label: "WhatsApp",
      icon: <FaWhatsapp />,
      className: styles.WhatsApp,
      url: "https://wa.me/5567998797391",
    },
    {
      id: "tiktok",
      label: "TikTok",
      icon: <FaTiktok />,
      className: styles.TikTok,
      url: "https://tiktok.com/@ls.sites",
    },
    {
      id: "github",
      label: "GitHub",
      icon: <FaGithub />,
      className: styles.GitHub,
      url: "https://github.com/LSzerodev/",
    },
  ];

  return (
    <section className={styles.ContatosContainer}>
      <div className={styles.ContatosWrapper}>
        {/* CARD ESQUERDA */}
        <div className={styles.ContactCard}>
          <div className={styles.ContactTop}>
            <div className={styles.ContactTitle}>
              <span>Contato</span>
              <span className={styles.Subtle}>– clique para ver</span>
            </div>

            <button className={styles.ArrowBtn} aria-label="Abrir contatos">
              <FaArrowDown size={16} />
            </button>
          </div>

          <div className={styles.ContactLinks}>
            {contactLinks.map(({ id, label, icon, className, url }) => (
              <a
                key={id}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.ContactLink} ${className}`}
              >
                {icon}
                <span>{label}</span>
              </a>
            ))}
          </div>
        </div>

        {/* CARD DIREITA */}
        <div className={styles.PreviewCard}>
          <div className={styles.PreviewCard}>
            <span className={styles.PreviewLabel}>Design - website</span>

            <div className={styles.PreviewImageWrapper}>
              <Image 
                src={groupDesign} 
                alt="Imagem do hero"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contato;
