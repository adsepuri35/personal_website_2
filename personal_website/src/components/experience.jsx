import React from 'react';
import gtsquare from '../assets/gtsquare.jpeg';
import tgt from '../assets/tgt.png';
import vip from '../assets/vip.jpeg';
import alchemy from '../assets/alchemy.jpeg';
import icims from '../assets/icims.webp';
import easy from '../assets/easy.png';
import sxmblue from '../assets/sxmblue.jpg';
import gtvc from '../assets/gtvc.jpeg';
import console from '../assets/console.jpeg';

const Experience = () => {

    return (
        <div className="experience">
            <p className="section-title" id="exp-title">Experience</p>
            <div className="experience-container">
                <div className="experience-block">
                    <div className="left-content">
                        <a href="https://www.console.com/" target="_blank" rel="noopener noreferrer" className='company-link'>
                            <img src={console} alt="Console" className="company" />
                        </a>
                    </div>
                    <div className="right-content">
                        <div className="organization-position">
                            <div className="organization">Console</div>
                            <div className="position">Software Engineer</div>
                        </div>
                        <div className="date">2026</div>
                    </div>
                </div>
                <div className="experience-block">
                    <div className="left-content">
                        <a href="https://www.alchemy.com/" target="_blank" rel="noopener noreferrer" className='company-link'>
                            <img src={alchemy} alt="Alchemy" className="company" />
                        </a>
                    </div>
                    <div className="right-content">
                        <div className="organization-position">
                            <div className="organization">Alchemy</div>
                            <div className="position">Software Engineering Intern</div>
                        </div>
                        <div className="date">2025</div>
                    </div>
                </div>
                <div className="experience-block">
                    <div className="left-content">
                        <a href="https://www.cc.gatech.edu/" target="_blank" rel="noopener noreferrer" className='company-link'>
                            <img src={gtsquare} alt="GaTech" className="company" />
                        </a>
                    </div>
                    <div className="right-content">
                        <div className="organization-position">
                            <div className="organization">GT Computing</div>
                            <div className="position">Undergraduate Researcher</div>
                        </div>
                        <div className="date">2024-25</div>
                    </div>
                </div>
                <div className="experience-block">
                    <div className="left-content">
                        <a href="https://vip.gatech.edu/teams/vxp" target="_blank" rel="noopener noreferrer" className='company-link'>
                            <img src={vip} alt="VIP" className="company" />
                        </a>
                    </div>
                    <div className="right-content">
                        <div className="organization-position">
                            <div className="organization">Fung Group @ GT CSE</div>
                            <div className="position">LLM Researcher</div>
                        </div>
                        <div className="date">2024-25</div>
                    </div>
                </div>
                <div className="experience-block">
                    <div className="left-content">
                        <a href="https://www.cc.gatech.edu/" target="_blank" rel="noopener noreferrer" className='company-link'>
                            <img src={gtsquare} alt="GaTech" className="company" />
                        </a>
                    </div>
                    <div className="right-content">
                        <div className="organization-position">
                            <div className="organization">GT Computing</div>
                            <div className="position">Teaching Assistant</div>
                        </div>
                        <div className="date">2024-25</div>
                    </div>
                </div>
                <div className="experience-block">
                    <div className="left-content">
                        <a href="https://www.siriusxm.com/" target="_blank" rel="noopener noreferrer" className='company-link'>
                            <img src={sxmblue} alt="SiriusXM" className="company" />
                        </a>
                    </div>
                    <div className="right-content">
                        <div className="organization-position">
                            <div className="organization">SiriusXM</div>
                            <div className="position">Software Engineering Intern</div>
                        </div>
                        <div className="date">2024</div>
                    </div>
                </div>
                <div className="experience-block">
                    <div className="left-content">
                        <a href="https://tradingatgt.org/" target="_blank" rel="noopener noreferrer" className='company-link'>
                            <img src={tgt} alt="TradingGT" className="company" />
                        </a>
                    </div>
                    <div className="right-content">
                        <div className="organization-position">
                            <div className="organization">Trading @ GT</div>
                            <div className="position">Vice President</div>
                        </div>
                        <div className="date">2023-25</div>
                    </div>
                </div>
                <div className="experience-block">
                    <div className="left-content">
                        <a href="https://tradingatgt.org/" target="_blank" rel="noopener noreferrer" className='company-link'>
                            <img src={gtvc} alt="GTVC" className="company" />
                        </a>
                    </div>
                    <div className="right-content">
                        <div className="organization-position">
                            <div className="organization">GT Venture Capital</div>
                            <div className="position">Research Analyst</div>
                        </div>
                        <div className="date">2023-24</div>
                    </div>
                </div>
                <div className="experience-block">
                    <div className="left-content">
                        <a href="https://www.icims.com/" target="_blank" rel="noopener noreferrer" className='company-link'>
                            <img src={icims} alt="iCIMS" className="company" />
                        </a>
                    </div>
                    <div className="right-content">
                        <div className="organization-position">
                            <div className="organization">iCIMS</div>
                            <div className="position">Software Engineering Intern</div>
                        </div>
                        <div className="date">2022</div>
                    </div>
                </div>
                <div className="experience-block">
                    <div className="left-content">
                        <a href="https://easy-donate.com/" target="_blank" rel="noopener noreferrer" className='company-link' id="bottom-xp">
                            <img src={easy} alt="easy-donate" className="company" />
                        </a>
                    </div>
                    <div className="right-content">
                        <div className="organization-position">
                            <div className="organization">easy-donate</div>
                            <div className="position">Flutter Engineering Intern</div>
                        </div>
                        <div className="date">2022</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Experience;