import React, { useContext } from "react";
import LanguageContextTest from "../contextTest/LanguageContextTest";

const Footer: React.FC = () => {

    const products = {
        en: ['Apple', 'Banana', 'Cherry'],
        ru: ['Яблоко', 'Банан', 'Вишня'],
    };

    const context = useContext(LanguageContextTest);

    if (!context) {
        throw new Error("Footer must be used within a LanguageProvider");
    }

    const { language } = context;
    return (
        <div>
            {language === "en" 
                ? products[language].map(item => <p key={item}>{item}</p>) 
                : products['ru'].map(item => <p key={item}>{item}</p>)}
        </div>
    );
};

export default Footer;
