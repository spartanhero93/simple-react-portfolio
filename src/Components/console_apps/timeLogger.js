import React , { Component } from 'react'; 
import Logger from "./Logger";

class Content extends Component {
  constructor(props) {
    super(props);
    this.launchClock();
    this.state = {
      counter: 0,
      currentTime: new Date().toLocaleString()
    };
  }
  launchClock() {
    setInterval(() => {
      this.setState({
        counter: ++this.state.counter,
        currentTime: new Date().toLocaleString()
      });
    }, 1000);
  }
  render() {
    if (this.state.counter > 2) return React.createElement("div", null);
    return <Logger time={this.state.currentTime} />;
  }
}
