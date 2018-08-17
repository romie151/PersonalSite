import React, { Component } from 'react';
import './Home.css';

class Home extends Component {
    render() {
        return (
            <div>
                <div id="stuff">
                    <img id="background" src={require("./images/entrance.jpg")} />
                </div>
            </div>
        );
    }
}

export default Home;
