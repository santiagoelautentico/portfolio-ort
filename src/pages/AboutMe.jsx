import Stack from "../components/Stack.jsx";
import { useState, useEffect } from "react";
export default function AboutMe() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const images = [
    "other.jpeg",
    "other2.jpeg",
    "other3.jpeg",
    "other5.jpeg",
    "other6.jpeg",
  ];
  return (
    <>
      <section className="aboutMe-container">
        <h1>Santiago Urbina</h1>
        <h4>Front-End developer | UX/UI designer</h4>
        <article className="abstract">
          Mi etapa como <strong>desarrollador</strong> comenzó en el
          bachillerato tecnológico "Anima", donde descubrí que me apasionaba
          crear interfaces, no solo la parte de programación, sino también la
          del diseño. Desde entonces entendí que ambas disciplinas se necesitan
          mutuamente —{" "}
          <strong>
            un diseño llamativo pierde poder cuando no es intuitivo, y un diseño
            intuitivo pierde interés si no es atractivo.
          </strong>{" "}
          Terminé la tecnicatura en Diseño Digital orientado en Apps con ese
          objetivo en mente, y es lo que busco lograr en cada proyecto.
        </article>
      </section>
      <article className="other-proyects-container">
        <div className="title-proyects-about-container">
          <h2 className="title-proyects-about">
            Galeria de proyectos de diseño durante la carrera
          </h2>
        </div>
        {isMobile ? (
          <div
            style={{
              width: "70%",
              height: "70vh",
              margin: "60px auto 0 auto", // espacio para que no se corte arriba
            }}
          >
            <Stack
              randomRotation={false}
              sensitivity={200}
              sendToBackOnClick={true}
              cards={images.map((src, i) => (
                <img
                  key={i}
                  src={`/otherProyects/${src}`}
                  alt={`card-${i + 1}`}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              ))}
              autoplay={false}
              autoplayDelay={3000}
              pauseOnHover={false}
            />
          </div>
        ) : (
          <div
            style={{
              width: "30%",
              height: "90vh",
              margin: "60px auto 0 auto", // espacio para que no se corte arriba
            }}
          >
            <Stack
              randomRotation={false}
              sensitivity={200}
              sendToBackOnClick={true}
              cards={images.map((src, i) => (
                <img
                  key={i}
                  src={`/otherProyects/${src}`}
                  alt={`card-${i + 1}`}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              ))}
              autoplay={false}
              autoplayDelay={3000}
              pauseOnHover={false}
            />
          </div>
        )}
      </article>
    </>
  );
}
