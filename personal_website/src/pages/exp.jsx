import React from "react";
import icims from '../assets/icims.png';
import siriusxm from '../assets/siriusxm.png';

function Experience() {
    return (
        <div class="exp-bg">
            <div class="exp-title">Experience</div>
            <div class="company-container">
                <div class="company">
                    <img id="SiriusXM" src={siriusxm} alt="siriusxm" />
                    <div id="sxm-date">May 2021 - August 2021</div>
                </div>
            </div>
            <div class="vertical-line"></div>
            <div class="xp-desc-container"></div>
        </div>
    );

}

export default Experience