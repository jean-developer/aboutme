import React, {useState, createRef} from "react";
import "./ExperienceCard.css";
import ColorThief from "colorthief";
import {useTranslation} from "react-i18next";

export default function ExperienceCard({cardInfo, isDark, index}) {
  const [colorArrays, setColorArrays] = useState([]);
  const imgRef = createRef();
  const {t} = useTranslation("common");

  function getColorArrays() {
    const colorThief = new ColorThief();
    setColorArrays(colorThief.getColor(imgRef.current));
  }

  function rgb(values) {
    return typeof values === "undefined"
      ? null
      : "rgb(" + values.join(", ") + ")";
  }

  const GetDescBullets = ({descBullets, isDark}) => {
    return descBullets
      ? descBullets.map((item, i) => (
          <li
            key={i}
            className={isDark ? "subTitle dark-mode-text" : "subTitle"}
          >
            {item}
          </li>
        ))
      : null;
  };

  const GetDelimitedDates = ({dates, isDark}) => {
    const translatedDate = t(dates);
    return translatedDate && translatedDate.split(";").length > 0
      ? translatedDate.split(";").map((splittedDate, i) => (
          <h5
            key={i}
            className={
              isDark
                ? "experience-text-date dark-mode-text"
                : "experience-text-date"
            }
          >
            {splittedDate.trim()}
          </h5>
        ))
      : translatedDate
        ? translatedDate
        : null;
  };

  return (
    <article className={`experience-entry ${isDark ? "experience-entry-dark" : ""}`}>
      <div className="experience-rail">
        <span className="experience-rail-dot">{index + 1}</span>
      </div>
      <div className={isDark ? "experience-card-dark" : "experience-card"}>
        <div style={{background: rgb(colorArrays)}} className="experience-banner">
          <div className="experience-blurred_div"></div>
          <div className="experience-banner-header">
            <div className="experience-company-wrap">
              <img
                crossOrigin={"anonymous"}
                ref={imgRef}
                className="experience-roundedimg"
                src={cardInfo.companylogo}
                alt={cardInfo.company}
                onLoad={() => getColorArrays()}
              />
              <div>
                <h5 className="experience-text-company">{t(cardInfo.company)}</h5>
                <p className="experience-text-contractType">{t(cardInfo.contractType)}</p>
              </div>
            </div>
            <div className="experience-date-wrap">
              <GetDelimitedDates dates={cardInfo.date} isDark={isDark} />
            </div>
          </div>
        </div>
        <div className="experience-text-details">
          <h5
            className={
              isDark
                ? "experience-text-role dark-mode-text"
                : "experience-text-role"
            }
          >
            {t(cardInfo.role)}
          </h5>
          <p className={isDark ? "experience-highlight dark-mode-text" : "experience-highlight"}>
            {t(cardInfo.highlight)}
          </p>
          <p
            className={
              isDark
                ? "subTitle experience-text-desc dark-mode-text"
                : "subTitle experience-text-desc"
            }
          >
            {t(cardInfo.desc)}
          </p>
          <ul className="experience-bullet-list">
            <GetDescBullets descBullets={cardInfo.descBullets} isDark={isDark} />
          </ul>
        </div>
      </div>
    </article>
  );
}
