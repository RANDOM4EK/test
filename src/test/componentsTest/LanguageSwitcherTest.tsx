import React, { useContext } from "react";
import LanguageContextTest from "../contextTest/LanguageContextTest";

const LanguageSwitcherTest: React.FC = () => {
  const context = useContext(LanguageContextTest);
  if (!context) {
    throw new Error("LanguageSwitcher must be used within a LanguageProvider");
  }

  const { language, toggleLanguage } = context;

  return (
    <div>
      <p>Current Language: {language}</p>
      <select onChange={toggleLanguage} value={language}>
        <option value="en">English</option>
        <option value="ru">Русский</option>
      </select>
    </div>
  );
};

export default LanguageSwitcherTest;
