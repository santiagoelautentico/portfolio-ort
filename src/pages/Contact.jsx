// pages/Contact.jsx
import { SiGmail } from "react-icons/si";
import { FaBehanceSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
export default function Contact() {
  return (
    <section className="section-contact">
      <article className="card-contact">
        <div className="card-picture-container">
          <img src="/fotoingles.jpg" alt="profile-pic" />
        </div>
        <div className="content-contactCard">
          <h2 className="title-contact">Datos de contacto</h2>
          <hr className="hr-contact" />
          <ul className="ul-contact">
            <li className="li-contact-container">
              <p>Para contrataciones o consultas a este mail</p>
              <div className="label-contact">
                <SiGmail color="#202020" />
                <span>s.urbinazeballos@gmail.com</span>
              </div>
            </li>
            <li className="li-contact-container">
              <div className="label-contact">
                <FaLinkedin color="#202020" />
                <Link href="https://www.linkedin.com/in/santiago-urbina/">linkedin.com/in/santiago-urbina/</Link>
              </div>
            </li>
            <li className="li-contact-container">
              <p>Sigueme en Behance para ver más proyectos</p>
              <div className="label-contact">
                <FaBehanceSquare color="#202020" />
                <span>s.urbinazeballos@gmail.com</span>
              </div>
            </li>
          </ul>
        </div>
      </article>
    </section>
  );
}
