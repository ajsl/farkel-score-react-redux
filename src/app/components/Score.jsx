import React, { Component, Fragment } from "react";

import { Prompt } from "react-router-dom";

class Score extends Component {
  constructor(props) {
    super(props);

    this.state = {
      score: "",
      currentPlayer: 0,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ score: e.target.value});
  }

  checkScore(score, player) {
    console.log(player.score);
    const winningScore = 10000;
    const valueOfFirstScore = 500;
    let newScore = +player.score + +score;
    if (newScore < valueOfFirstScore) {
      alert("must roll at least 500 to begin scoring");
      return 0;
    } else {
      return newScore >= winningScore
        ? alert(player.name + " scored: " + newScore + " and wins the game!!!")
        : newScore;
    }
  }

  updateCurrentPlayer(player) {
    let updatedPlayer = {
      id: player.id,
      name: player.name,
      score: this.checkScore(+this.state.score, player),
    };
    console.log(updatedPlayer);
    return updatedPlayer;
  }

  handleSubmit(e) {
    e.preventDefault();
    const data = this.updateCurrentPlayer(
      this.props.players[this.props.nextPlayerRoll - 1]
    );

    this.props.onSubmit(data, this.props.players.length);

    this.setState({
      score: "",
      secondRoll: false,
    });
  }

  render() {
    const { players, nextPlayerRoll } = this.props;

    if (players.length >= 1) {
      return (
        <Fragment>
          <Prompt
            when={players.length >= 1}
            message={(location) => "Are you sure you want to leave?"}
          />
          <form className="form-group" onSubmit={this.handleSubmit}>
            <label>
              Enter Score for: {players[nextPlayerRoll - 1].name}
              <input
                className="form-control"
                type="number"
                onChange={(e) => this.handleChange(e)}
                value={this.state.score}
              />
            </label>
            <button type="submit">Submit Score</button>
            {/* <div className="d-flex">
              <label>
                Tick for second roll
                <input
                  className="form-control ml-4 "
                  value={this.state.secondRoll}
                  type="checkbox"
                  onClick={this.secondRollClicked()}
                ></input>
              </label>
            </div> */}
          </form>
        </Fragment>
      );
    } else {
      return null;
    }
  }
}

export default Score;
