import React, {Component} from 'react';
//import { NavLink } from 'react-router-dom';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Jumbo from '../components/Container/Jumbo';
import Navigation from '../components/Navigation/Navigation';
import Chat from '../pages/Chat_Page';




export default class Apply extends Component {
  render(){

    return(
      <>
      <Header />
      <Navigation />
   <Jumbo phrase="Michelle Hall: FullStack Web Developer" subtitle="Leveraging an IT and AV background to build a more intuitive user experience on the web" />   
  <div>
        <div>
          {this.props.children}
        </div>
        <Chat />
      <Footer/>
      </div>
      </>
    );
  }
}