import React from 'react';
import { Link } from 'react-router-dom';

import "../../style/HomePage.scss";

import lampIcon from "./lamp.svg";
import photo from "./time-menegment.png";

export const HomePage: React.FC = () => {

  return (
    <>
      <div className="container">
        <div className="home-page">        
          <div className="home-page__content">
            <div className="home-page__header">
              <div className="home-page__icon">
                <img src={lampIcon} alt="lamp" className="home-page__icon--lamp" />
              </div>
              <h2 className="home-page__title">EisenhowerMatrix</h2>
            </div>
            <h1 className="home-page__heading">Discover Your</h1>
            <h2 className="home-page__subtitle">Find out what tasks are important and urgent, learn to prioritize</h2>
            <Link to="signin" className='home-page__link'>
              <div className="home-page__button">Start Now</div> 
            </Link>       
          </div>
          <div className="home-page__background">
            <img src={photo} alt="time" className="home-page__photo" />
          </div>
        </div>
      </div>
    </>
  );
};


