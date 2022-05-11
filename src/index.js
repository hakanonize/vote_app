import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import { LinkProvider } from './context/contexts/LinkContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <LinkProvider>
    <App />
  </LinkProvider>
);
