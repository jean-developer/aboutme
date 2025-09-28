import React, {useContext} from "react";
import {motion} from "framer-motion";
import "./Contact.css";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import {illustration, contactInfo} from "../../portfolio";
import email from "../../assets/lottie/email";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import StyleContext from "../../contexts/StyleContext";
import emoji from "react-easy-emoji";
import {useTranslation} from "react-i18next";
import {defaultViewport, fadeIn, slideUp, stagger} from "../../utils/animations";
export default function Contact() {
  const {isDark} = useContext(StyleContext);
  const {t} = useTranslation("common");
  return (
    <motion.section
      className="main contact-margin-top"
      id="contact"
      initial="hidden"
      whileInView="show"
      viewport={defaultViewport}
      variants={fadeIn}
    >
      <motion.div className="contact-div-main" variants={stagger(0.18, 0.12)}>
        <motion.div className="contact-header" variants={slideUp}>
          <h1 className="heading contact-title">{emoji(t(contactInfo.title))}</h1>
          <p
            className={
              isDark
                ? "dark-mode contact-subtitle"
                : "subTitle contact-subtitle"
            }
          >
            {t(contactInfo.subtitle)}
          </p>
          <div
            className={
              isDark ? "dark-mode contact-text-div" : "contact-text-div"
            }
          >
            {/* <a className="contact-detail" href={"tel:" + contactInfo.number}>
              {contactInfo.number}
            </a>
            <br />
            <br /> */}
            <a
              className="contact-detail-email"
              href={"mailto:" + contactInfo.email_address}
            >
              {contactInfo.email_address}
            </a>
            <br />
            <br />
            <SocialMedia />
          </div>
        </motion.div>
        <motion.div className="contact-image-div" variants={slideUp}>
          {illustration.animated ? (
            <DisplayLottie animationData={email} />
          ) : (
            <img
              alt="Man working"
              src={require("../../assets/images/contactMailDark.svg")}
            ></img>
          )}
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
