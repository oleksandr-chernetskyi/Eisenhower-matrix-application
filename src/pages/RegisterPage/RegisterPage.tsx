import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FormData } from '../../Type/FormData';
import axios, { AxiosError } from 'axios';

import '../../style/auth-page.scss';

export const RegisterPage: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    email: '',
    password: '',
    repeatPassword: '',
    firstName: '',
    lastName: '',    
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleRegister = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const response = await axios.post('http://192.168.0.101:8080/api/auth/register', formData);
      console.log(response.data);
    } catch (error: unknown) { // Додано тип 'unknown' для змінної error
      if (axios.isAxiosError(error)) {
        const axiosError = error as AxiosError; // Приведення типу до AxiosError
        if (axiosError.response) {
          // Відповідь була отримана, але вона містить помилку статусу
          console.error('Response error:', axiosError.response.data);
        } else if (axiosError.request) {
          // Відповідь не було отримано, запит був зроблений, але нічого не отримано
          console.error('Request error:', axiosError.request);
        } else {
          // Щось пішло не так під час налаштування запиту
          console.error('Error:', axiosError.message);
        }
      } else {
        // Якщо помилка не є AxiosError
        console.error('Unknown error:', error);
      }
    }
  };

  return (
    <div className="container background">
      <div className="auth-page">
        <form onSubmit={handleRegister} className='auth-page__form'>
          <div className='auth-page__form--item'>
            <input 
              type="text" 
              placeholder=" " 
              id="FirstName"
              className="auth-page__input" 
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              required
            />
            <label className="auth-page__input--label" htmlFor="FirstName">First name</label>
          </div>
          <div className='auth-page__form--item'>
            <input 
              type="text" 
              className="auth-page__input" 
              placeholder=" "
              name="lastName"
              id="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              required
            />
            <label className="auth-page__input--label" htmlFor="LastName">Last name</label>
          </div>
          <div className='auth-page__form--item'>          
            <input 
              type="email" 
              placeholder="" 
              className="auth-page__input" 
              name="email"
              id="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
            <label className="auth-page__input--label" htmlFor="email">E-mail</label>
          </div>
          <div className='auth-page__form--item'>
            <input 
              type="password" 
              placeholder=" " 
              className="auth-page__input" 
              name="password" 
              id="password" 
              value={formData.password}
              onChange={handleInputChange}
              required
            />
            <label className="auth-page__input--label" htmlFor="password">Password</label>
          </div>
          <div className='auth-page__form--item'>
            <input 
              type="password" 
              placeholder=" "
              className="auth-page__input" 
              name="repeatPassword"
              id="repeatPassword"
              value={formData.repeatPassword}
              onChange={handleInputChange}
              required
            />
            <label className="auth-page__input--label" htmlFor="repeatPassword">Confirm Password</label>
          </div>
          <button 
            type="submit"
            className='auth-page__button' 
          >
            Sign Up
          </button>
        </form>
        <p className='auth-page__text'>
          Already have an account? <Link to="/signin" className='auth-page__text--link'>Sign in</Link>
        </p>
      </div>
    </div>
  );
};
