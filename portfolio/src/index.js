import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

//adding my imports
import Navbar from "../src/components/navbar.jsx";
import Footer from "../src/components/footer.jsx";
import 'bootstrap/dist/css/bootstrap.css';
import "../src/styles/index.scss";

ReactDOM.render(
	<React.Fragment>
		<Navbar />
		<Footer />
	</React.Fragment>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();