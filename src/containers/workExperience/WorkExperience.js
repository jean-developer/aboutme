import React, {useContext} from "react";
import {motion} from "framer-motion";
import "./WorkExperience.css";
import ExperienceCard from "../../components/experienceCard/ExperienceCard";
import {workExperiences} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";
import {useTranslation} from "react-i18next";
import {defaultViewport, fadeIn, slideUp, stagger} from "../../utils/animations";
export default function WorkExperience() {
  const {isDark} = useContext(StyleContext);
  const { t } = useTranslation('common');
  if (workExperiences.display) {
    return (
      <motion.section
        id="experience"
        initial="hidden"
        whileInView="show"
        viewport={defaultViewport}
        variants={fadeIn}
      >
        <motion.div
          className="experience-container"
          id="workExperience"
          variants={stagger(0.18, 0.12)}
        >
          <motion.div variants={slideUp}>
            <h1 className="experience-heading">{t("header.experiences")}</h1>
            <motion.div className="experience-cards-div" variants={stagger(0.12, 0.1)}>
              {workExperiences.experience.map((card, i) => {
                return (
                  <motion.div key={i} variants={slideUp}>
                    <ExperienceCard
                      isDark={isDark}
                      cardInfo={{
                        company: card.company,
                        contractType: card.contractType,
                        desc: card.desc,
                        date: card.date,
                        companylogo: card.companylogo,
                        role: card.role,
                        descBullets: card.descBullets
                      }}
                    />
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.section>
    );
  }
  return null;
}
