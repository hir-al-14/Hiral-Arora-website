import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Rain from "./components/Rain";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Research from "./components/Research";
import Hardware from "./components/Hardware";

import Organizations from "./components/Organizations";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="site" id="top">
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
      <Research />
      <Hardware />
      <Organizations />
      <Footer />
    </div>
  );
}

export default App;
