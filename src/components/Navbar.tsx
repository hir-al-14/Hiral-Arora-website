import ThemeToggle from "./ThemeToggle";

type NavbarProps = {
  rainEnabled: boolean;
  setRainEnabled: (enabled: boolean) => void;
};

function Navbar({
  rainEnabled,
  setRainEnabled,
}: NavbarProps) {
  return (
    <header className="navbar">
      <a className="navbar-logo" href="/">
        Hiral Arora <span>♡</span>
      </a>

      <nav className="navbar-links">
        <a href="experience">experience</a>
        <a href="projects">projects</a>
        <a href="hardware">hardware</a>
        <a href="about">about me</a>
      </nav>

      <div className="navbar-controls">
        <button
          className="rain-toggle"
          onClick={() => setRainEnabled(!rainEnabled)}
          aria-pressed={rainEnabled}
          aria-label="Toggle rain"
        >
          ☂
        </button>

        <ThemeToggle />
      </div>
    </header>
  );
}

export default Navbar;
