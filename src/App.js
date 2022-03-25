import "./App.css";
import Shop from "./Component/Shop/Shop";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import Navbar from "./Component/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Shop></Shop>
    </div>
  );
}

export default App;
