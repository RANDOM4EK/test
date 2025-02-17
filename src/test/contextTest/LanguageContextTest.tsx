import  { createContext } from 'react'

interface LanguageTextType {
    language:string,
    toggleLanguage: () => void;
}

const LanguageContextTest = createContext<LanguageTextType | undefined>(undefined)

export default LanguageContextTest
