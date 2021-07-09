import React from 'react';
import Header from './Header.js';
import "./style.css";

import astronaut from "../images/astronaut.jpg";
import earth from "../images/earth.jpg";
import mars from "../images/mars.jpg";
import moon from "../images/moon.jpg";
import rocket from "../images/rocket.jpg";
import saturn from "../images/saturn.jpg";


function Space() {
    return (
        <div className="list-group">
            <Header/>
            <div className="list-group-item">
                <img className="img" src={astronaut} alt="" />
                <h1 className="whatif" >"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."</h1>

            </div>

            <div className="list-group-item">
                <img className="img" src={earth} alt="" />
                <h1 className="whatif">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."</h1>

            </div>

            <div className="list-group-item">
                <img className="img" src={mars} alt="" />
                <h1 className="whatif">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."</h1>

            </div>

            <div className="list-group-item">
                <img className="img" src={moon} alt="" />
                <h1 className="whatif"> "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."</h1>

            </div>

            <div className="list-group-item">
                <img className="img" src={rocket} alt="" />
                <h1 className="whatif">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."</h1>
            </div>

            <div className="list-group-item">
                <img className="img" src={saturn} alt="" />
                <h1 className="whatif">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."</h1>
            </div>
        </div>
    )
};
export default Space;