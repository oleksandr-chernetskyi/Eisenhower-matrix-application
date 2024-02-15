import React from 'react';
import { Link } from 'react-router-dom';

import '../../style/auth-page.scss';

export const RegisterPage: React.FC = () => {
  const handleRegister = () => {
    // Логіка для обробки реєстрації користувача
  };

  return (
    <div className="container background">
      <div className="auth-page">
        {/* Форма для реєстрації */}
        <form onSubmit={handleRegister} className='auth-page__form'>
          <input 
            type="text" 
            placeholder="First name" 
            className='auth-page__input' 
            required
          />
          <input 
            type="text" 
            placeholder="Last name" 
            className='auth-page__input' 
            required
          />
          <input type="email" placeholder="E-mail" 
            className='auth-page__input' 
            required
          />
          <input 
            type="password" 
            placeholder="Password" 
            className='auth-page__input' 
            required
          />
          <input 
            type="password" 
            placeholder="Confirm Password"
            className='auth-page__input' 
            required
          />
          <button 
            type="submit"
            className='auth-page__button' 
          >
            Sign Up
          </button>
        </form>
        {/* Посилання на сторінку входу */}
        <p className='auth-page__text'>
          Already have an account? <Link to="/signin" className='auth-page__text--link'>Sign in</Link>
        </p>
      </div>
    </div>
  );
};
