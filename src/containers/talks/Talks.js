import React, {useContext} from "react";
import {motion} from "framer-motion";
import "./Talks.css";
import TalkCard from "../../components/talkCard/TalkCard";
import {talkSection} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";
import {defaultViewport, fadeIn, slideUp, stagger} from "../../utils/animations";

export default function Talks() {
  const {isDark} = useContext(StyleContext);
  if (!talkSection.display) {
    return null;
  }
  return (
    <motion.section
      className="main"
      id="talks"
      initial="hidden"
      whileInView="show"
      viewport={defaultViewport}
      variants={fadeIn}
    >
      <motion.div className="talk-header" variants={stagger(0.16, 0.12)}>
        <motion.h1 className="talk-header-title" variants={slideUp}>
          {talkSection.title}
        </motion.h1>
        <motion.p
          className={
            isDark
              ? "dark-mode talk-header-subtitle"
              : "subTitle talk-header-subtitle"
          }
          variants={slideUp}
        >
          {talkSection.subtitle}
        </motion.p>
        {talkSection.talks.map((talk, i) => {
          return (
            <motion.div key={i} variants={slideUp}>
              <TalkCard
                talkDetails={{
                  title: talk.title,
                  subtitle: talk.subtitle,
                  slides_url: talk.slides_url,
                  event_url: talk.event_url,
                  image: talk.image,
                  isDark
                }}
              />
            </motion.div>
          );
        })}
      </motion.div>
    </motion.section>
  );
}
