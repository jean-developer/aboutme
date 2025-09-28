import React, {useContext} from "react";
import emoji from "react-easy-emoji";
import {motion} from "framer-motion";
import "./Greeting.css";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";

import landingPerson from "../../assets/lottie/landingPerson.json";
import { greeting } from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";
import {useTranslation} from "react-i18next";

const containerVariants = {
  hidden: {opacity: 0, y: 40},
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
      when: "beforeChildren",
      staggerChildren: 0.15
    }
  }
};

const childVariants = {
  hidden: {opacity: 0, y: 20},
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.33, 1, 0.68, 1]
    }
  }
};

const imageVariants = {
  hidden: {opacity: 0, y: 32},
  visible: {
    opacity: 1,
    y: 0,
    transition: {duration: 0.9, ease: [0.22, 1, 0.36, 1]}
  }
};

export default function Greeting() {
  const {isDark} = useContext(StyleContext);
  const {t} = useTranslation("common");

  if (!greeting.displayGreeting) {
    return null;
  }

  return (
    <motion.section
      id="greeting"
      className="greet-main"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="greeting-wrapper">
        <motion.div className="greeting-text-card" variants={childVariants}>
          <motion.h1 className="greeting-title" variants={childVariants}>
            {t(greeting.title)}{" "}
            <motion.span
              className="wave-emoji"
              animate={{rotate: [0, -10, 12, -10, 9, 0]}}
              transition={{duration: 1.8, repeat: Infinity, ease: "easeInOut"}}
              role="img"
              aria-label="Waving hand"
            >
              {emoji("👋")}
            </motion.span>
          </motion.h1>
          <motion.p className="greeting-subtitle" variants={childVariants}>
            {t(greeting.subTitle)}
          </motion.p>
          <motion.div variants={childVariants}>
            <SocialMedia />
          </motion.div>
          <motion.div className="button-greeting-div" variants={childVariants}>
            <Button text="Contact me" href="#contact" />
            {
              // TODO: AGREGAR CV
              /* <Button
              text="See my resume"
              newTab={true}
              href={greeting.resumeLink}
            /> */
            }
          </motion.div>
        </motion.div>

        <motion.div
          className="greeting-visual"
          variants={childVariants}
          whileHover={{scale: 1.03, rotate: -1}}
          whileTap={{scale: 0.97}}
        >
          <div className="greeting-visual-inner">
            <div className="greeting-lottie" aria-hidden="true">
              <DisplayLottie animationData={landingPerson} />
            </div>
            <motion.img
              className="greeting-profile-image"
              src={require("../../assets/images/profile_photo.png")}
              alt="Profile"
              loading="lazy"
              variants={imageVariants}
            />
            <div className={`greeting-glass ${isDark ? "greeting-glass-dark" : ""}`} />
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
