import React from "react";
import "./Education.css";
import EducationCard from "../../components/educationCard/EducationCard";
import {educationInfo} from "../../portfolio";
import {
  useTranslation
} from "react-i18next";
export default function Education() {
  const { t, i18n } = useTranslation('common');
  if (educationInfo.display) {
    return (
      <div className="education-section" id="education">
        <h1 className="education-heading">{t('header.education')}</h1>
        <div className="education-card-container">
          {educationInfo.schools.map(school => (
            <EducationCard school={school} />
          ))}
        </div>
      </div>
    );
  }
  return null;
}
