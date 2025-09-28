import React, {createRef, useContext} from "react";
import {motion} from "framer-motion";
import "./EducationCard.css";
import StyleContext from "../../contexts/StyleContext";
import {useTranslation} from "react-i18next";
import {defaultViewport, fadeIn, slideUp} from "../../utils/animations";
export default function EducationCard({school}) {
  const imgRef = createRef();

  const {t} = useTranslation("common");
  const GetDescBullets = ({descBullets}) => {
    return descBullets
      ? descBullets.map((item, i) => (
          <li key={i} className="subTitle">
            {item}
          </li>
        ))
      : null;
  };
  const {isDark} = useContext(StyleContext);
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={defaultViewport}
      variants={fadeIn}
    >
      <motion.div className="education-card" variants={slideUp}>
        <div className="education-card-left">
          <img
            crossOrigin={"anonymous"}
            ref={imgRef}
            className="education-roundedimg"
            src={school.logo}
            alt={school.schoolName}
          />
        </div>
        <div className="education-card-right">
          <h5 className="education-text-school">{t(school.schoolName)}</h5>

          <div className="education-text-details">
            <h5
              className={
                isDark
                  ? "dark-mode education-text-subHeader"
                  : "education-text-subHeader"
              }
            >
              {t(school.subHeader)}
            </h5>
            <p
              className={`${
                isDark ? "dark-mode" : ""
              } education-text-duration`}
            >
              {school.duration}
            </p>
            <p className="education-text-desc">{school.desc}</p>
            <div className="education-text-bullets">
              <ul>
                <GetDescBullets descBullets={school.descBullets} />
              </ul>
            </div>
          </div>
        </div>
      </motion.div>
      <motion.div className="education-card-border" variants={slideUp}></motion.div>
    </motion.div>
  );
}
