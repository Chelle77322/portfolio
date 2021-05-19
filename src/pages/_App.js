import React, {Component} from 'react';
import Header from '../components/Header/Header';
import Container from '../components/Container/Container';
import Footer from '../components/Footer/Footer';
import Navigation from '../components/Navigation/Navigation';
import Wrapped from '../components/Wrapped';


export default class Apply extends Component {
  render(){
 return(
      <>
      <Wrapped>
   <Header />
   <Navigation/>
   <Container>
      
      <div className = "row">
       
          {this.props.children}
          </div> 
          </Container>
       <Footer/>  
       
        </Wrapped>
      
      </>
    );
  }
}