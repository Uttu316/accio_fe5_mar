import { Component } from "react";

class ClassCounter extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };

    this.onAdd = this.onAdd.bind(this);
    this.onMinus = this.onMinus.bind(this);
  }

  onAdd() {
    this.setState({ count: this.state.count + 1 });
  }
  onMinus() {
    this.setState({ count: this.state.count - 1 });
  }

  render() {
    const { count } = this.state;
    return (
      <div>
        <h1>Class Counter</h1>
        <h2>{count}</h2>
        <button onClick={this.onAdd}>Add</button>
        <button onClick={this.onMinus}>Minus</button>
      </div>
    );
  }
}

export default ClassCounter;
