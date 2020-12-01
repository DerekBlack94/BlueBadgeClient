import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
  // remove bootstrap once pushed??
  
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>

    <div className='reactOverride'>
      <App />
    </div>

  </React.StrictMode>
  ,
  document.getElementById('root')

);

reportWebVitals();
