"use client";
import React, { useState, useContext } from "react";
import Image from "next/image";
import { LanguageContext } from "@/contexts/LanguageContext";
import { Footer } from "@/interfaces/Footer";
import Link from "next/link";

interface Props {
  Footer: Footer;
}

const Footer: React.FC<Props> = ({ Footer }) => {
  const { lang } = useContext(LanguageContext);

  return (
    <footer className="bg-2nd-footer-color text-white">
      <section className="sm:px-12 px-4 bg-1st-footer-color py-7">
        <article className="mx-auto container grid grid-cols-1 sm:grid-cols-2">
          <div className="flex flex-col items-center md:items-start border-e border-white">
            <Image
              alt="logo"
              src={"/whitelogo.png"}
              width={251}
              height={56}
              className="w-[100px] sm:w-[251px] flex items-center py-2"
            />
            <h3 className="text-justify px-5 my-4">
              {lang === "en" ? Footer.title || "" : Footer.titulo || ""}
            </h3>

            <p className="text-justify px-5 my-4">
              {lang === "en" ? Footer.body || "" : Footer.cuerpo || ""}
            </p>
          </div>

          <div>
            <h3 className="text-justify px-5 my-4">
              {lang === "en" ? Footer.title || "" : Footer.titulo || ""}
            </h3>
            <p className="text-justify px-5 mb-4 md:mb-0">
              {lang === "en" ? Footer.body || "" : Footer.cuerpo || ""}
            </p>
          </div>
        </article>
      </section>

      <div className="flex container mx-auto flex-col items-center md:flex-row md:justify-between text-white text-sm py-2">
        <span>
          Copyright AeraTek © 2023.
          {lang === "en" ? " All rights reserved." : " Derechos Reservados."}
        </span>
        <div className="flex justify-end items-center">
          <span>{lang === "en" ? " Designed By: " : " Diseñado Por: "}</span>
          <Link target="_blank" href="http://www.stardustdev.tech/">
            <Image
              alt="logo"
              src={"/logodev.png"}
              width={50}
              height={50}
              className="w-[100px] sm:w-[100px] flex items-center py-2 ml-2"
            />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
