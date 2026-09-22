import { useState } from "react";

import Navbar from "./components/Navbar";
import Rain from "./components/Rain";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Projects from "./components/Projects";

function App() {
  const [rainEnabled, setRainEnabled] =
    useState(true);

  return (
    <div className="site">
      {rainEnabled && <Rain />}

      <div className="page-content">
        <Navbar
          rainEnabled={rainEnabled}
          setRainEnabled={setRainEnabled}
        />

        <main>
          <Hero />
          <Experience />
          <Projects />
        </main>
      </div>
    </div>
  );
}

export default App;