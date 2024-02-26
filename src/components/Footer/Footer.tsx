import React from "react";
import "../../style/Footer.scss"
import { useLocation } from "react-router-dom";

export const Footer = () => {
  const location = useLocation();

  const isHomePage = location.pathname === '/'

  return (
    !isHomePage 
      && (
      <footer className="footer">
        <p className="footer__text">&copy; {new Date().getFullYear()} Vira Sheludko & Alexander Chernetskyi. All rights reserved.</p>
      </footer>
    )
  );
};
