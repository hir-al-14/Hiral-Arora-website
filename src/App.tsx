import Navbar from "./components/Navbar";
import Rain from "./components/Rain";

function App() {
  return (
    <div className="site">
      <Rain />

      <div className="page-content">
        <Navbar />
      </div>
    </div>
  );
}

export default App;