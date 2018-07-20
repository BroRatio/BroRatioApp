import React, { Component } from "react";
import "./Score.css";

export default class Score extends Component {
  state = {
    results: [],
    male: 0,
    female: 0,
    age: null
  };
  render() {
    return (
      <div className="container">
        <p className="score">
          <span>Male: {this.state.male}</span>
          <span>|</span>
          <span>Female: {this.state.female}</span>
        </p>
        <p className="message">Age: {this.state.age}</p>
      </div>
    );
  }
}

// const Score = props => (
//   <div className="container">
//     <p className="score">
//       <span>Male: {props.male}</span>
//       <span>|</span>
//       <span>Female: {props.female}</span>
//     </p>
//     <p className="message">Mood: {props.mood}</p>
//   </div>
// );

// export default Score;
