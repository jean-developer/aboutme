import React, {useContext} from "react";
import {motion} from "framer-motion";
import {useTranslation} from "react-i18next";
import "./About.css";
import {aboutSection} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";

const sectionVariants = {
  hidden: {opacity: 0, y: 32},
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
      when: "beforeChildren",
      staggerChildren: 0.12
    }
  }
};

const itemVariants = {
  hidden: {opacity: 0, y: 18},
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.33, 1, 0.68, 1]
    }
  }
};

export default function About() {
  const {isDark} = useContext(StyleContext);
  const {t} = useTranslation("common");

  if (!aboutSection.display) {
    return null;
  }

  return (
    <motion.section
      id="about"
      className="about-section"
      initial="hidden"
      whileInView="visible"
      viewport={{once: true, amount: 0.2}}
      variants={sectionVariants}
    >
      <div className="about-shell">
        <motion.div className="about-copy" variants={itemVariants}>
          <span className={`about-kicker ${isDark ? "about-kicker-dark" : ""}`}>
            {t(aboutSection.subtitle)}
          </span>
          <h2 className="about-title">{t(aboutSection.title)}</h2>
          <p className={`about-description ${isDark ? "about-description-dark" : ""}`}>
            {t(aboutSection.description)}
          </p>

          <div className="about-highlight-list">
            {aboutSection.highlights.map((highlight, index) => (
              <motion.article
                className={`about-highlight-card ${isDark ? "about-highlight-card-dark" : ""}`}
                key={index}
                variants={itemVariants}
              >
                <h3>{t(highlight.title)}</h3>
                <p>{t(highlight.description)}</p>
              </motion.article>
            ))}
          </div>
        </motion.div>

        <motion.div className="about-aside" variants={itemVariants}>
          {aboutSection.cards.map((card, index) => (
            <motion.article
              className={`about-story-card ${isDark ? "about-story-card-dark" : ""}`}
              key={index}
              variants={itemVariants}
            >
              <span>{t(card.eyebrow)}</span>
              <h3>{t(card.title)}</h3>
              <p>{t(card.description)}</p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
