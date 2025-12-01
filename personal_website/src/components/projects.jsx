import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import '../styles/App.css';

const Projects = () => {
    return (
        <div className="projects">
            <p className="section-title" id="projects-title">Projects</p>
            <div className="projects-grid">
                <a href="https://github.com/adsepuri35/gRPC_client_side_load_balancer" target="_blank" rel="noopener noreferrer" className="project-link">
                    <div className="project-item">
                        <div className="left-section">
                            <div className="project-name">gRPC Load Balancer</div>
                            <div className="project-desc">Route market orders to backend gateways in real-time</div>
                        </div>
                        <div className="right-section">
                            <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="externalIcon"/>
                        </div>
                    </div>
                </a>
                <a href="https://github.com/adsepuri35/bLOCK" target="_blank" rel="noopener noreferrer" className="project-link">
                    <div className="project-item">
                        <div className="left-section">
                            <div className="project-name">bLOCK</div>
                            <div className="project-desc">Blockchain-enabled patent documentation system</div>
                        </div>
                        <div className="right-section">
                            <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="externalIcon"/>
                        </div>
                    </div>
                </a>
                <a href="https://github.com/adsepuri35/Prometheus_Exporter_for_ZeroMQ" target="_blank" rel="noopener noreferrer" className="project-link">
                    <div className="project-item">
                        <div className="left-section">
                            <div className="project-name">ScopeZMQ</div>
                            <div className="project-desc">C++ Prometheus exporter for ZeroMQ applications</div>
                        </div>
                        <div className="right-section">
                            <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="externalIcon"/>
                        </div>
                    </div>
                </a>
                <a href="https://github.com/adsepuri35/Partitioned_Memory_Peripheral" target="_blank" rel="noopener noreferrer" className="project-link">
                    <div className="project-item">
                        <div className="left-section">
                            <div className="project-name">VHDL Memory Peripheral</div>
                            <div className="project-desc">External RAM with kernel memory partitioning</div>
                        </div>
                        <div className="right-section">
                            <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="externalIcon"/>
                        </div>
                    </div>
                </a>
                <a href="https://github.com/adsepuri35/uniswap_v3_swap_tracker" target="_blank" rel="noopener noreferrer" className="project-link">
                    <div className="project-item">
                        <div className="left-section">
                            <div className="project-name">Uniswap Tracking Terminal</div>
                            <div className="project-desc">Track liquidity pools with Rust WebSockets</div>
                        </div>
                        <div className="right-section">
                            <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="externalIcon"/>
                        </div>
                    </div>
                </a>
                
                <a href="https://github.com/adsepuri35/personal_website_3" target="_blank" rel="noopener noreferrer" className="project-link">
                    <div className="project-item">
                        <div className="left-section">
                            <div className="project-name">Personal Website v3.0</div>
                            <div className="project-desc">Portfolio detailing my experience and projects</div>
                        </div>
                        <div className="right-section">
                            <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="externalIcon"/>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    );
};

export default Projects;