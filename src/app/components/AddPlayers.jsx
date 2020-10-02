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

    if (players.length > 1)
      return (
        <Fragment>
          <form className="form-group mt-5" onSubmit={this.handleSubmit}>
            <label>
              Enter player name:
              <input
                className="form-control"
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
          <h2>Please add players</h2>
          <form className="form-group mt-5" onSubmit={this.handleSubmit}>
            <label>
              Enter player name:
              <input
                className="form-control"
                value={this.state.value}
                type="text"
                onChange={this.handleChange}
              />
            </label>
            <button type="submit">Add Player</button>
          </form>
        </Fragment>
      );
    }
  }
}

export default AddPlayers;
