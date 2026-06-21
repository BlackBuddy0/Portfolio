import { useState } from "react";

import social from "../../assets/social.png";
import insta from "../../assets/insta.png";
import linkedIn from "../../assets/linkedIn.png";
import github from "../../assets/github.png";
import gmail from "../../assets/gmail.png";

import './common.css';

const Contact = ({ onClick }) => {
  const [socialOpen, setSocialOpen] = useState(false);

  const toggleSocialOpen = () => {
    setSocialOpen(!socialOpen);
  }

  return (
    <div className="contact shiftup">
      <div className="social" title="social media" onClick={() => toggleSocialOpen()}>
        <img src={social} alt="Social" width="50px"/>
        <img src={insta} alt="Instagram" 
          className="apps app3" 
          style={{ transform: socialOpen? "translateX(-60px) translateY(60px)" : "translateX(0) translateY(0)" }}
          onClick={ () => {
            if(socialOpen) {
              window.open(
                "https://www.instagram.com/anubhavmaheshwari0/profilecard/?igsh=Y3Ewc3dnMHIybGE1",
                "_blank"
              )}
            }
          }
        />
        <img src={linkedIn} alt="LinkedIn" 
          className="apps app2" 
          style={{ transform: socialOpen? "translateX(-60px) translateY(0px)" : "translateX(0) translateY(0)" }}
          onClick={ () => {
            if(socialOpen) {
              window.open(
                "https://www.linkedin.com/in/anubhav-maheshwari-017382324",
                "_blank"
              )}
            }
          }
        />
        <img src={github} alt="GitHub" 
          className="apps app1" 
          style={{ transform: socialOpen? "translateX(-60px) translateY(-60px)" : "translateX(0) translateY(0)" }}

          onClick={ () => {
            if(socialOpen) {
              window.open(
                "https://github.com/BlackBuddy0",
                "_blank"
              )}
            }
          }
        />
      </div>

      <div className="email" title="email" onClick={onClick}>
        <img src={gmail} alt="Gmail" width="40px" />
      </div>
    </div>
  );
};

export default Contact;