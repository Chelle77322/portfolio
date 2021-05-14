import React from 'react';
import ReactDOM from 'react-dom';

import '../src/stylesheets/index.css';
import App from './App';
import serviceworker from './serviceworker';

import reportWebVitals from './reportWebVitals';
import WebFont from 'webfontloader';

WebFont.load({
  google: {
    families: ['Limelight:300,400,700', 'sans-serif']
    
    
  }
});
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

  //Call service worker
  serviceworker();

// If you want to start measuring performance in your app, pass a function

reportWebVitals();
