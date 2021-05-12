import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import serviceworker from './serviceworker';

import reportWebVitals from './reportWebVitals';
import WebFont from 'webfontloader';

WebFont.load({
  google: {
    families: ['Limelight:300,400,700', 'sans-serif']
    
  }
});
ReactDOM.render(<App />,
  document.getElementById('root'));

  //Call service worker
  serviceworker();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
