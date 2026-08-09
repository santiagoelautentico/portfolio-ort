// pages/Contact.jsx
import { SiGmail } from "react-icons/si";
import { FaBehanceSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
import BoxContact from "../components/BoxContact";

export default function Contact() {
  return (
    <section className="contact-container">
      <article className="contact-article">
        <div className="header-contact">
          <div className="img-container-contact">
            <img className="img-contact" src="/contactPicture.webp" alt="Contact" />
          </div>
          <div className="contact-title">
            <h2>CON</h2>
            <h2>TAC</h2>
            <h2>TO</h2>
          </div>
        </div>
        <div className="contact-content">
          <BoxContact mail={{ mail: "s.urbinazeballos@gmail.com" }} />
          <BoxContact behance={{ behance: "behance.net/santiagourbina" }} />
          <BoxContact linkedin={{ linkedin: "linkedin.com/in/santiago-urbina/" }} />
        </div>
      </article>
    </section>
  );
}
