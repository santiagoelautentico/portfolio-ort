import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { motion, AnimatePresence } from "framer-motion";

export default function NavbarMobile() {
  const [active, setActive] = useState(0);
  const [navClass, setNavClass] = useState("navbarMobile");

  const location = useLocation();

  const [width, setWidth] = useState(window.innerWidth);
  const isHome = location.pathname === "/";
  const isDetail = location.pathname.startsWith("/work/");
  const isWorks = location.pathname.startsWith("/works");
  const isAbout = location.pathname.startsWith("/about");
  const isContact = location.pathname.startsWith("/contact");

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

  function openMenu() {
    setNavClass("navbarMobile-active"); 
    setActive(1);
  }

  function closeMenu() {
    setActive(0);
  }

  return (
    <nav className={navClass}>
      <AnimatePresence
        mode="wait"
        onExitComplete={() => {
          if (active === 0) setNavClass("navbarMobile");
        }}
      >
        {active === 1 ? (
          <motion.ul
            key="menu"
            initial={{ x: "-100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "-100%", opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="nav-linksMobile"
          >
            <li className={isHome ? "linkActiveNav" : ""}>
              <Link to="/" onClick={closeMenu}>
                Inicio
              </Link>
            </li>
            <li className={isWorks ? "linkActiveNav" : ""}>
              <Link to="/works" onClick={closeMenu}>
                Trabajos
              </Link>
            </li>
            <li className={isAbout ? "linkActiveNav" : ""}>
              <Link to="/about" onClick={closeMenu}>
                Sobre mi
              </Link>
            </li>
            <li className={isContact ? "linkActiveNav" : ""}>
              <Link to="/contact" onClick={closeMenu}>
                Contacto
              </Link>
            </li>
          </motion.ul>
        ) : (
          <div className="hamburguer" onClick={openMenu}>
            <GiHamburgerMenu size={32} />
          </div>
        )}
      </AnimatePresence>
    </nav>
  );
}

//git