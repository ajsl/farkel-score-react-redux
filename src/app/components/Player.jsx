import React, { Component, Fragment } from "react";

class Player extends Component {

  render() {
    const { player } = this.props;

    if (!player.name) {
      return null;
    } else {
      return (
        <Fragment>
          <div className="col-lg">
            <div className="card text-center">
              <h4>{player.name}</h4>
            </div>
            <div className="card-body">Score: {player.score}</div>
          </div>
        </Fragment>
      );
    }
  }
}

export default Player;
