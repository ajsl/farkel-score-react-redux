import React, { Component, Fragment } from "react";

class Score extends Component {
  constructor(props) {
    super(props);

    this.state = {
      score: 0,
      currentPlayer: 0,
    };

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e) {
    this.setState({ score: e.target.value });
  }

  updateCurrentPlayer(player) {
    let updatedPlayer = {
      id: player.id,
      name: player.name,
      score: +player.score + +this.state.score,
    };
    console.log(updatedPlayer);
    return updatedPlayer;
  }

  handleSubmit(e) {
    e.preventDefault();
    const data = this.updateCurrentPlayer(this.props.players[this.props.nextPlayerRoll - 1]);
    console.log(data);
    console.log(this.props.players.length);
    
    this.props.onSubmit(data, this.props.players.length);

    // this.setState(({
    //   currentPlayer: this.state.currentPlayer ++,
    // }));
    console.log(this.props.nextPlayerRoll);  
  }

  currentPlayer() {
    const { players, nextPlayerRoll } = this.props;

    let current = players.filter((player) => nextPlayerRoll === player.id);

    return current; 
  }

  render() {
    const { players, nextPlayerRoll } = this.props;
    const player = this.currentPlayer();
    console.log(nextPlayerRoll);

    {if (player){
        return (
          <Fragment>
            <h1>{this.state.score}</h1>
            <form onSubmit={this.handleSubmit}>
              <label>
                Enter Score for: {players[nextPlayerRoll - 1].name}
                <input onChange={(e) => this.handleChange(e)} />
              </label>
              <button type="submit">Submit Score</button>
            </form>
          </Fragment>
        );

    } else {
      return (
        <p>miss</p>
      )
    }}
  }
}

export default Score;
