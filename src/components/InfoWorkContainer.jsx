import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { WORKS } from "../works.js";
import { useEffect, useState } from "react";

const isIOSDevice =
  typeof navigator !== "undefined" &&
  /iPad|iPhone|iPod/.test(navigator.userAgent) &&
  !window.MSStream;

const isSafariBrowser =
  typeof navigator !== "undefined" &&
  /^((?!chrome|android|crios|fxios|edgios).)*safari/i.test(navigator.userAgent);

const isIOS = isIOSDevice || isSafariBrowser;

//   return (
//     <motion.article
//       className={`info-work-container-article ${isIOS ? "is-ios" : ""}`}
//       style={{ marginInline: "auto", overflowX: "hidden" }}
// initial={{ width: "0%" }}
// animate={{ width: "100%" }}
// exit={{ width: "0%" }}
// transition={{ duration: 0.45, ease: "easeOut" }}
//     >
//       <motion.div
//         className="info-work-inner-content"
//         style={{ width: "100%", display: "flex", height: "100%" }}
// initial={{ opacity: 0 }}
// animate={{ opacity: 1 }}
// exit={{ opacity: 0 }}
// transition={{ duration: 0.2, delay: 0.2 }}
//       >
//         <div className="container-infoWork">
//           <img
//             className="info-work-image-logo"
//             src={works?.logo || ""}
//             alt={works?.title || "Proyecto"}
//           />
//           <p>{works?.proyectFor}</p>
//           <div className="container-infoWork-texts">
//             <div
//               className="info-work-description-1"
//               dangerouslySetInnerHTML={{
//                 __html: works?.description || works?.longDescription || "",
//               }}
//             />
//             <hr className="hrWork" />
//             <div className="info-work-title-tec">
//               <h4 className="">Tecnologías utilizadas</h4>
// <div className="technologies-container">
//   {works?.technologies?.map((tech, index) => (
//     <p key={index} className="tag-tec">
//       {tech}
//     </p>
//   ))}
// </div>
//             </div>
//           </div>
//         </div>
// <motion.div
//   initial={{ opacity: 0 }}
//   animate={{ opacity: 1 }}
//   exit={{ opacity: 0, width: 0 }}
//   transition={{ duration: 0.2, delay: 0.35 }}
//   className={`info-work-image-container ${works?.device === "App" ? "container-gif-phone" : "container-gif"}`}
// >
//   {works?.device === "App" ? (
//     <video
//       autoPlay
//       loop
//       muted
//       playsInline
//       className="info-work-imagePhone"
//       src={works?.videoWork || ""}
//     />
//   ) : (
//     <video
//       autoPlay
//       loop
//       muted
//       playsInline
//       className="info-work-image"
//       src={works?.videoWork || ""}
//     />
//   )}
// </motion.div>
//       </motion.div>
// <div className="button-seemore">
//   <Link to={`/work/${works?.id}`}>Ver proyecto</Link>
// </div>
//     </motion.article>
//   );
// }

export default function InfoWorkContainer({ works }) {
  const [width, setWidth] = useState(window.innerWidth);

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }

  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  const isMobile = width <= 899;

  const selectedWork = WORKS.find((item) => item.id === works?.id);
  const projectLink = selectedWork?.link || "#";
  return (
    <article
      className={
        !isMobile && !isIOS
          ? "container-infoContainer"
          : !isIOS
            ? "container-infoContainer-phone"
            : isIOS && !isMobile
              ? "container-infoContainer-Ios"
              : "container-infoContainer-Ios-phone"
      }
    >
      {!isMobile ? (
        <motion.div
          className="cont-infoContainer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2, delay: 0.2 }}
        >
          <div className="header-contentWork">
            <div className="logo-container-work">
              <img src={works?.logo || ""} alt={works?.title} />
            </div>
            <span className="proyectFor">
              {works?.proyectFor || ""} / {works?.year}
            </span>
          </div>
          <div
            className="info-work-description-1"
            dangerouslySetInnerHTML={{
              __html: works?.description || "",
            }}
          />
          <div className="technologies-container">
            {works?.technologies?.map((tech, index) => (
              <p key={index} className="tag-tec">
                {tech}
              </p>
            ))}
          </div>
        </motion.div>
      ) : null}

      <div className="container-videoWork">
        <div
          className={`info-work-image-container ${works?.device === "App" ? "container-gif-phone" : "container-gif"}`}
        >
          {works?.device === "App" ? (
            <video
              autoPlay
              loop
              muted
              playsInline
              className="info-work-imagePhone"
              src={works?.videoWork || ""}
            />
          ) : (
            <video
              autoPlay
              loop
              muted
              playsInline
              className="info-work-image"
              src={works?.videoWork || ""}
            />
          )}
        </div>
      </div>
      <div className="button-seemore">
        <Link to={`/work/${works?.id}`}>Ver proyecto</Link>
      </div>
    </article>
  );
}
