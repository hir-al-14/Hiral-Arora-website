import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Hardware from "./components/Hardware";
import About from "./components/About";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="site">
      <div className="page-content">
        <Navbar />

        <main>
          <Hero />
          <Experience />
          <Projects />
          <Hardware />
          <About />
        </main>

        <Footer />
      </div>
    </div>
  );
}

export default App;