import React, { Component } from "react";
import { Fragment } from "react";

export class ScoreHistory extends Component {
  constructor(props) {
    super(props);

    this.state = {
      amendScore: false,
      amendScoreId: 0,
      oldScore: 0,
      newScore: 0,
      player: "",
    };

    this.onClickAmend = this.onClickAmend.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ newScore: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onSubmit(this.state.newScore, this.state.oldScore, this.state.amendScoreId, this.props.player);
    this.setState({
      amendScore: false,
      amendScoreId: 0,
      oldScore: 0,
      newScore: 0,
      currentPlayer: 0,
    });
  }

  onClickAmend = (index, score) => {
    console.log(index);
    console.log(score);

    this.setState(
      {
        amendScore: true,
        amendScoreId: index,
        oldScore: score,
      },
      () => console.log(this.state)
    );
    // console.log(this.state)
  };

  render() {
    const { player } = this.props;
    var scoreList = "";

    // console.log(scoreHistory);

    if (player.scoreHistory) {
      scoreList = player.scoreHistory.map((score, index) => (
        <div className="score-history-item" key={index}>
          <li>{score + " points"}</li>
          <button
            onClick={() => this.onClickAmend(index, score)}
            className="score-history-button"
          >
            <span className="iconify" data-icon="fa:close" data-inline="false"></span> change
          </button>
          {this.state.amendScore && this.state.amendScoreId === index ? (
            <form onSubmit={this.handleSubmit}>
              <input onChange={(e) => this.handleChange(e)} type="number"></input>{" "}
              <button className="button-main" type="submit">Change</button>{" "}
            </form>
          ) : (
            ""
          )}
        </div>
      ));
    }

    return <ul>{scoreList}</ul>;
  }
}
