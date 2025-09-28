import React from "react";
import {motion} from "framer-motion";
import "./Progress.css";
import {illustration, techStack} from "../../portfolio";
import Build from "../../assets/lottie/build";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import {useTranslation} from "react-i18next";
import {defaultViewport, fadeIn, slideUp, stagger} from "../../utils/animations";
export default function StackProgress() {
  const {t} = useTranslation("common");
  if (techStack.viewSkillBars) {
    return (
      <motion.section
        id="proficiency"
        className="skills-container"
        initial="hidden"
        whileInView="show"
        viewport={defaultViewport}
        variants={fadeIn}
      >
        <motion.div className="skills-bar" variants={stagger(0.12, 0.1)}>
          <motion.h1 className="skills-heading" variants={slideUp}>
            {t("skillProgress.skillProgressTitle")}
          </motion.h1>
          {techStack.experience.map((exp, i) => {
            const progressStyle = {
              width: exp.progressPercentage
            };
            if (exp.Section) {
              return (
                <motion.h2
                  key={`${exp.Title}-${i}`}
                  style={{marginBottom: 0, marginTop: 40, textDecorationLine: "underline"}}
                  variants={slideUp}
                >
                  {t(exp.Title)}
                </motion.h2>
              );
            }
            return (
              <motion.div key={i} className="skill" variants={slideUp}>
                <p>{exp.Stack}</p>
                <div className="meter">
                  <span style={progressStyle}></span>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div className="skills-image" variants={slideUp}>
          {illustration.animated ? (
            <DisplayLottie animationData={Build} />
          ) : (
            <img alt="Skills" src={require("../../assets/images/skill.svg")} />
          )}
        </motion.div>
      </motion.section>
    );
  }
  return null;
}
