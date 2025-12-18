import { useLayoutEffect, useRef } from 'react'
import styles from './cursor.module.css'
import { Cursor } from './cursor.animation';

export function CursorSeguir() {
  const cursorRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    if (!cursorRef.current) return;
    Cursor(cursorRef.current);
  }, []);

  return (
    <div ref={cursorRef} className={styles.cursor}></div>
  );
}
