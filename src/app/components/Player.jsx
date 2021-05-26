import React, { Component, Fragment } from "react";
import ScoreHistory from "../containers/ScoreHistory";

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
            <ScoreHistory key={player.id} player={player}/>
            {/* <ScoreHistory /> */}
          </div>
        </Fragment>
      );
    }
  }
}

export default Player;
