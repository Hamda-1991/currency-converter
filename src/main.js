import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './style.css'; // Optional: Add global styles if needed

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('app') // Ensure `id="app"` exists in your HTML
);
