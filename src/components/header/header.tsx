"use client";

import Link from "next/link";
import styles from "./header.module.css";
import { usePathname } from "next/navigation";

export function Header() {
  const pathname = usePathname();

  return (
    <div className={styles.Container}>
      <header className={styles.Header}>
        <nav className={styles.Nav}>
          <Link
            href="/"
            className={
              pathname === "/"
                ? styles.active
                : pathname === "/sobre"
                ? styles.sobreInactive
                : styles.inactive
            }
          >
            Home
          </Link>

          <Link
            href="/conteudo"
            className={
              pathname === "/conteudo"
                ? styles.active
                : pathname === "/sobre"
                ? styles.sobreInactive
                : styles.inactive
            }
          >
            Projetos
          </Link>

          <Link
            href="/sobre"
            className={
              pathname === "/sobre" ? styles.active : styles.inactive
            }
          >
            Quem sou?
          </Link>
        </nav>
      </header>
    </div>
  );
}