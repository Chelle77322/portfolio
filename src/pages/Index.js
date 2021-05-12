import React, {Component} from 'react';
import Navigation from '../components/Navigation/Navigation';
import Jumbo from '../components/Container/Jumbo';
import Footer from '../components/Footer/Footer';

export default class Home extends Component {
    render(){
        return (
        <>
        <Navigation />    
        <div className="callout large">
        <div className="row column text-center">
          <h1 className = "h1">Developing Innovative Designs</h1>
          <p className="lead">The key is agility</p>
          
        </div>
      </div>

  <Jumbo>
  <div className="hero-section">
    <div className="hero-section-text">
      
      <h3 className = "h3">A designer knows they have achieved perfection not when there is nothing left to add
        but when there is nothing left to take away.</h3>
     </div>
    </div>
    </Jumbo>
    <Footer />
    </>
        );
    }
}

