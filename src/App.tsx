import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Rain from "./components/Rain";

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
          {/* we'll build the photo wall here next */}
        </div>
      </section>
    </div>
  );
}

export default App;