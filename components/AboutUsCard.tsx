"use client";
import { LanguageContext } from "@/contexts/LanguageContext";
import { AboutUs } from "@/interfaces/AboutUs";
import React, { useContext } from "react";

interface Props {
  aboutUs: AboutUs;
}

const AboutUsCard: React.FC<Props> = ({ aboutUs }) => {
  const { lang } = useContext(LanguageContext);
  return (
    <div 
      className="container mx-auto relative sm:top-[0px] sm:px-[100px] p-6 bg-white border border-gray-300 shadow-xl rounded-lg lg:hover:scale-90 transition-all"
      id="about-us"
    >
      <h3 className="mb-2 text-2xl font-bold tracking-tight text-blue-600 uppercase text-center">
        {lang === "en" ? aboutUs.title || "ABOUT US" : aboutUs.titulo || "NOSOTROS"}
      </h3>

      <p className="mb-3 text-gray-600 text-center font-bold text-[20px]">
        {lang === "en" ? aboutUs.body || "" : aboutUs.cuerpo || ""}
      </p>
    </div>
  );
};

export default AboutUsCard;
