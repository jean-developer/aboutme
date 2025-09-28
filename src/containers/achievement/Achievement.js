import React, {useContext} from "react";
import {motion} from "framer-motion";
import "./Achievement.css";
import AchievementCard from "../../components/achievementCard/AchievementCard";
import {achievementSection} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";
import {defaultViewport, fadeIn, slideUp, stagger} from "../../utils/animations";
export default function Achievement() {
  const {isDark} = useContext(StyleContext);
  if (!achievementSection.display) {
    return null;
  }
  return (
    <motion.section
      className="main"
      id="achievements"
      initial="hidden"
      whileInView="show"
      viewport={defaultViewport}
      variants={fadeIn}
    >
      <motion.div className="achievement-main-div" variants={stagger(0.18, 0.12)}>
        <motion.div className="achievement-header" variants={slideUp}>
          <h1
            className={
              isDark
                ? "dark-mode heading achievement-heading"
                : "heading achievement-heading"
            }
          >
            {achievementSection.title}
          </h1>
          <p
            className={
              isDark
                ? "dark-mode subTitle achievement-subtitle"
                : "subTitle achievement-subtitle"
            }
          >
            {achievementSection.subtitle}
          </p>
        </motion.div>
        <motion.div className="achievement-cards-div" variants={stagger(0.12, 0.1)}>
          {achievementSection.achievementsCards.map((card, i) => {
            return (
              <motion.div key={i} variants={slideUp}>
                <AchievementCard
                  isDark={isDark}
                  cardInfo={{
                    title: card.title,
                    description: card.subtitle,
                    image: card.image,
                    footer: card.footerLink
                  }}
                />
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
