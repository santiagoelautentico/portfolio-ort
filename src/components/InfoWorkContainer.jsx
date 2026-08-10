import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { WORKS } from "../works.js";

export default function InfoWorkContainer({ works }) {
  const selectedWork = WORKS.find((item) => item.id === works?.id);
  const projectLink = selectedWork?.link || "#";

  return (
    <motion.article
      className="info-work-container-article"
      style={{ marginInline: "auto", overflowX: "hidden" }}
      initial={{ width: "0%" }}
      animate={{ width: "100%" }}
      exit={{ width: "0%" }}
      transition={{ duration: 0.45, ease: "easeOut" }}
    >
      <motion.div
        className="info-work-inner-content"
        style={{ width: "100%", display: "flex", height: "100%" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2, delay: 0.2 }}
      >
        <div className="container-infoWork">
          <img
            className="info-work-image-logo"
            src={works?.logo || ""}
            alt={works?.title || "Proyecto"}
          />
          <p>{works?.proyectFor}</p>
          <div className="container-infoWork-texts">
            <div
              className="info-work-description-1"
              dangerouslySetInnerHTML={{
                __html: works?.description || works?.longDescription || "",
              }}
            />
            <hr className="hrWork" />
            <div className="info-work-title-tec">
              <h4 className="">Tecnologías utilizadas</h4>
              <div className="technologies-container">
                {works?.technologies?.map((tech, index) => (
                  <p key={index} className="tag-tec">
                    {tech}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, width: 0 }}
          transition={{ duration: 0.2, delay: 0.35 }}
          className={`info-work-image-container ${works?.device === "App" ? "container-gif-phone" : "container-gif"}`}
        >
          {works?.device === "App" ? (
            <video
              autoPlay
              loop
              muted
              playsInline
              className="info-work-imagePhone"
            >
              {works?.videoWorkMov && (
                <source src={works.videoWorkMov} type="video/quicktime" />
              )}
              {works?.videoWork && (
                <source src={works.videoWork} type="video/webm" />
              )}
            </video>
          ) : (
            <video
              autoPlay
              loop
              muted
              playsInline
              className="info-work-image"
            >
              {works?.videoWorkMov && (
                <source src={works.videoWorkMov} type="video/quicktime" />
              )}
              {works?.videoWork && (
                <source src={works.videoWork} type="video/webm" />
              )}
            </video>
          )}
        </motion.div>
      </motion.div>
      <div className="button-seemore">
        <Link to={`/work/${works?.id}`}>Ver proyecto</Link>
      </div>
    </motion.article>
  );
}