import React from "react";
import { useState } from "react";
import '../styles/App.css'
import backgroundImage from '../assets/website_bg.jpg';
import profile from '../assets/pfp.jpg';
import suit from '../assets/suit.jpg';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

function Home() {
    return (
        <div class="home-bg">
            <div class="intro">
                Hi, I'm <span class="name">Advait Sepuri</span>
            </div>
            <div class="desc">
                I'm a computer science student at Georgia Tech focusing on AI and Systems Architecture (with a minor in math). I aim to apply my skills to fintech and software systems.
            </div>
            <img class="pfp" src={suit} alt="Profile"></img>
            <div class="links">Relevant Links:</div>
            <div class="icon-container">
                <a href="https://www.linkedin.com/in/advait-sepuri-8239a2214/" target="_blank">
                    <FaLinkedin className="icon"/>
                </a>
                <a href="https://github.com/adsepuri35" target="_blank">
                    <FaGithub className="icon"/>
                </a>
                <a href="mailto: advaitsepuri@gmail.com" target="_blank">
                    <FaEnvelope className="icon"/>
                </a>
            </div>
            
            <div class="arrow">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    );
}

export default Home;