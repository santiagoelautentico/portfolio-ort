import { WORKS } from "../works.js";
import SelectWorkCard from "../components/SelectWorkCard.jsx";
import { useState } from "react";
import InfoWorkContainer from "../components/infoWorkContainer.jsx";
import { AnimatePresence } from "motion/react"; // 👈 1. nuevo import

export default function Works() {
  const [selectedId, setSelectedId] = useState(null);

  return (
    <section className="work-container">
      <AnimatePresence mode="wait">
        {selectedId != null ? (
          <InfoWorkContainer
            key={selectedId}
            works={WORKS.find((w) => w.id === selectedId)}
          />
        ) : (
          <div key="empty" className="work-select-container-empty"> 
            <p>Selecciona un proyecto para ver más información</p>
          </div>
        )}
      </AnimatePresence>

      <article className="work-select-container">
        {WORKS.map((works) => (
          <SelectWorkCard
            key={works.id}
            works={works}
            selected={works.id === selectedId}
            onSelect={() => setSelectedId(works.id)}
          />
        ))}
      </article>
    </section>
  );
}