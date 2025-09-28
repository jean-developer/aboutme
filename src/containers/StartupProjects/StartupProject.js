import React, {useContext} from "react";
import {motion} from "framer-motion";
import "./StartupProjects.css";
import {bigProjects} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";
import {useTranslation} from "react-i18next";
import {defaultViewport, fadeIn, slideUp, stagger} from "../../utils/animations";

export default function StartupProject() {
  function openProjectInNewWindow(url) {
    var win = window.open(url, "_blank");
    win.focus();
  }
  const {t} = useTranslation("common");
  const {isDark} = useContext(StyleContext);
  if (!bigProjects.display) {
    return null;
  }
  return (
    <motion.section
      className="main"
      id="projects"
      initial="hidden"
      whileInView="show"
      viewport={defaultViewport}
      variants={fadeIn}
    >
      <motion.div variants={stagger(0.18, 0.12)}>
        <motion.h1 className="skills-heading" variants={slideUp}>
          {t(bigProjects.title)}
        </motion.h1>
        <motion.p
          className={
            isDark ? "dark-mode project-subtitle" : "subTitle project-subtitle"
          }
          variants={slideUp}
        >
          {t(bigProjects.subtitle)}
        </motion.p>

        <motion.div className="projects-container" variants={stagger(0.14, 0.1)}>
          {bigProjects.projects.map((project, i) => {
            return (
              <motion.div
                key={i}
                className={
                  isDark
                    ? "dark-mode project-card project-card-dark"
                    : "project-card project-card-light"
                }
                variants={slideUp}
              >
                {project.image ? (
                  <div className="project-image">
                    <img
                      src={project.image}
                      alt={t(project.projectName)}
                      className="card-image"
                    ></img>
                  </div>
                ) : null}
                <div className="project-detail">
                  <h5 className={isDark ? "dark-mode card-title" : "card-title"}>
                    {t(project.projectName)}
                  </h5>
                  <p
                    className={
                      isDark ? "dark-mode card-subtitle" : "card-subtitle"
                    }
                  >
                    {t(project.projectDesc)}
                  </p>
                  {project.footerLink ? (
                    <div className="project-card-footer">
                      {project.footerLink.map((link, linkIndex) => {
                        return (
                          <span
                            key={linkIndex}
                            className={
                              isDark ? "dark-mode project-tag" : "project-tag"
                            }
                            onClick={() => openProjectInNewWindow(link.url)}
                          >
                            {link.name}
                          </span>
                        );
                      })}
                    </div>
                  ) : null}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
