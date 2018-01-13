import React, { Component } from "react";
import Particles from "react-particles-js";
import './Particles.css';
import CustomNavbar from '../bootstrap/Navbar';
import TypeAnimated from '../typingAnimated/type'
import RandomUser from "../randomUser/index";

export default class ParticlesJS extends Component {
  render() {
    return (
      <div className='wrapper'>
      <Particles
        params={{
          particles: {
            number: {
              value: 30,
              density: {
                enable: true,
                value_area: 800
              }
            },
            line_linked: {
              shadow: {
                enable: false,
                color: "#3CA9D1",
                blur: 0
              }
            }
          },
          interactivity: {
          detect_on: "canvas",
           events: {
            onhover: {
            enable: true,
            mode: "repulse"
            },
             onclick: {
             enable: false,
             mode: "push"
            },
           resize: true
          },
        },
        }}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: '0'
        }}
      />
      <div className='navbar'>
        <CustomNavbar />
        <div className="content">
          <TypeAnimated />
          <RandomUser />
        </div>
      </div>
      </div>
    );
  }
}
