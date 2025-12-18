import gsap from "gsap";

export function Cursor(cursor: HTMLDivElement) {
  const moveX = gsap.quickTo(cursor, "x", {
    duration: 0.3,
    ease: "power3.out"
  });

  const moveY = gsap.quickTo(cursor, "y", {
    duration: 0.3,
    ease: "power3.out"
  });

  const onMouseMove = (e: MouseEvent) => {
    moveX(e.clientX);
    moveY(e.clientY);
  };

  window.addEventListener("mousemove", onMouseMove);

  return () => {
    window.removeEventListener("mousemove", onMouseMove);
  };
}
