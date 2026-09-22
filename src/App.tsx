import { useEffect } from "react";

function App() {
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", "dark");
  }, []);

  return (
    <div className="site">
      <div className="page-content">
        <p>Hiral Arora</p>
      </div>
    </div>
  );
}

export default App;