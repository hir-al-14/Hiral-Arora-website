import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Rain from "./components/Rain";
import About from "./components/About";
import Experience from "./components/Experience";

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
    </div>
  );
}

export default App;