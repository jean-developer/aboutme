import React from "react";
import "./LanguageFabButton.css";
import {
  useTranslation
} from "react-i18next";

export default function LanguageFabButton() {
  const [useEnglish, setUseEnglish] = React.useState(true)
  function TopEvent() {
    if(i18n.language === "en") {
      i18n.changeLanguage('es');
      setUseEnglish(false)
    }else{
      i18n.changeLanguage('en');
      setUseEnglish(true)
    }
  }
  // When the user scrolls down 20px from the top of the document, show the button
  // function scrollFunction() {
  //   if (
  //     document.body.scrollTop > 20 ||
  //     document.documentElement.scrollTop > 20
  //   ) {
  //     document.getElementById("languageFabButton").style.visibility = "visible";
  //   } else {
  //     document.getElementById("languageFabButton").style.visibility = "hidden";
  //   }
  // }
  // window.onscroll = function () {
  //   scrollFunction();
  // };
  // window.onload = function () {
  //   scrollFunction();
  // }; //To make sure that this button is not visible at starting.
  // When the user clicks on the button, scroll to the top of the document
  return (
    <button onClick={TopEvent} id="languageFabButton" title = "Go to top" >
      {useEnglish ? <p style={{margin:'5px'}}>EN</p> : <p style={{margin:'5px'}}>ES</p>}
    </button>
  );
}
