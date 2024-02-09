"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect, useContext } from "react";
import NavBarMobile from "./NavBarMobile";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { LanguageContext } from "@/contexts/LanguageContext";

const Header: React.FC = () => {
  const [isHidden, setIsHidden] = useState(false);
  const { lang, setEnglish, setSpanish } = useContext(LanguageContext);

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
        setIsHidden(false)
      }
      // remember current page location to use in the next move
      setLastScrollY(window.scrollY);
    }
  };


  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== "undefined") {
        if (window.scrollY > lastScrollY) {
          // if scroll down hide the navbar
          setShow(false);
        } else {
          // if scroll up show the navbar
          setShow(true);
          setIsHidden(false);
        }
        // remember current page location to use in the next move
        setLastScrollY(window.scrollY);
      }
    };
  
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);
  
      // cleanup function
      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    }
  }, [lastScrollY, setShow, setIsHidden]);

  return (
    <header
      className={`sticky w-screen animate-fade-right flex justify-between mx-auto px-4 py-4 mb-[50px] item-center z-30 bg-white transition-all shadow-xl lg:relative ${
        show ? "top-0" : "top-[-200px]"
      }`}
    >
      <Image
        alt="logo"
        src={"/logo.png"}
        width={251}
        height={56}
        className="w-[100px] sm:w-[251px]"
      />
      <nav className="flex gap-x-4 items-center">
        <section>
          <button
            className={`mr-2 hover:scale-95 transition-all px-3 py-1 rounded shadow-md ${
              lang === "en" ? "bg-[orange] hover:bg-orange-500" : "bg-gray-200 hover:bg-gray-400"
            }`}
            onClick={setEnglish}
          >
            ENG
          </button>
          <button
            className={` py-1 hover:scale-95 transition-all px-3 rounded shadow-md  ${
              lang === "en" ? "bg-gray-200 hover:bg-gray-400" : "bg-[orange] hover:bg-orange-500"
            }`}
            onClick={setSpanish}
          >
            ESP
          </button>
        </section>
        <Link
          href={"#contact-us"}
          className="bg-blue-500 hover:bg-blue-700 hover:scale-95 transition-all py-1 px-2 shadow-md rounded uppercase text-white hidden lg:block"
        >
          {lang === "en" ? "Contact" : "Contacto"}
        </Link>
        <button 
          className="text-lg lg:hidden"
          onClick={() => setIsHidden((prev) => !prev)}
        >
          {isHidden ? <AiOutlineClose /> : <AiOutlineMenu />}
        </button>
      </nav>
      <div
        className={`fixed transition-all ${
          show && isHidden ? "right-[0px]" : "right-[-200px]"
        }`}
      >
        <NavBarMobile />
      </div>
    </header>
  );
};

export default Header;
