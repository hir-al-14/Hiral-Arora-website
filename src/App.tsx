import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Rain from "./components/Rain";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="site">
      <section className="intro-world">
        <Rain />

        <div className="intro-content">
          <Navbar />
          <Hero />
        </div>
      </section>

      <section className="gallery-world">
        <div className="gallery-content">
          <About />
        </div>
      </section>

      <Experience />
      <Projects />
    </div>
  );
}

export default App;