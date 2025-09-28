import React, {useContext} from "react";
import {motion} from "framer-motion";
import "./Skills.css";
import SoftwareSkill from "../../components/softwareSkills/SoftwareSkill";
import {illustration, skillsSection} from "../../portfolio";
import codingPerson from "../../assets/lottie/codingPerson";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import StyleContext from "../../contexts/StyleContext";
import {useTranslation} from "react-i18next";
import emoji from "react-easy-emoji";
import {defaultViewport, fadeIn, slideUp, stagger} from "../../utils/animations";

export default function Skills() {
  const {isDark} = useContext(StyleContext);
  const {t} = useTranslation("common");
  if (!skillsSection.display) {
    return null;
  }
  return (
    <motion.section
      className={isDark ? "dark-mode main" : "main"}
      id="skills"
      initial="hidden"
      whileInView="show"
      viewport={defaultViewport}
      variants={fadeIn}
    >
      <motion.div className="skills-main-div" variants={stagger(0.18, 0.12)}>
        <motion.div className="skills-image-div" variants={slideUp}>
          {illustration.animated ? (
            <DisplayLottie animationData={codingPerson} />
          ) : (
            <img
              alt="Man Working"
              src={require("../../assets/images/developerActivity.svg")}
            ></img>
          )}
        </motion.div>
        <motion.div className="skills-text-div" variants={slideUp}>
          <h1 className={isDark ? "dark-mode skills-heading" : "skills-heading"}>
            {t(skillsSection.title)}{" "}
          </h1>
          <p
            className={
              isDark
                ? "dark-mode subTitle skills-text-subtitle"
                : "subTitle skills-text-subtitle"
            }
          >
            {t(skillsSection.subTitle)}
          </p>
          <SoftwareSkill />
          <div>
            {skillsSection.skills.map((skills, i) => {
              return (
                <p
                  key={i}
                  className={
                    isDark
                      ? "dark-mode subTitle skills-text"
                      : "subTitle skills-text"
                  }
                >
                  {emoji("- " + t(skills))}
                </p>
              );
            })}
          </div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
