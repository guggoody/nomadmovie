import React from "react";
import PropTypes from "prop-types";

class App extends React.Component {
  state = {
    count: 0,
  };
  add = () => {
    console.log("I add 1 point to count");
    this.setState((current) => ({ count: current.count + 1 }));
  };
  minus = () => {
    console.log("I minus 1 point to count");
    this.setState((current) => ({ count: current.count - 1 }));
  };
  render() {
    return (
      <div>
        <h2>The count is : {this.state.count}</h2>
        <button onClick={this.add}>Press to Add count</button>
        <button onClick={this.minus}>Press to minus count</button>
      </div>
    );
  }
}

export default App;
