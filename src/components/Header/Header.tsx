import React from "react";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
import cn from "classnames";

import "../../style/Header.scss"

export const Header = () => {
  const location = useLocation();

  const isSignInPage = location.pathname === '/signin';
  const isSignUpPage = location.pathname === '/signup';

  return (
    <>
    {(isSignInPage || isSignUpPage)
      && (
        <div className="container">
          <div className="nav-for-authentication">
            <NavLink 
              to="/signin" 
              className={cn('nav-for-authentication__link', {
                'nav-for-authentication__link--act': isSignInPage,
              })}
            >
              Sign in
            </NavLink>
            <NavLink 
              to="/signup" 
              className={cn('nav-for-authentication__link', {
                'nav-for-authentication__link--act': isSignUpPage,
              })}
            >
              Sign up
            </NavLink>
          </div>
        </div>
      )
    }
    </>
  )
};
