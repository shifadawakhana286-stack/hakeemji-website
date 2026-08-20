"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

import en from "@/locales/en";
import hi from "@/locales/hi";
import ur from "@/locales/ur";

type Language = "en" | "hi" | "ur";

const translations = {
  en,
  hi,
  ur,
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: typeof en;
}

const LanguageContext =
  createContext<LanguageContextType | null>(null);

export function LanguageProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [language, setLanguage] =
    useState<Language>("en");

  useEffect(() => {
    const saved =
      localStorage.getItem("language") as Language;

    if (saved) {
      setLanguage(saved);
    }
  }, []);

  const changeLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem("language", lang);
  };

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage: changeLanguage,
        t: translations[language],
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => {
  const context = useContext(LanguageContext);

  if (!context)
    throw new Error(
      "useLanguage must be used inside LanguageProvider"
    );

  return context;
};