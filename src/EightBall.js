import { useState } from "react";
import "./EightBall.css";

function EightBall(props) {
  const [message, setMessage] = useState("Think of a question");
  const [color, setColor] = useState("black");
  function handleClick() {
    const randomAnswer =
      props.answers[Math.floor(Math.random() * props.answers.length)];
    setMessage(randomAnswer.msg);
    setColor(randomAnswer.color);
  }
  return (
    <>
      <div
        className="EightBall"
        style={{ backgroundColor: color }}
        onClick={handleClick}
      >
        <div style={{ backgroundColor: "white" }}>{message}</div>
      </div>
    </>
  );
}

export default EightBall;
