import React, {useContext} from "react";
import {Fade} from "react-reveal";
import emoji from "react-easy-emoji";
import "./Greeting.css";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";

import { greeting } from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";
import {
  useTranslation
} from "react-i18next";


export default function Greeting() {
  const {isDark} = useContext(StyleContext);
  const {
    t
  } = useTranslation('common');
  if (!greeting.displayGreeting) {
    return null;
  }
  return (
    <Fade bottom duration={1000} distance="40px">
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          <div className="greeting-text-div">
            <div>
              <h1
                className={isDark ? "dark-mode greeting-text" : "greeting-text"}
              >
                {" "}
                {t(greeting.title)}{" "}
                <span className="wave-emoji">{emoji("👋")}</span>
              </h1>
              <p
                className={
                  isDark
                    ? "dark-mode greeting-text-p"
                    : "greeting-text-p subTitle"
                }
              >
                {t(greeting.subTitle)}
              </p>
              <SocialMedia />
              <div className="button-greeting-div">
                <Button text="Contact me" href="#contact" />
                
                {
                //TODO: AGREGAR CV
                /* <Button
                  text="See my resume"
                  newTab={true}
                  href={greeting.resumeLink}
                /> */}
              </div>
            </div>
          </div>
          {/* <div className="greeting-image-div">
            {illustration.animated ? (
              <DisplayLottie animationData={landingPerson} />
            ) : (
              <img
                alt="man sitting on table"
                src={require("../../assets/images/manOnTable.svg")}
              ></img>
            )}
          </div> */}
          <div className="greeting-profile-image-div" >
            <img alt="Profile" src = { require("../../assets/images/profile_photo.png")} >
            </img> 
          </div>
        </div>
      </div>
    </Fade>
  );
}
