"use client";
import { LanguageContext } from "@/contexts/LanguageContext";
import Link from "next/link";
import React, { useState, useEffect, useContext } from "react";

const NavBarMobile: React.FC = () => {
  const { lang } = useContext(LanguageContext);


  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY > lastScrollY) {
        // if scroll down hide the navbar
        setShow(false);
      } else {
        // if scroll up show the navbar
        setShow(true);
      }

      // remember current page location to use in the next move
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    const controlNavbar = () => {
      // ... tu lógica actual
    };
  
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);
  
      // cleanup function
      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    }
  }, []);

  return (
    <nav className="lg:hidden block absolute z-10 bg-transparent top-[5rem] right-0 px-4">
      <div className="container shadow-xl rounded-lg mx-auto flex justify-between flex-col bg-white px-6 py-2 lg:w-1/2">
        <Link
          href="#about-us"
          className="block py-2 pl-3 pr-4 text-gray-500 font-semibold transition hover:scale-105 uppercase"
          aria-current="page"
        >
          {lang === "en" ? "ABOUT US" : "NOSOTROS"}
        </Link>
        <Link
          href="#services"
          className="block py-2 pl-3 pr-4  text-gray-500 font-semibold transition hover:scale-105 "
        >
          {lang === "en" ? "SERVICES" : "SERVICIOS"}
        </Link>
        <Link
          href="#projects"
          className="block py-2 pl-3 pr-4  text-gray-500 font-semibold transition hover:scale-105 "
        >
          {lang === "en" ? "PROJECTS" : "PROYECTOS"}
        </Link>
        <Link
          href="#news"
          className="block py-2 pl-3 pr-4  text-gray-500 font-semibold transition hover:scale-105 "
        >
          {lang === "en" ? "NEWS" : "NOTICIAS"}
        </Link>
        <Link
          href="#contact-us"
          className="block py-2 pl-3 pr-4  text-gray-500 font-semibold transition hover:scale-105 "
        >
          {lang === "en" ? "CONTACT" : "CONTACTO"}
        </Link>
      </div>
    </nav>
  );
};

export default NavBarMobile;
