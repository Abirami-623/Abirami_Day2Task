import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // Optional: Add global styles here if needed.
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root') // This matches the <div id="root"></div> in public/index.html
);
