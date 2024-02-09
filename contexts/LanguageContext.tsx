"use client";
import React, { createContext, useState } from "react";

type Lang = "es" | "en";

interface LanguageState {
  lang: Lang;
  setEnglish: () => void;
  setSpanish: () => void; 
}

export const LanguageContext = createContext<LanguageState>({
  lang: "en",
  setEnglish: () => {},
  setSpanish: () => {},
});

interface Props {
  children: React.ReactNode;
}

const LanguageProvider: React.FC<Props> = ({ children }) => {
  const [lang, setLang] = useState<Lang>("en");
  const setEnglish = () => setLang("en");
  const setSpanish = () => setLang("es");

  return (
    <LanguageContext.Provider value={{ lang, setEnglish, setSpanish }}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageProvider;
