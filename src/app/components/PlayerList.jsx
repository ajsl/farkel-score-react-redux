import React, { Component, Fragment } from "react";
import Player from "./Player";

export class PlayerList extends Component {
  render() {
    const { players } = this.props;

    if (players.length > 0) {
      return (
        <Fragment>
          <div className="container mt-5">
            <div className="row">
              {players.map((player) => (
                <Player key={player.id} player={player} />
              ))}
            </div>
          </div>
        </Fragment>
      );
    } else {
      return null;
    }
  }
}

export default PlayerList;
