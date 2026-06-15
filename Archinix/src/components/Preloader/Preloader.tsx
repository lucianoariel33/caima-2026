import React, { useEffect, useRef } from "react";
import logo from "/assets/img/logo/logo.png";
import "./Preloader.scss";

interface PreloaderProps {
    onComplete?: () => void;
}

const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
    const loaderRef = useRef<HTMLDivElement>(null);
    const logoRef = useRef<HTMLImageElement>(null);
    const progressRef = useRef<HTMLDivElement>(null);
    const percentageRef = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        const timer = setTimeout(() => {
            if (onComplete) onComplete();
        }, 1000); // Show for 1 second and then complete

        return () => {
            clearTimeout(timer);
        };
    }, [onComplete]);

    return (
        <div id="preloader" ref={loaderRef} className="preloader-wrap">
            <div className="preloader-inner">
                <div className="logo-container">
                    <img src={logo} alt="Archinix Logo" ref={logoRef} className="preloader-logo" />
                </div>
                <div className="progress-container">
                    <div className="progress-bar" ref={progressRef}></div>
                </div>
                <div className="percentage-wrap">
                    <span className="percentage" ref={percentageRef}>0</span>
                    <span className="symbol">%</span>
                </div>
            </div>
        </div>
    );
};

export default Preloader;
