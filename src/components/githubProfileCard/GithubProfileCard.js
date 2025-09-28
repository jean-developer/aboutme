import React from "react";
import {motion} from "framer-motion";
import "./GithubProfileCard.css";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import {contactInfo} from "../../portfolio";
import emoji from "react-easy-emoji";
import {useTranslation} from "react-i18next";
import {defaultViewport, fadeIn, slideUp, stagger} from "../../utils/animations";

export default function GithubProfileCard({prof}) {
  const {t} = useTranslation("common");
  if (prof.hireable === true) {
    prof.hireable = "Yes";
  } else {
    prof.hireable = "No";
  }
  return (
    <motion.section
      className="main"
      id="contact"
      initial="hidden"
      whileInView="show"
      viewport={defaultViewport}
      variants={fadeIn}
    >
      <motion.h1 className="prof-title" variants={slideUp}>
        Reach Out to me!
      </motion.h1>
      <motion.div className="row" variants={stagger(0.18, 0.12)}>
        <motion.div className="main-content-profile" variants={slideUp}>
          <div className="blog-header">
            <p className="subTitle blog-subtitle">{t(contactInfo.subtitle)}</p>
          </div>
          <h2 className="bio-text">"{emoji(String(prof.bio))}"</h2>
          {prof.location !== null && (
            <div className="location-div">
              <span className="desc-prof">
                <svg
                  viewBox="0 0 12 16"
                  version="1.1"
                  width="20"
                  height="18"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M6 0C2.69 0 0 2.5 0 5.5 0 10.02 6 16 6 16s6-5.98 6-10.5C12 2.5 9.31 0 6 0zm0 14.55C4.14 12.52 1 8.44 1 5.5 1 3.02 3.25 1 6 1c1.34 0 2.61.48 3.56 1.36.92.86 1.44 1.97 1.44 3.14 0 2.94-3.14 7.02-5 9.05zM8 5.5c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"
                  ></path>
                </svg>
                {prof.location}
              </span>
            </div>
          )}
          <div className="opp-div">
            <span className="desc-prof">
              Open for opportunities: {prof.hireable}
            </span>
          </div>
          <SocialMedia />
        </motion.div>
        <motion.div className="image-content-profile" variants={slideUp}>
          <img src={prof.avatarUrl} alt={prof.name} className="profile-image" />
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
