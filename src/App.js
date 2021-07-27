import "./App.css";
import EightBall from "./EightBall";
import answers from "./defaultAnswers";

function App() {
  return <EightBall answers={answers} />;
}

export default App;
