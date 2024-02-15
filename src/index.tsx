import React from 'react';
import ReactDOM from 'react-dom';
import { Root } from './Root';

const rootElement = document.getElementById('root');
if (rootElement) {
  ReactDOM.render(
    <Root />,
    rootElement
  );
} else {
  console.error('Root element not found');
}