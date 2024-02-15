import React from 'react';
import {
  HashRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';

import { App } from './App';
import { HomePage } from './pages/HomePage';
import { LoginPage } from './pages/LoginPage';
import { RegisterPage } from './pages/RegisterPage';
import { ErrorPage } from './pages/ErrorPage';

export const Root = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<HomePage />} />
          <Route path="home" element={<Navigate to="/" replace />} />
          <Route path="signin" element={<LoginPage />} />
          <Route path="signup" element={<RegisterPage />} />

          <Route path="*" element={<ErrorPage />} />
        </Route>

      </Routes>
    </Router>
  );
};
