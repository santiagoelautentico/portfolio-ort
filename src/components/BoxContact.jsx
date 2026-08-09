import { FaBehanceSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function BoxContact({ mail, behance, linkedin }) {
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

  const isMobile = width <= 768;

  return (
    <Link
      className="box-contact-container"
      to={
        mail
          ? `mailto:${mail.mail}`
          : behance
            ? `https://${behance.behance}`
            : linkedin
              ? `https://${linkedin.linkedin}`
              : "#"
      }
      target={mail ? "_self" : "_blank"}
      rel={mail ? "" : "noopener noreferrer"}
    >
      <div>
        <div className="icon-box-contact">
          {linkedin ? (
            <FaLinkedin size={32} color="#F9CA0B" />
          ) : behance ? (
            <FaBehanceSquare size={32} color="#F9CA0B" />
          ) : mail ? (
            <SiGmail size={32} color="#F9CA0B" />
          ) : null}
        </div>
      </div>
      {mail ? (
        <h4 className="title-box-contact">
          {isMobile ? (
            <p>Correo</p>
          ) : (
            <a href={`mailto:${mail.mail}`}>{mail.mail}</a>
          )}
        </h4>
      ) : behance ? (
        <h4 className="title-box-contact">
          {isMobile ? <p>Behance</p> : <p>{behance.behance}</p>}
        </h4>
      ) : linkedin ? (
        <h4 className="title-box-contact">
          {isMobile ? <p>LinkedIn</p> : <p>{linkedin.linkedin}</p>}
        </h4>
      ) : null}
    </Link>
  );
}
