import React from 'react';
import ReactDOM from 'react-dom/client';
import App from 'components/app/App';
import './index.css';
// import { BrowserRouter } from 'react-router-dom';
import { HashRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter 
    basename="/goit-react-hw-05-movies"
    >
      <App />
    </HashRouter>
  </React.StrictMode>
);
