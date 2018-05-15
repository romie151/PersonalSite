import React, { Component } from 'react';
import './Home.css'
import { Link } from 'react-router-dom'

export default class Home extends Component {
  render() {
    return (
      <div className="HomeBody">
        <div id="Menu">
            <h1>Romie Zelaya</h1>
            <p>About Me</p>
            <p>My Projects</p>
            <p>My Resume</p>
            <p>More</p>
            <p>Contact Me</p>
        </div>
      </div>
    )
  }
};
