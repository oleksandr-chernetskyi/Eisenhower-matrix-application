import React from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App';

const element = document.getElementById('root');

if (element) {
  createRoot(element).render(<App />);
} else {
  console.error("Element with id 'root' not found");
}
