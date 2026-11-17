
import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <nav className="navbar">
      <a href="#inicio" className="logo-link" onClick={closeMenu}>
        <span className="navbar-logo-text">Kamila Carvalho</span>
      </a>

      <button
        className={`menu-toggle ${menuOpen ? "active" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
        aria-expanded={menuOpen}
      >
        <span />
        <span />
        <span />
      </button>

      <div className={`nav-links ${menuOpen ? "open" : ""}`}>
        <a href="#inicio" onClick={closeMenu}>Início</a>
        <a href="#projetos" onClick={closeMenu}>Projetos</a>
        <a href="#sobre" onClick={closeMenu}>Sobre</a>
        <a href="#servicos" onClick={closeMenu}>Serviços</a>
        <a href="#contato" onClick={closeMenu}>Contato</a>
      </div>

      <a href="#contato" className="nav-button" onClick={closeMenu}>
        Vamos conversar
      </a>
    </nav>
  );
}

export default Navbar;
