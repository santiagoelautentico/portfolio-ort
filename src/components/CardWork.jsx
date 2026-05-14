import { Link } from "react-router-dom";
import { WORKS } from "../works";

export default function CardWork({
  id,
  index,
  title,
  device,
  description,
  icon,
  proyectFor,
  technologies,
}) {
  return (
    <Link to={`/work/${id}`} className="card-work">
      <div className="wallet-container">
        <div className="wallet-content">
          <h2 className="title-wallet">{title}</h2>
          <hr className="hr-wallet" />
          <p className="description-wallet">{description}</p>
          <div>
            {/* {WORKS.map((tech) 0>)} */}
          </div>
        </div>
      </div>
      <div className={`${title}-background-mockup background-mockup`} />
      <div className={`mockup-wallet-container ${title}-mockup-card`}>
        <img
          src={`${title}/1mockup.png`}
          className="mockup-wallet"
          alt={`${title}-mockup`}
        />
      </div>
      <div className="blur" />
    </Link>
  );
}
