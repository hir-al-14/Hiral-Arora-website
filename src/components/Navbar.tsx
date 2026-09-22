function Navbar() {
  return (
    <header className="navbar">
      <a className="navbar-logo" href="/">
        Hiral Arora <span>♡</span>
      </a>

      <nav className="navbar-links">
        <a href="#experience">experience</a>
        <a href="#projects">projects</a>
        <a href="#hardware">hardware</a>
        <a href="#about">about me</a>
      </nav>
    </header>
  );
}

export default Navbar;