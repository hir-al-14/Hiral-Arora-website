import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

function App() {
  return (
    <div className="site">
      <section className="intro-world">
        <div className="intro-content">
          <Navbar />
          <Hero />
        </div>
      </section>
    </div>
  );
}

export default App;