"use client";
import { LanguageContext } from "@/contexts/LanguageContext";
import Link from "next/link";
import React, { useState, useEffect, useContext, useCallback } from "react";

const NavBar: React.FC = () => {
  const { lang } = useContext(LanguageContext);

  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = useCallback(() => {
    if (typeof window !== "undefined") {
      if (window.scrollY > lastScrollY) {
        // if scroll down hide the navbar
        setShow(false);
      } else if (window.scrollY <= lastScrollY) {
        // if scroll up show the navbar
        setShow(true);
      }

      // remember current page location to use in the next move
      setLastScrollY(window.scrollY);
    }
  }, [lastScrollY, setShow, setLastScrollY]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);

      // cleanup function
      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    }
  }, [controlNavbar]);
  return (
    <nav className={`hidden w-full sticky animate-fade-down animate-delay-1000 z-10  bg-transparent px-4 transition-all lg:block  ${show ? 'top-[2rem]' : 'top-[-200px]'}`}>
      <div className="container shadow-xl rounded-lg mx-auto flex justify-center flex-col sm:flex-row bg-white px-6 py-2 lg:w-2/6 md:w-full md:text-sm ">
        <Link
          href="#about-us"
          className="block py-2 pl-3 pr-4 text-gray-500 font-semibold transition hover:scale-105"
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
      </div>
    </nav>
  );
};

export default NavBar;
