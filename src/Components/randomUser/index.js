import React, { Component } from 'react';
import axios from 'axios';

class userGenerator extends Component {
  constructor(props) {
    super(props);
    this.getUser = this.getUser.bind(this);
    this.state = {
      name: "",
      email: "",
      location: ""
    }
  }

  getUser() {
    axios.get("https://randomuser.me/api/?results=1").then(res => {
      res.data.results.map(obj => {
        this.setState(
          {
            email: obj.email,
            location: obj.location,
            name: obj.name.map()
          }
        )
        console.log(obj)
      })
    })
  }

  render() {
    return (
      <div>
        <h1>
          Random Email: <p>{this.state.email}</p>
        </h1>
        <h1>
          Random Name: <p>{this.state.name}</p>
        </h1>
        <button onClick={this.getUser}>Get Email!</button>
      </div>
    );
  }
}

export default userGenerator;
