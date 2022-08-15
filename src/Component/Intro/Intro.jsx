import React from "react";
import './Intro.css';
import Github from '../../img/github.png';
import Linkedin from '../../img/linkedin.png';
import Facebook from '../../img/Facebook.png';
//import Vector1 from '../../img/Vector1.png';
//import Vector2 from '../../img/Vector2.png';
import boy from '../../img/boy.png';
//import thumbup from '../../img/thumbup.png';
//import crown from '../../img/crown.png';
//import glassesimoji from '../../img/glassesimoji.png';
//import FloatingDiv from "../FloatingDiv/FloatingDiv";

const Intro = () => {
    return (
        <div className="intro">
            <div className="i-left">
                <div className="i-name">
                    <span>Hy! I Am</span>
                    <span>Kazi Omar Khaled</span>
                    <span>Front-End Web Developer</span>
                </div>
                <a href="https://drive.google.com/file/d/1NCpoA1krMcKBzyKbFDcPm9tBannqBJVw/view?usp=sharing" target="_blank">
                    <button className="button i-button">My Resume</button>
                </a>


                <div className="i-icons">
                    <a href="https://github.com/kazi-omar-khaled" target="_blank">
                        <img src={Github} alt="" />
                    </a>

                    <a href="https://www.linkedin.com/in/kazi-omar-khaled-09342414b/" target="_blank">
                        <img src={Linkedin} alt="" />
                    </a>

                    <a href="https://www.facebook.com/kazi.omarkhaled/" target="_blank">
                        <img src={Facebook} alt="" />
                    </a>

                </div>

            </div>
            <div className="i-right">
                <img src={boy} alt="" />

            </div>
        </div>
    )
}

export default Intro;

/*<div style={{ top: '-4%', left: '68%' }}>
                    <FloatingDiv image={crown} txt1='Web' txt2='Developer' />
                </div>
                <div style={{ top: '18rem', left: '0rem' }}>
                    <FloatingDiv image={thumbup} txt1='Best Design' txt2='Award' />
                </div>*/