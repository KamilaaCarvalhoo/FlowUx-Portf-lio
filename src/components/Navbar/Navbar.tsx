function Navbar() {
  return (
    <nav className="navbar">
      <a href="#inicio" className="logo-link">
        <span className="navbar-logo-text">Kamila Carvalho</span>
      </a>

      <div className="nav-links">
        <a href="#inicio">Início</a>
        <a href="#projetos">Projetos</a>
        <a href="#sobre">Sobre</a>
        <a href="#servicos">Serviços</a>
        <a href="#contato">Contato</a>
      </div>

      <a href="#contato" className="nav-button">
        Vamos conversar
      </a>
    </nav>
  );
}

export default Navbar;