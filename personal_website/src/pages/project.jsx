import React from "react";
import block from '../assets/block.png';
import emulator from '../assets/emulator.png';
import sensor from '../assets/sensor.png';

function Project() {
    return (
        <div class="project-bg">
            <div id="proj-title">Projects</div>
            <div class="left-container">
                <div class="company" id="block">
                    <img src={block} id="block-logo"/>
                    <img src={emulator} id="emulator"/>
                </div>
                <div class="company" id="sensor">
                    <img src={sensor} id="sensor-pic"/>
                </div>
            </div>
            <div class="right-container">
                <div class="xp-item" id="block-item">
                    <div class="position" id="block-pos">Blockchain Application for Engineering Patents</div>
                    <ul>
                        <li>Developed Web3 application for engineers to upload and share sketches, files, and other documents through a blockchain network</li>
                        <li>Built cross-platform (iOS, AndroidOS, Windows, macOS) front-end developed using Flutter/Dart</li>
                        <li>Integrated IPFS API as primary blockchain network and utilized Firebase for file backup</li>
                        <li>Developed smart contracts using Solidity to manage intellectual property rights, enable secure sharing of copyrighted files, and verify digital identities</li>
                        <li>Implemented Argon2 cryptographic algorithm to secure private keys and passwords</li>
                        <li><a href="https://github.com/adsepuri35/bLOCK" target ="_blank" id="block-link">Github</a></li>
                        <li><a href="https://docs.google.com/document/d/1K0S3tskfX3ZkAxJKy8XR1DOzztoP8xmheaCfkkBo4Oo/edit?usp=sharing" target ="_blank" id="block-link">Engineering Report</a></li>
                    </ul>
                </div>
                <div class="xp-item" id="sensor-item">
                    <div class="position" id="sensor-pos">Wearable Sensor to Detect Parkinsonian Tremors</div>
                    <ul>
                        <li>Engineered sensor using an Arduino Nano that tracks and diagnoses tremors, a major symptom of Parkinson's disease</li>
                        <li>Built a rapid-movement tracking algorithm by using a Adafruit 9-dof IMU to compare velocity and acceleration standard deviations</li>
                        <li>Incorporated MyoWare muscle sensors to track muscle contractions by filtering raw EMG output</li>
                        <li>Developed smart contracts using Solidity to manage intellectual property rights, enable secure sharing of copyrighted files, and verify digital identities</li>
                        <li><a href="https://github.com/adsepuri35/ShakeSense" target ="_blank" id="block-link">Github</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Project