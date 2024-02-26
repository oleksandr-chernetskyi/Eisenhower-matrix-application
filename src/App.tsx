import React from 'react';

import './style/main.scss';
import { Outlet, useLocation } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer/Footer';

export const App: React.FC = () => {
  const location = useLocation();

  const isProfilePage = location.pathname.includes('/profile');

  return (
    <>
        {isProfilePage 
      ? (
        <div className='profile'>
          <Header />
            <main>
              <Outlet />
            </main>
        </div>
      ) : (
        <>
          <Header />
            <main>
              <Outlet />
            </main>
          <Footer />
        </>
      )}
    </>
  );
};
