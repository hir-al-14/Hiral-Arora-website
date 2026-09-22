import { useState } from "react";

import Navbar from "./components/Navbar";
import Rain from "./components/Rain";

function App() {
  const [rainEnabled, setRainEnabled] = useState(true);

  return (
    <div className="site">
      {rainEnabled && <Rain />}

      <div className="page-content">
        <Navbar
          rainEnabled={rainEnabled}
          setRainEnabled={setRainEnabled}
        />
      </div>
    </div>
  );
}

export default App;