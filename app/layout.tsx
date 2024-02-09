import Header from "@/components/Header";
import "./globals.css";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import LanguageProvider from "@/contexts/LanguageContext";
import NavBar from "@/components/NavBar";

const poppins = Montserrat({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "AeraTek Website",
  description: "Conecting the World",
};

export default  function RootLayout(
  {
  children,
}: {
  children: React.ReactNode;
}) {

  

  return (
    <html lang="en" className="!scroll-smooth overflow-x-hidden">
      <head>
        <link rel="icon" href="/logofav.png" />
        <link rel="apple-touch-icon" href="/logofav.png" />
        <meta name="theme-color" content="orange" />
        <meta name="msapplication-navbutton-color" content="orange" />
        <meta name="apple-mobile-web-app-status-bar-style" content="orange" />
        <meta
          name="description"
          content="Pagina Web de AeraTek"
        />
        <meta name="keywords" content="AeraTek" />
        <meta name="author" content="AeraTek" />
        <title>AeraTek</title>
      </head>
      <body className={poppins.className}>
        <LanguageProvider>
          <Header />
          <NavBar />
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
