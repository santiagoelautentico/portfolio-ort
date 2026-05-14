import { WORKS } from "../works.js";
import { useState, useEffect, useRef } from "react";
import { FaBehanceSquare } from "react-icons/fa";
import { FaGithubAlt } from "react-icons/fa";
import { FaWifi } from "react-icons/fa";

import {
  motion,
  useScroll,
  useMotionValue,
  useMotionValueEvent,
  animate,
} from "motion/react";
export default function WorkDetail() {
  const workId = window.location.pathname.split("/").pop();

  const work = WORKS[workId - 1];

  const ref = useRef(null);
  const { scrollXProgress } = useScroll({ container: ref });
  const maskImage = useMotionValue(
    `linear-gradient(90deg, #000, #000 0%, #000 80%, #0000)`,
  );

  useMotionValueEvent(scrollXProgress, "change", (value) => {
    if (value === 0) {
      animate(
        maskImage,
        `linear-gradient(90deg, #000, #000 0%, #000 80%, #0000)`,
      );
    } else if (value === 1) {
      animate(
        maskImage,
        `linear-gradient(90deg, #0000, #000 20%, #000 100%, #000)`,
      );
    } else {
      animate(
        maskImage,
        `linear-gradient(90deg, #0000, #000 20%, #000 80%, #0000)`,
      );
    }
  });

  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  console.log(work);

  return (
    <>
      <section className="work-detail-section">
        {/* <h1>{WORKS[workId - 1].title}</h1> */}
        <div className={`${work.title}-container logo-container`}>
          <img
            src={`/${work.title}-LOGO.svg`}
            alt={work.title}
            className="logo-work"
          />
        </div>
        <h2 className="title-work">{work.title}</h2>
        <hr />
        {isMobile ? (
          <article className="info-work-container-phone">
            <dl className="cateogories-dt-phone">
              <dt>CATEGORIA:</dt>
              <dd>{work.category}</dd>
              <dt>AÑO:</dt>
              <dd>{work.year}</dd>
              <dt>ACADÉMICO:</dt>
              <dd>
                {work.academic ? "Proyecto de la ORT" : "Proyecto personal"}
              </dd>
              <dt>TECH STACK:</dt>
              <dd>{work.technologies.join(" - ")}</dd>
            </dl>
            <div
              className="description-deatail-phone description-deatail"
              dangerouslySetInnerHTML={{ __html: work.longDescription }}
            />
          </article>
        ) : (
          <article className="info-work-container">
            <dl className="cateogories-dt">
              <dt>CATEGORIA:</dt>
              <dd>{work.category}</dd>
              <dt>AÑO:</dt>
              <dd>{work.year}</dd>
              <dt>ACADÉMICO:</dt>
              <dd>
                {work.academic ? "Proyecto de la ORT" : "Proyecto personal"}
              </dd>
              <dt>TECH STACK:</dt>
              <dd>{work.technologies.join(" - ")}</dd>
              <dt className="icons">
                {work.behance ? (
                  <a href={work.behance}>
                    <FaBehanceSquare />
                  </a>
                ) : (
                  ""
                )}
                {work.gitHub ? (
                  <a href={work.gitHub}>
                    <FaGithubAlt />
                  </a>
                ) : (
                  ""
                )}

                {work.website ? (
                  <a href={work.website}>
                    <FaWifi />
                  </a>
                ) : (
                  ""
                )}
              </dt>
            </dl>
            <div
              className="description-deatail"
              dangerouslySetInnerHTML={{ __html: work.longDescription }}
            />
          </article>
        )}
        <hr className="hr-work" />
        <h2 className="title-work">Imagenes</h2>
        <div className="phone-photos-container">
          <motion.ul
            ref={ref}
            className="phone-photos-ul"
            style={{ maskImage, overflowX: "scroll", display: "flex" }}
          >
            {work.phonePhotos.map((phone, i) => (
              <li key={i}>
                <img
                  src={`/${work.title}/${phone}`}
                  alt={`${work.title} ${i + 1}`}
                />
              </li>
            ))}
          </motion.ul>
        </div>
      </section>
      <ul>
        {work.browserPhotos.map((browser, i) => (
          <li key={i}>
            <img
              className="browserPhoto"
              src={`/${work.title}/${browser}`}
              alt={`${work.title} ${i + 1}`}
            />
          </li>
        ))}
      </ul>
    </>
  );
}
