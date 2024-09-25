import React from "react";
import "./LanguageFabButton.css";
import {useTranslation} from "react-i18next";
import enIcon from "../../assets/images/en-icon.png";
import esIcon from "../../assets/images/es-icon.png";

export default function LanguageFabButton() {
  const {i18n} = useTranslation("common");
  const [useEnglish, setUseEnglish] = React.useState(true);

  function TopEvent() {
    if (i18n.language === "en") {
      i18n.changeLanguage("es");
      setUseEnglish(false);
    } else {
      i18n.changeLanguage("en");
      setUseEnglish(true);
    }
  }

  return (
    <button onClick={TopEvent} id="languageFabButton" title="Change Language">
      <img
        src={useEnglish ? enIcon : esIcon}
        alt={useEnglish ? "English" : "Spanish"}
        className="language-icon"
      />
    </button>
  );
}