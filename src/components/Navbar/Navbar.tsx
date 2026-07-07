import "./Navbar.scss";

function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar__container">
        <a className="navbar__logo" href="#home">
          Ali
        </a>

        <nav className="navbar__links">
          <a href="#projects">Projects</a>
          <a href="#creative">Creative</a>
          <a href="#skills">Skills</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>

        <a className="navbar__button" href="#contact">
          Hire Me
        </a>
      </div>
    </header>
  );
}

export default Navbar;