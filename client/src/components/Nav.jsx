import React, { useState, useRef } from "react";
import MenuIcon from '@mui/icons-material/Menu';

export default function Navbar() {

    const [hoverStatus, setHoverStatus] = useState(false);
    const isHoveringRef = useRef(false); 

    const handleMouseEnter = () => {
        isHoveringRef.current = true;
        setHoverStatus(true);
    };

    const handleMouseLeave = () => {
        isHoveringRef.current = false;
        setTimeout(() => {
            if (!isHoveringRef.current) {
                setHoverStatus(false);
            }
        }, 300);
    };



    return (
        <div className="navbar">
            <img className="flagNavImg" src="/US-Flag-graphic.jpg" />
            <h5>Veteran/Firefighter Owned and Operated</h5>
            <img className="swaBigLogo" src="/SpyderWebApplications_SECONDARY_WHT.png" />
            <div className="menuIcon" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <MenuIcon fontSize="large" />
            </div>
            <div 
            className={`hoverMenu ${hoverStatus ? 'show' : ''}`} 
            onMouseEnter={handleMouseEnter} 
            onMouseLeave={handleMouseLeave}>
                <a target="_blank" href="https://www.linkedin.com/in/christian-marsden1">Christian's LinkedIn</a>
                <a target="_blank" href="https://github.com/Marzdyn">Christian's<br></br> Github</a>
                <a target="_blank" href="https://assignments-cz87.onrender.com/">Basic Portfolio</a>
            </div>
        </div>
    )
}