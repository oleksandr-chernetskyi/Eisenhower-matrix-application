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
        {/* Форма для входу */}
        <form onSubmit={handleLogin} className='auth-page__form'>
          <input 
            type="email" 
            placeholder="E-mail" 
            className='auth-page__input' 
            required
          />
          <input 
            type="password" 
            placeholder="Password"
            className='auth-page__input' 
            required
          />
          <button
            type="submit"
            className='auth-page__button' 
          >
            Sign in
          </button>
        </form>
        {/* Посилання на сторінку реєстрації */}
        <p className='auth-page__text'>
          Don't have an account? <Link to="/signup" className='auth-page__text--link'>Sing up</Link>
        </p>
      </div>
    </div>    
  );
};
