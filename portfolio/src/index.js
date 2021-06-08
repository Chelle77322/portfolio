import React from 'react';
import ReactDOM from 'react-dom';
import App from "./App";
import "./index.scss";
import * as serviceWorker from './serviceWorker';

//adding my imports
import Navbar from "../src/components/navbar.jsx";
import Footer from "../src/components/footer.jsx";
//import Projects from "./components/Projects/projects";
import 'bootstrap/dist/css/bootstrap.css';


ReactDOM.render(
	<React.StrictMode>
	<Navbar />
	  <App />
	 <Footer />
	  </React.StrictMode>
	,document.getElementById("root")
  );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();