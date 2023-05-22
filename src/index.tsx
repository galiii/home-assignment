import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './utils/reportWebVitals';




const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const connectedApp = (<React.StrictMode>
  <App />
</React.StrictMode>)

root.render(
  connectedApp
);





reportWebVitals();
