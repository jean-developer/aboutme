import React, {useContext} from "react";
import Headroom from "react-headroom";
import "./Header.css";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import StyleContext from "../../contexts/StyleContext";
import {
  greeting,
  workExperiences,
  skillsSection,
  openSource,
  blogSection,
  talkSection,
  achievementSection,
  educationInfo,
  bigProjects
} from "../../portfolio";
import {
  useTranslation
} from "react-i18next";

function Header() {
  const {isDark} = useContext(StyleContext);
  const viewExperience = workExperiences.display;
  const viewEducation = educationInfo.display;
  const viewOpenSource = openSource.display;
  const viewProjects = bigProjects.display;
  const viewSkills = skillsSection.display;
  const viewAchievement = achievementSection.display;
  const viewBlog = blogSection.display;
  const viewTalks = talkSection.display;
  const { t, i18n } = useTranslation('common');

  return (
    <Headroom>
      <header className={isDark ? "dark-menu header" : "header"}>
        <a href="/aboutme" className="logo">
          <span className="grey-color"> &lt;</span>
          <span className="logo-name">{greeting.username}</span>
          <span className="grey-color">/&gt;</span>
        </a>
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label
          className="menu-icon"
          htmlFor="menu-btn"
          style={{color: "white"}}
        >
          <span className={isDark ? "navicon navicon-dark" : "navicon"}></span>
        </label>
        <ul className={isDark ? "dark-menu menu" : "menu"}>
           { 
           viewSkills && (
            <li>
              <a href="#skills">{t('header.skills')}</a>
            </li>
          )}
          <li>
            <a href = "#proficiency" > {
              t('skillProgress.skillProgressTitle')
            } </a>  
            </li>
            {viewEducation && (
            <li>
              <a href="#education">{t('header.education')}</a>
            </li>
          )}
          {viewExperience && (
            <li>
              <a href="#experience">{t('header.experiences')}</a>
            </li>
          )}
           {viewProjects && (
            <li>
              <a href="#projects">{t('header.projects')}</a>
            </li>
          )}
          {/*
          {viewOpenSource && (
            <li>
              <a href="#opensource">{t('header.opensource')}</a>
            </li>
          )}
          {viewAchievement && (
            <li>
              <a href="#achievements">{t('header.achievements')}</a>
            </li>
          )}
          {viewBlog && (
            <li>
              <a href="#education">{t('header.education')}</a>
            </li>
          )} */}
          {/* {viewTalks && (
            <li>
              <a href="#talks">Talks</a>
            </li>
          )} */}
          <li>
            <a href="#contact">{t('header.contactme')}</a>
          </li>
          <li>
            <a href="#">
              {/* < ToggleSwitch / > */}
            </a>
          </li>
        </ul>
      </header>
    </Headroom>
  );
}
export default Header;
