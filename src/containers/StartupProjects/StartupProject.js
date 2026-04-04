import React, {useContext} from "react";
import "./StartupProjects.css";
import {bigProjects} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";
import {
  useTranslation
} from "react-i18next";

export default function StartupProject() {
  function openProjectInNewWindow(url) {
    var win = window.open(url, "_blank", "noopener,noreferrer");
    win.focus();
  }
  const { t } = useTranslation('common');
  const {isDark} = useContext(StyleContext);
  if (!bigProjects.display) {
    return null;
  }
  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="projects">
        <div>
          <h1 className="skills-heading">{t(bigProjects.title)}</h1>
          <p
            className={
              isDark
                ? "dark-mode project-subtitle"
                : "subTitle project-subtitle"
            }
          >
            {t(bigProjects.subtitle)}
          </p>

          <div className="projects-container">
            {bigProjects.projects.map((project, i) => {
              return (
                <div
                  key={i}
                  className={
                    isDark
                      ? "dark-mode project-card project-card-dark"
                      : "project-card project-card-light"
                  }
                  style={{"--project-accent": project.accent}}
                >
                  <div className="project-image-shell">
                    <div className="project-card-topline">
                      <span className="project-card-category">{t(project.category)}</span>
                      <span className="project-card-year">{project.year}</span>
                    </div>
                    {project.image ? (
                      <div className="project-image">
                        <div className="project-device-frame">
                          <div className="project-device-notch"></div>
                          <img
                            src={project.image}
                            alt={t(project.projectName)}
                            className="card-image"
                          ></img>
                        </div>
                      </div>
                    ) : null}
                  </div>
                  <div className="project-detail">
                    <h5
                      className={isDark ? "dark-mode card-title" : "card-title"}
                    >
                      {t(project.projectName)}
                    </h5>
                    <p
                      className={
                        isDark ? "dark-mode card-subtitle" : "card-subtitle"
                      }
                    >
                      {t(project.projectDesc)}
                    </p>
                    {project.metrics ? (
                      <div className="project-metrics">
                        {project.metrics.map((metric, index) => (
                          <span key={index} className={isDark ? "dark-mode project-metric" : "project-metric"}>
                            {t(metric)}
                          </span>
                        ))}
                      </div>
                    ) : null}
                    {project.footerLink ? (
                      <div className="project-card-footer">
                        {project.footerLink.map((link, i) => {
                          return (
                            <button
                              key={i}
                              className={
                                isDark ? "dark-mode project-tag" : "project-tag"
                              }
                              onClick={() => openProjectInNewWindow(link.url)}
                            >
                              {link.name}
                            </button>
                          );
                        })}
                      </div>
                    ) : null}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Fade>
  );
}
