import React, { Fragment, Component } from "react";

class AddPlayers extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: "",
      finsihedAddingPlayers: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
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

  handleClick(e) {
    e.preventDefault();
    if (this.props.players.length > 1) {
      this.setState({ finsihedAddingPlayers: this.state.finsihedAddingPlayers ? false : true });
      const data = !this.state.finsihedAddingPlayers;
      this.props.onClick(data);
    }
  }

  render() {
    if (this.props.finsihedAddingPlayers) return null;
    return (
      <Fragment>
        <div>
          <h2>Please add players</h2>
        </div>
        <div className="add-players-container">
          <form className="form-group" onSubmit={this.handleSubmit}>
            <label>
              Enter player name:
              <input
                className="form-control"
                value={this.state.value}
                type="text"
                onChange={this.handleChange}
              />
            </label>
            <button className="button-main" type="submit">
              Add Player
            </button>
          </form>
          <div>
            <button className="button-main" onClick={this.handleClick}>
              Finished adding players
            </button>
          </div>
        </div>
      </Fragment>
    );
  }
  // }
}

export default AddPlayers;
