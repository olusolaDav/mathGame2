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
          <h1>
            {var1} x {var2}
          </h1>
          <input
            onChange={handleChange}
            value={answer}
            placeholder="Answer"
            disabled={!isActive}
            controlled="true"
          ></input>
          <input type="submit" value="SUBMIT" />
          <span>{response}</span>
        </form>
      </div>
    );
  }
}

export default Question;
