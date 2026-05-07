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
    description: "Veritas es una red social especializada en noticias de primera mano.",
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

  const handleClick = useCallback(() => {
    if (animating.current) return;
    animating.current = true;

    const slider = sliderRef.current;
    const lastItem = slider.querySelector(".card-work-container:last-child");
    if (!lastItem) return;

    // 1. Capturar estado actual
    const state = Flip.getState(".card-work-container");

    // 2. Clonar la última carta y ponerla al frente
    const clone = lastItem.cloneNode(true);
    slider.insertBefore(clone, slider.firstChild);
    lastItem.style.display = "none";

    // 3. Animar desde el estado anterior al nuevo
    Flip.from(state, {
      targets: ".card-work-container",
      ease: "sine.inOut",
      duration: 0.6,
      absolute: true,
      onEnter: (elements) =>
        gsap.from(elements, {
          duration: 0.5,
          yPercent: 30,
          opacity: 0,
          ease: "expo.out",
        }),
      onLeave: (elements) =>
        gsap.to(elements, {
          duration: 0.3,
          yPercent: 5,
          xPercent: -5,
          transformOrigin: "bottom left",
          opacity: 0,
          ease: "expo.out",
          onComplete() {
            // Limpiar nodos del DOM que ya no se ven
            if (lastItem.parentNode) slider.removeChild(lastItem);
            elements.forEach((el) => {
              if (el.parentNode) el.parentNode.removeChild(el);
            });
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