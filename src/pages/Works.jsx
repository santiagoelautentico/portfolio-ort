import CardWork from "../components/CardWork.jsx";
import { WORKS } from "../works.js";

export default function Works() {
  return (
    <section className="works-container">
      {WORKS.map((work, index) => (
        <CardWork
          key={work.id}
          id={work.id}
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

// import CardWork from "../components/CardWork.jsx";
// import CardWorkAll from "../components/CardWorkAll.jsx";
// import { useRef } from "react";
// import { gsap } from "gsap";
// import { useGSAP } from "@gsap/react";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { ScrollSmoother } from "gsap/ScrollSmoother";
// import { WORKS } from "../works.js";

// gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollSmoother);

// export default function Works() {
//   const wrapperRef = useRef(null);
//   const contentRef = useRef(null);

//   useGSAP(() => {
//     ScrollSmoother.create({
//       wrapper: wrapperRef.current,
//       content: contentRef.current,
//       smooth: 1.2,
//       effects: true,
//       smoothTouch: 0.1,
//     });
//     const cards = gsap.utils.toArray(".smooth-content .card");
//     cards.forEach(
//       (card, i) => {
//         gsap.to(card, {
//           scale: 0.8 * 0.2 * (i / (cards.length - 1)),
//           ease: "none",
//           scrollTrigger: {
//             trigger: card,
//             start: "top " + (15 + 35 * 1),
//             end: "bottom bottom",
//             endTrigger: ".smooth-content .container-cards",
//             scrub: true,
//             pin: true,
//             pinSpacing: false,
//             invalidateOnRefresh: true,
//           },
//         });
//       },
//       { scope: contentRef },
//     );

//     // 👇 esto es lo nuevo
//     const lastCard = cards[cards.length - 1];
//     ScrollTrigger.create({
//       trigger: ".container-cards",
//       start: "bottom-=200 bottom",
//       once: true,
//       onEnter: () => {
//         gsap.to(wrapperRef.current, {
//           opacity: 0,
//           duration: 0.5,
//           onComplete: () => {
//             document.body.classList.add("show-all-works");
//           },
//         });
//       },
//       onUpdate: (self) => {
//         console.log("progress:", self.progress);
//       },
//     });
//   });

//   return (
//     <>
//       <div className="page-title-container">
//         <h4>Trabajos</h4>
//         <hr />
//       </div>
//       <section
//         className="smooth-wrapper works-section works-section"
//         id="smooth-wrapper"
//         ref={wrapperRef}
//       >
//         <div className="smooth-content" id="smooth-content" ref={contentRef}>
//           <div className="spacer" />
//           <div className="container-cards">
//             {WORKS.map((work, index) => (
//               <CardWork
//                 key={work.id}
//                 id={work.id}
//                 index={index}
//                 title={work.title}
//                 device={work.device}
//                 icon={work.icon}
//                 description={work.description}
//                 proyectFor={work.proyectFor}
//                 technologies={work.technologies}
//               />
//             ))}
//           </div>
//         </div>
//       </section>
//       <section className="all-cards-container all-works-section">
//         <div className="container-allCard">
//           {WORKS.map((work, i) => (
//             <CardWorkAll
//               key={work.id}
//               id={work.id}
//               index={i}
//               title={work.title}
//               device={work.device}
//               icon={work.icon}
//               description={work.description}
//               proyectFor={work.proyectFor}
//               technologies={work.technologies}
//             />
//           ))}
//         </div>
//       </section>
//     </>
//   );
// }
