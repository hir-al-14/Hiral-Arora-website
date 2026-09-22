import { useEffect } from "react";
import Navbar from "./components/Navbar";

function App() {
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", "dark");
  }, []);

  return (
    <div className="site">
      <div className="page-content">
        <Navbar />
      </div>
    </div>
  );
}

export default App;