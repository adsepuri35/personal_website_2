import React from 'react';
import '../styles/App.css';

const Intro = () => {
    return (
        <div className='intro'>
            <p>
                Hi! I'm Advait, an engineer at Console. I'm graduated from <a href="https://www.cc.gatech.edu/" target = "_blank" rel="noopener noreferrer" className="gt-highlight">Georgia Tech</a> with a CS undergrad and concentrations in AI and systems architecture.
                <br />
                <br />
                My current interests include high-performance computing, AI infrastructure, and crypto. I also conduct research involving SAT solvers and advanced reinforcement models.
                <br />
                <br />
                For fun, I enjoy rolling on jiujitsu mats, everything baseball stats, and spending time with my family and friends!
                <br />
                <br />
                Feel free to reach me at <a href="mailto:advaitsepuri@gmail.com" className="gt-highlight">advaitsepuri@gmail.com</a>.
            </p>
        </div>
    );
};

export default Intro;