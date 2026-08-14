import { AnimatePresence, motion } from "framer-motion";
import InfoWorkContainer from "../components/InfoWorkContainer.jsx";
import SelectWorkCard from "../components/SelectWorkCard.jsx";
import { WORKS } from "../works.js";
import { useState } from "react";

export default function Works() {
  const [selectedId, setSelectedId] = useState(null);

  return (
    <section className="container-works">
      <AnimatePresence mode="wait">
        <motion.article
          key={selectedId ?? "empty"}
          className="article-infoWork"
          initial={{ clipPath: "inset(0% 50% 0% 50%)" }}
          animate={{ clipPath: "inset(0% 0% 0% 0%)" }}
          exit={{ clipPath: "inset(0% 50% 0% 50%)" }}
          transition={{ duration: 0.45, ease: "easeOut" }}
        >
          {selectedId != null ? (
            <InfoWorkContainer works={WORKS.find((w) => w.id === selectedId)} />
          ) : (
            <p>selecciona paquete</p>
          )}
        </motion.article>
      </AnimatePresence>
      <article className="work2">
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