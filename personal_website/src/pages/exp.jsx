import React from "react";
import icims from '../assets/icims.png';
import siriusxm from '../assets/siriusxm.png';
import vip from '../assets/vip.jpeg';
import trading from '../assets/trading.jpg';

function Experience() {
    return (
        <div class="exp-bg">
            <div class="exp-title">Experience</div>
            <div class="company-container" id="sxm">
                <div class="company" id="sxm-company">
                    <img id="SiriusXM" src={siriusxm} alt="siriusxm" />
                    <div id="sxm-date">June 2024 - August 2024</div>
                </div>
                <div class="company" id="vip-company">
                    <img id="vip" src={vip} alt="vip" />
                    <div id="fung-group">Fung Research Group @ Georgia Tech CSE</div>
                    <div id="vip-date">January 2024 - Present</div>
                </div>
                <div class="company" id="trad-company">
                    <img id="trad" src={trading} alt="trading" />
                    <div id="trading-date">September 2023 - Present</div>
                </div>
            </div>
            <div class="vertical-line"></div>
            <div class="xp-desc-container">
                <div class="xp-item" id="sxm-item">
                    <div class="position" id="sxm-pos">Systems Software Engineering Intern</div>
                    <ul>
                        <li>Assisting in systems software engineering, architecture, and satellite uplink projects for cloud environments</li>
                        <li>Deploying and validating internal engineering test environments using Amazon Web Services</li>
                        <li>Creating satellite distribution engineering documentation and coordinating knowledge transfer methodologies</li>
                    </ul>
                </div>
                <div class="xp-item" id="vip-item">
                    <div class="position" id="vip-pos">Undergraduate Researcher</div>
                    <ul>
                        <li>Investigating novel machine learning architectures with graph neural networks to capture spatial and chemical info</li>
                        <li>Developing data-driven algorithms using PyTorch for inverse design at the atomic level, to achieve chemical accuracy</li>
                        <li>Pre-training TorchMD (deep learning framework for molecular simulations) on QM9 dataset using de-noising, feature engineering, and hyperparameter tuning</li>
                    </ul>
                </div>
            </div>
        </div>
    );

}

export default Experience