import React, { useState, useEffect } from "react";
import { stages} from "../util/data";
import Question from "./Question";

const Level = () => {
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(48);
  const [level, setLevel] = useState(10);
  const [answer, setAnswer] = useState(null);
  const [response, setResponse] = useState("Click Start to get Started");
  const [second, setSecond] = useState(15);
  const [isActive, setIsActive] = useState(false);
  const current =  stages[index];

  const start = () => {
    setIsActive(!isActive);
    setResponse("");
  };
  const stop = () => {
    setIsActive(!isActive);
    setResponse("Stopped");
  };

  const reset = () => {
    setSecond(15);
    setIsActive(false);
    setAnswer(0);
    setIndex(0);
    setScore(0);
    setResponse("Click Start to get Started");
    setLevel("1");
  };

  useEffect(() => {
     if (second === 0) {
    setScore(score -1)
    setSecond(15)
  }

if (score === 50){
  setLevel(level + 1)
  setScore(0)
}

    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setSecond((second) => second - 1);
      }, 1000);
    } else if (!isActive && second !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);

 
  }, [isActive, second, score, level]);

  const handleChange = (e) => {
    setAnswer(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(current.a * current.b, answer);
    if (parseInt(answer) === current.a * current.b) {
      setResponse("Correct!");
      setScore(score + 1);
      setSecond(15)
      setIndex(index + 1);
     // setLevel(index + 1); 
      setAnswer("");
    } else {
      setResponse("Wrong answer");
      setAnswer("")
      setScore(score - 1)
      setSecond(15)

    }
  };



  return (
    <div>
      <input type="button" value="Start" onClick={start} />

      <input type="button" value="Stop" onClick={stop} />
      <input type="button" value="Restart" onClick={reset} />
      <h2>Time: {second}s</h2>
      <h2>Level: {level} </h2>
      <h2>Score: {score} </h2>
      <Question
        var1={current.a}
        var2={current.b}
        handleSubmit={handleSubmit}
        answer={answer}
        handleChange={handleChange}
        response={response}
        isActive={isActive}
      />
    </div>
  );
};

export default Level;
