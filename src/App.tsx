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
    </div>
  );
}

export default App;