import React from 'react';
import { Link } from 'react-router-dom';

import '../../style/auth-page.scss';

export const LoginPage: React.FC = () => {
  const handleLogin = () => {
    // Логіка для обробки входу користувача
  };

  return (
    <div className="container background">
      <div className="auth-page">
        <form onSubmit={handleLogin} className='auth-page__form'>
          <div className='auth-page__form--item'>
            <input 
              type="email" 
              name="email" 
              id="Email" 
              placeholder=" " 
              className='auth-page__input' 
              required
            />
            <label className="auth-page__input--label" htmlFor="Email">E-mail</label>
          </div>
          <div className='auth-page__form--item'>
            <input 
              type="password" 
              placeholder=""
              id="Password"
              name="Password"
              className='auth-page__input' 
              required
            />
            <label className="auth-page__input--label" htmlFor="Password">Password</label>
          </div>
          <button
            type="submit"
            className='auth-page__button' 
          >
            Sign in
          </button>
        </form>
        <p className='auth-page__text'>
          Don't have an account? <Link to="/signup" className='auth-page__text--link'>Sing up</Link>
        </p>
      </div>
    </div>    
  );
};
