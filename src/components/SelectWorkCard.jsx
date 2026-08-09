export default function SelectWorkCard({ works, selected, onSelect }) {
  return (
    <div
      className={`select-work-container ${selected ? "select-work-containerSelected" : ""}`}
      onClick={onSelect}
    >
      <div
        className={`icon-container-works ${selected ? "icon-container-worksSelected" : ""}`}
      >
        {selected ? (
          <img className="icon-works" src={works.iconDark} alt={works.title} />
        ) : (
          <img className="icon-works" src={works.icon} alt={works.title} />
        )}
      </div>
      <p className={`title-works ${selected ? "title-worksSelected" : ""}`}>
        {works.title}
      </p>
    </div>
  );
}
