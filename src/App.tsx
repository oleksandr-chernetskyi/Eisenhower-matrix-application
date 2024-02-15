import React from 'react';

import './style/main.scss';
import { Outlet } from 'react-router-dom';
import { Header } from './components/Header';

export const App: React.FC = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
};
