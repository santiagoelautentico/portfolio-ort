// export default function BackgroundBorder({
//   index,
//   title,
//   device,
//   description,
//   icon,
//   proyectFor,
//   technologies,
// }) {
//   return (
//     <article
//       className={`${title} card-work-container`}
//       style={{
//         top: `${index * 30}px`, // más separación vertical
//         width: `calc(65vw + ${index * 30}px)`, // usá vw en vez de %
//         zIndex: index,
//       }}
//     >
//       <div className="mockup-image-container">
//         <img
//           className={`${title}-mockup mockup-image-device`}
//           src={`/${title}-mockup.png`}
//           alt={`${title} Mockup`}
//         />
//       </div>
//       <div className="card-work-content">
//         <div className="card-work-header-container">
//           <h2 className="card-work-title">
//             {title} <span className="card-work-device">{device}</span>
//           </h2>
//           <img className="card-work-icon" src={icon} alt={`${title} Icon`} />
//         </div>
//         <div className="card-work-description">
//           <h4 className="card-work-description-title">Detalles</h4>
//           <p className="card-work-description-text">{description}</p>
//         </div>
//         <div className="card-work-technologies-container">
//           <h4>Tecnologías</h4>
//           <div className="card-work-technologies">
//             <ul>
//               {technologies.map((tech, index) => (
//                 <li key={index}>
//                   <img src={`/${tech}Icon.svg`} alt={`${tech} Icon`} />
//                 </li>
//               ))}
//             </ul>
//             <div className="card-work-proyect-for">
//               <p>{proyectFor}</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </article>
//   );
// }

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
    <article className={`item ${title}`}>
      <div className="mockup-image-container">
        <img
          className={`${title}-mockup mockup-image-device`}
          src={`/${title}-mockup.png`}
          alt={`${title} Mockup`}
        />
      </div>
      <div className="card-work-content">
        <div className="card-work-header-container">
          <h2 className="card-work-title">
            {title} <span className="card-work-device">{device}</span>
          </h2>
          <img className="card-work-icon" src={icon} alt={`${title} Icon`} />
        </div>
        <div className="card-work-description">
          <h4 className="card-work-description-title">Detalles</h4>
          <p className="card-work-description-text">{description}</p>
        </div>
        <div className="card-work-technologies-container">
          <h4>Tecnologías</h4>
          <div className="card-work-technologies">
            <ul>
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
