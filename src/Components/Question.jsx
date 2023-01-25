import React, { Component } from "react";

export class Question extends Component {
  render() {
    const {
      var1,
      var2,
      handleSubmit,
      handleChange,
      answer,
      response,
      isActive,
    } = this.props;


    return (
      <div>
        <form onSubmit={handleSubmit}>
          <h1 className="question">
            {var1} x {var2}
          </h1>
          <input
            className="answer"
            onChange={handleChange}
            value={answer}
            placeholder="Provide your Answer"
            disabled={!isActive}
            controlled="true"
          ></input>
          <input className="submit" type="submit" value="SUBMIT" />
          <span
            className={`response   ${response === "Wrong answer" || response ==="Stopped!" ? "warning" : "correct"} `}
          >
            {response}
          </span>
        </form>
      </div>
    );
  }
}

export default Question;
