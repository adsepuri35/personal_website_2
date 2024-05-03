import React from "react";
import icims from '../assets/icims.png';
import siriusxm from '../assets/siriusxm.png';
import vip from '../assets/vip.jpeg';
import trading from '../assets/trading.jpg';
import easy from '../assets/easy.png';

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
                <div class="company" id="icims-company">
                    <img id="icims" src={icims} alt="icims" />
                    <div id="icims-date">September 2022 - January 2023</div>
                </div>
                <div class="company" id="easy-company">
                    <img id="easy" src={easy} alt="easy-donate" />
                    <div id="easy-date">September 2022 - January 2023</div>
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
                <div class="xp-item" id="trad-item">
                    <div class="position" id="trad-pos">Trading Competition Director & Corporate Relations Executive</div>
                    <ul>
                        <li>Organizing annual international trading competition (registration, sponsor communication, logistics, etc.)</li>
                        <li>Developing back-testing engine and game infrastructure with quantitative development team</li>
                        <li>Establishing and maintaining connections with trading firms (D.E. Shaw, DRW, IMC, Old Mission, etc.)</li>
                        <li>Managing organization’s resume booklet (500+) and planning recruiting/networking events with sponsors</li>
                    </ul>
                </div>
                <div class="xp-item" id="icims-item">
                    <div class="position" id="icims-pos">Software Engineering Intern</div>
                    <ul>
                        <li>Developed a single-page interface using React for an end-to-end data pipeline integration, resulting in a streamlined process for recruiters to search and track candidates</li>
                        <li>Utilized Figma to create wireframes and mockups to collaborate with HR to identify needs/preferences</li>
                        <li>Handled data retrieval/caching using REST APIs, reducing network latency by 25%</li>
                        <li>Implemented unit tests by using Jest to handle mocking and React Testing Library for component testing</li>
                    </ul>
                </div>
                <div class="xp-item" id="easy-item">
                    <div class="position" id="easy-pos">Full-Stack Web Development Intern</div>
                    <ul>
                        <li>Primed for official app launch by employing test-driven development and clean architectural principles, resulting in a 15% reduction in bug reports for scalable UI components</li>
                        <li>Utilized React Native to develop a mobile app for iOS and Android, resulting in a 20% increase in user engagement</li>
                        <li>Leveraged Flutter/Dart packages to monitor network connectivity changes and inspect network traffic logs</li>
                        <li>Coordinated internal testing with development team to monitor app performance and cross-platform accessibility</li>
                    </ul>
                </div>
            </div>
        </div>
    );

}

export default Experience