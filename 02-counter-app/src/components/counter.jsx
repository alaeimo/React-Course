import React, { Component } from "react";

class Counter extends Component {
  state = { value: this.props.value };

  handleIncreament = (product) => {
    console.log(product);
    this.setState({ value: this.state.value + 1 });
  };
  render() {
    console.log(this.props);
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatValue()}</span>
        <button
          onClick={() => this.handleIncreament({ id: 1 })}
          className="btn btn-secondary btn-sm"
        >
          Increament
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 bg-";
    classes += this.state.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatValue() {
    const { value } = this.state;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
