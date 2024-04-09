import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
  <h1>Hello, Welcome to my web page</h1>
  <App />
  </div>,
  document.getElementById('root')
);

