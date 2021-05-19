import React, {Component} from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Navigation from '../components/Navigation/Navigation';

import Chat from '../pages/Chat_Page';
import '../stylesheets/App.css';
import '../stylesheets/Wrapped.css';

export default class Apply extends Component {
  render(){
 return(
      <>
   <Header />
   <Navigation/>
      
      <div className = "row">
       
          {this.props.children}
          </div> 
       <Footer/>  
        <Chat />
     
      
      </>
    );
  }
}