import React, {useContext} from "react";
import {motion} from "framer-motion";
import "./Podcast.css";
import {podcastSection} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";
import {defaultViewport, fadeIn, slideUp, stagger} from "../../utils/animations";

export default function Podcast() {
  const {isDark} = useContext(StyleContext);
  if (!podcastSection.display) {
    return null;
  }
  return (
    <motion.section
      className="main"
      initial="hidden"
      whileInView="show"
      viewport={defaultViewport}
      variants={fadeIn}
    >
      <motion.div className="podcast-header" variants={slideUp}>
        <h1 className="podcast-header-title">{podcastSection.title}</h1>
        <p
          className={
            isDark
              ? "dark-mode podcast-header-subtitle"
              : "subTitle podcast-header-subtitle"
          }
        >
          {podcastSection.subtitle}
        </p>
      </motion.div>
      <motion.div className="podcast-main-div" variants={stagger(0.16, 0.12)}>
        {podcastSection.podcast.map((podcastLink, i) => {
          return (
            <motion.div key={i} variants={slideUp}>
              <iframe
                className="podcast"
                src={podcastLink}
                frameBorder="0"
                scrolling="no"
                title="Podcast"
              ></iframe>
            </motion.div>
          );
        })}
      </motion.div>
    </motion.section>
  );
}
