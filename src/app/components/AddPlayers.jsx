import React, { Fragment, Component } from "react";

class AddPlayers extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const data = this.state.value.trim();
    this.props.onSubmit(data);
    this.setState({
      value: "",
    });
  }

  render() {
    const { players } = this.props;
    {
      if (players.length > 1)
        return (
          <Fragment>
            <h1>{players[0].id}</h1>
            <form onSubmit={this.handleSubmit}>
              <label>
                Enter player name:
                <input
                  value={this.state.value}
                  type="text"
                  onChange={this.handleChange}
                />
              </label>
              <button type="submit">Add Player</button>
            </form>
          </Fragment>
        );
        else {
          return (
            <Fragment>
            <form onSubmit={this.handleSubmit}>
              <label>
                Enter player name:
                <input
                  value={this.state.value}
                  type="text"
                  onChange={this.handleChange}
                />
              </label>
              <button type="submit">Add Player</button>
            </form>
          </Fragment>
          )
    }
    }
  }
}

// const onChange = (e) => setPlayerName(e.target.value);

//    return (
//      <Fragment>
//        <form
//          onSubmit={(e) => {
//            e.preventDefault();
//            if (!playerName.trim()) {
//                return;
//            }
//            dispatch({type: 'addPlayer',}, playerName);
//            setPlayerName("");
//          }}
//        >
//          <label>Enter player name: </label>
//          <input value={playerName} type="text" onChange={onChange} />
//          <button type="submit">Add Player</button>
//        </form>
//        <div>
//          <h2>Score: </h2>
//        </div>
//      </Fragment>
//    );

//  export default connect(null, mapDispatch)(AddPlayer);

export default AddPlayers;
