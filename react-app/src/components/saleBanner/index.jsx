import { Component } from "react";
import { getTimeDifference } from "../../utils/time";

class SaleBanner extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timer: 0,
      intervalId: null,
    };

    this.onStart = this.onStart.bind(this);
    this.onPause = this.onPause.bind(this);
    console.log("Initialised");
  }

  componentDidMount() {
    console.log("Mounted");
    this.onStart();
  }
  componentWillUnmount() {
    console.log("Unmounting");
    if (this.state.intervalId) {
      clearInterval(this.state.intervalId);
    }
  }

  onStart() {
    let intervalId = setInterval(() => {
      console.log("Interval");
      this.setState({ timer: this.state.timer + 1 });
    }, 1000);
    this.setState({ intervalId: intervalId });
  }
  onPause() {
    clearInterval(this.state.intervalId);
    this.setState({ intervalId: null });
  }
  shouldComponentUpdate() {
    console.log("Should Update?");
    if (this.state.timer > 10) {
      return false;
    }
    return true;
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log({ prevProps, prevState, newState: this.state });
    return null;
  }
  componentDidUpdate() {
    console.log("updated");
  }

  render() {
    const { intervalId } = this.state;
    const { name } = this.props;
    const timeLeft = getTimeDifference();
    const { days, minutes, hours, seconds } = timeLeft || {};

    const saleStarted = !!intervalId;
    console.log("render");

    return (
      <div>
        <h1>Hello {name}: Class resume in 15 min</h1>
        <div>
          {!saleStarted && <button onClick={this.onStart}>Start Sale</button>}
          {saleStarted && <button onClick={this.onPause}>Pause Sale</button>}
        </div>
        <h2>
          {timeLeft
            ? `Time left: ${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`
            : "Sale is over"}
        </h2>
      </div>
    );
  }
}

export default SaleBanner;
