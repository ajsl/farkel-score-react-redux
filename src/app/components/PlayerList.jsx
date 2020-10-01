import React, { Component, Fragment } from "react";

import Player from "./Player";

export class PlayerList extends Component {
  constructor(props) {
    super(props);

  }

// componentDidMount() {
//     this.props.onLoad();
// }

  render() {
    const { players } = this.props
   
    if (players.length > 0) {
      return (
        <Fragment>
          <div className="container">
            <div className="row">
              {players.map((player) => (
                <Player key={player.id} player={player} />
              ))}
            </div>
          </div>
        </Fragment>
      );
    } else {
      return <h1>no players found</h1>;
    }
  }
}

export default PlayerList;
