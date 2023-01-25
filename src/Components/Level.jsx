import React, { useState, useEffect } from "react";
import { stages} from "../util/data";
import Question from "./Question";

const Level = () => {
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [level, setLevel] = useState(1);
  const [answer, setAnswer] = useState(null);
  const [response, setResponse] = useState("Click Start to get Started!");
  const [second, setSecond] = useState(15);
  const [isActive, setIsActive] = useState(false);
  const current =  stages[index];

  const start = () => {
    setIsActive(!isActive);
    setResponse("");
  };
  const stop = () => {
    setIsActive(!isActive);
    setResponse("Stopped!");
  };

  const reset = () => {
    setSecond(15);
    setIsActive(false);
    setAnswer(0);
    setIndex(0);
    setScore(0);
    setResponse("Click Start to get Started!");
    setLevel(1);
  };

  useEffect(() => {
     if (second === 0) {
    setScore(score -1)
    setSecond(15)
  }

if (score === 20){
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
      <input className="start" type="button" value="Start" onClick={start} />

      <input className="stop" type="button" value="Stop" onClick={stop} />
      <input
        className="restart"
        type="button"
        value="Restart"
        onClick={reset}
      />
      <h2 className={`second ${second <= 5 ? "warning" : null}`}>
        Time: {second}s
      </h2>
      <h2>
        Level: <span className="level">{level}</span>{" "}
      </h2>
      <h2>
        Score:{" "}
        <span className={`${score <= 0 ? "warning" : "score"}`}>{score}</span>{" "}
      </h2>
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
