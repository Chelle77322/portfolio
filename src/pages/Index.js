import React from 'react';
//import PropTypes from 'prop-types';
import Navbar from '../components/Navigation/Navigation';
import Jumbotron from '../components/Container/Jumbo';
import Card from '../components/Container/Card';
//import Icon from '../components/Container/Icon'
import Footer from '../components/Footer/Footer';

const Home = () => (
    <div>
        <Navbar />
<Jumbotron phrase="Developing Innovative Designs" subtitle= "A designer knows they have achieved perfection, not when there is nothing left to add, but when there is nothing left to take away"/>
<Card>
<h3>Web Applications</h3>
<hr />
<div className = "row">
    <div className = "col-md-6">
        <p>This is where  web app highlight reel</p>
    </div>
    <div className = "col-md-6">
        <p>This is where  web app highlight reel</p>
    </div>
</div>
</Card>
<Card>
<h3>Websites</h3>
<hr/>
<div className = "row">
    <div className = "col-md-6">
        <p>This is where  front end highlight reel</p>
    </div>
    <div className = "col-md-6">
        <p>This is where  front end highlight reel</p>
    </div>
</div>
</Card>
<Card>
<div className = "row">
    <div className = "col-md-6">
        <p>Command Line Interface Highlight</p>
    </div>
    <div className = "col-md-6">
        <p>Command Linen Interface Highlight</p>
    </div>
</div>
</Card>
<Footer />
</div>
);
export default Home;