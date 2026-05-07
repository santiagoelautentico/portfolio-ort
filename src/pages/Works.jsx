import { useRef, useCallback } from "react";
import { gsap } from "gsap";
import { Flip } from "gsap/Flip";
import CardWork from "../components/CardWork.jsx";

gsap.registerPlugin(Flip);

const worksData = [
  {
    id: 1,
    title: "Veritas",
    device: "App",
    icon: "./veritas.svg",
    description: "Veritas es una red social especializada en noticias de primera mano, publicadas exclusivamente por cuentas verificadas.",
    proyectFor: "Proyecto de la ORT",
    technologies: ["react", "js", "mysql"],
  },
  {
    id: 2,
    title: "Overview",
    device: "Web",
    icon: "./overview.svg",
    description: "Overview description.",
    proyectFor: "Proyecto de la ORT",
    technologies: ["html", "css", "js"],
  },
  {
    id: 3,
    title: "Upper90",
    device: "Web",
    icon: "./upper90.svg",
    description: "Upper90 description.",
    proyectFor: "Proyecto de la ORT",
    technologies: ["html", "css", "js"],
  },
];
export default function Works() {
  const sliderRef = useRef(null);
  const animating = useRef(false);

  const moveCard = useCallback(() => {
    const slider = sliderRef.current;
    const lastItem = slider.querySelector(".item:last-child");
    if (!lastItem) return null;

    const newItem = document.createElement("div");
    newItem.className = lastItem.className;
    newItem.innerHTML = lastItem.innerHTML; // copiar el contenido completo
    slider.insertBefore(newItem, slider.firstChild);
    lastItem.style.display = "none";
    return lastItem;
  }, []);

  const handleClick = useCallback(() => {
    if (animating.current) return;
    animating.current = true;

    const slider = sliderRef.current;
    const state = Flip.getState(".item");
    const removed = moveCard();

    Flip.from(state, {
      targets: ".item",
      ease: "sine.inOut",
      absolute: true,
      onEnter: (elements) =>
        gsap.from(elements, {
          duration: 0.3,
          yPercent: 1,
          opacity: 0,
          ease: "expo.out",
        }),
      onLeave: (elements) =>
        gsap.to(elements, {
          duration: 0.3,
          yPercent: 5,
          xPercent: -5,
          transformOrigin: "bottom center",
          opacity: 0,
          ease: "expo.out",
          onComplete() {
            if (removed?.parentNode) slider.removeChild(removed);
            elements.forEach((el) => el.parentNode?.removeChild(el));
            animating.current = false;
          },
        }),
    });
  }, []);

  return (
    <section className="works-container" ref={sliderRef} onClick={handleClick}>
      {worksData.map((work, index) => (
        <CardWork
          key={work.id}
          index={index}
          title={work.title}
          device={work.device}
          icon={work.icon}
          description={work.description}
          proyectFor={work.proyectFor}
          technologies={work.technologies}
        />
      ))}
    </section>
  );
}
