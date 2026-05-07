import CardWork from "../components/CardWork.jsx";
import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";

gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollSmoother);

const worksData = [
  {
    id: 1,
    title: "Veritas",
    device: "App",
    icon: "./veritas.svg",
    description:
      "Veritas es una red social especializada en noticias de primera mano, publicadas exclusivamente por cuentas verificadas.",
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
  const wrapperRef = useRef(null);
  const contentRef = useRef(null);

  useGSAP(() => {
    ScrollSmoother.create({
      wrapper: wrapperRef.current,
      content: contentRef.current,
      smooth: 1.2,
      effects: true,
      smoothTouch: 0.1,
    });
    const cards = gsap.utils.toArray(".card");
    cards.forEach(
      (card, i) => {
        gsap.to(card, {
          scale: 0.8 * 0.2 * (i / (cards.length - 1)),
          ease: "none",
          scrollTrigger: {
            trigger: card,
            start: "top " + (15 + 35 * 1),
            end: "bottom bottom",
            endTrigger: ".container-cards",
            scrub: true,
            pin: true,
            pinSpacing: false,
            invalidateOnRefresh: true,
          },
        });
      },
      { scope: contentRef },
    );
  });

  return (
    <section
      className="smooth-wrapper works-section"
      id="smooth-wrapper"
      ref={wrapperRef}
    >
      <div className="smooth-content" id="smooth-content" ref={contentRef}>
        <div className="spacer" />
        <div className="container-cards">
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
        </div>
      </div>
    </section>
  );
}
