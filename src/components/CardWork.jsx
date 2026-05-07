export default function CardWork({
  index,
  title,
  device,
  description,
  icon,
  proyectFor,
  technologies,
}) {
  return (
    <article className={`card ${title}`}>
      <div className="mockup-bg">
        <img
          src={`/${title}-mockup.png`}
          className={`${title}-mockup img-mockup`}
          alt={title}
        />
      </div>
      <div className="content-container">
        <div className="header-container">
          <h2 className="title-card">
            {title} <span>{device}</span>
          </h2>
          <img src={icon} className="icon-card" alt={`${title} icon`} />
        </div>
        <div className="description-container">
          <h4>Detalles</h4>
          <p>{description}</p>
        </div>
        <div className="card-work-technologies-container">
          <h4>Tecnologías</h4>
          <div className="content-techologies">
            <ul className="card-work-technologies">
              {technologies.map((tech, index) => (
                <li key={index}>
                  <img src={`/${tech}Icon.svg`} alt={`${tech} Icon`} />
                </li>
              ))}
            </ul>
            <div className="card-work-proyect-for">
              <p>{proyectFor}</p>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
