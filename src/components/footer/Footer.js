import React, {useContext} from "react";
import {motion} from "framer-motion";
import "./Footer.css";
import emoji from "react-easy-emoji";
import StyleContext from "../../contexts/StyleContext";
import {defaultViewport, fadeIn, slideUp} from "../../utils/animations";

export default function Footer() {
  const {isDark} = useContext(StyleContext);
  return (
    <motion.footer
      className="footer-div"
      initial="hidden"
      whileInView="show"
      viewport={defaultViewport}
      variants={fadeIn}
    >
      <motion.p
        className={isDark ? "dark-mode footer-text" : "footer-text"}
        variants={slideUp}
      >
        {emoji("Made with ❤️ by Saad Pasta")}
      </motion.p>
      <motion.p
        className={isDark ? "dark-mode footer-text" : "footer-text"}
        variants={slideUp}
      >
        Theme by{" "}
        <a href="https://github.com/saadpasta/developerFolio">developerFolio</a>
      </motion.p>
    </motion.footer>
  );
}
