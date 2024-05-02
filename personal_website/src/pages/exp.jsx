import React from "react";
import icims from '../assets/icims.png';
import siriusxm from '../assets/siriusxm.png';

function Experience() {
    return (
        <div class="exp-bg">
            <div class="exp-title">Experience</div>
            <div class="company-container" id="sxm">
                <div class="company" id="sxm-company">
                    <img id="SiriusXM" src={siriusxm} alt="siriusxm" />
                    <div id="sxm-date">June 2024 - August 2024</div>
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
            </div>
        </div>
    );

}

export default Experience