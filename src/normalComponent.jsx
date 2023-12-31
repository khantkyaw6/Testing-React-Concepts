import React, { Component } from "react";

export default class NormalComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  onIncrement = () => {
    this.setState({ count: 0 });
  };

  render() {
    return (
      <div>
        <h1>Normal Component </h1> <br /> {this.state.count}
        <button onClick={this.onIncrement}>Increase</button>
      </div>
    );
  }
}
