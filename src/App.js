import "./App.css";
import Shop from "./Component/Shop/Shop";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import Navbar from "./Component/Navbar/Navbar";
import QuestionAns from "./Component/QuestionAns/QuestionAns";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Shop></Shop>
      <QuestionAns></QuestionAns>
    </div>
  );
}

export default App;
