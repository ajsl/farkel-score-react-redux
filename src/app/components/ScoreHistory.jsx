import React, { Component } from "react";

export class ScoreHistory extends Component {
  render() {
    const { scoreHistory } = this.props;
    var scoreList = "";

    console.log(scoreHistory);

    if (scoreHistory) {
      scoreList = scoreHistory.map((score, index) => (
        <li key={index}>{score + " points"}</li>
      ));
    }

    return <ul>{scoreList}</ul>
  }
}
