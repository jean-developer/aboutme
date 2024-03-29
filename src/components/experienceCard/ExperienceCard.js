import React, {useState, createRef} from "react";
import "./ExperienceCard.css";
import ColorThief from "colorthief";
import {
  useTranslation
} from "react-i18next";
export default function ExperienceCard({cardInfo, isDark}) {
  const [colorArrays, setColorArrays] = useState([]);
  const imgRef = createRef();
  const {
    t
  } = useTranslation('common');

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
    return translatedDate && translatedDate.split(';').length > 0
      ? translatedDate.split(';').map((splittedDate, i) => (
        <h5
        className={
          isDark
            ? "experience-text-date dark-mode-text"
            : "experience-text-date"
        }
      >
        {splittedDate}
      </h5>
      ))
      : (translatedDate) ? translatedDate : null;
  };

  return (
    <div className={isDark ? "experience-card-dark" : "experience-card"}>
      <div style={{background: rgb(colorArrays)}} className="experience-banner">
        <div className="experience-blurred_div"></div>
        <div className="experience-div-company">
          <h5 className="experience-text-company">{t(cardInfo.company)}</h5>
        </div>

        <img
          crossOrigin={"anonymous"}
          ref={imgRef}
          className="experience-roundedimg"
          src={cardInfo.companylogo}
          alt={cardInfo.company}
          onLoad={() => getColorArrays()}
        />
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
        <p
          className={
            isDark
              ? "experience-text-contractType dark-mode-text"
              : "experience-text-contractType"
          }
        >
          {t(cardInfo.contractType)}
        </p>
        <GetDelimitedDates dates={cardInfo.date} isDark={isDark} />
        <p
          className={
            isDark
              ? "subTitle experience-text-desc dark-mode-text"
              : "subTitle experience-text-desc"
          }
        >
          {t(cardInfo.desc)}
        </p>
        <ul>
          <GetDescBullets descBullets={cardInfo.descBullets} isDark={isDark} />
        </ul>
      </div>
    </div>
  );
}
