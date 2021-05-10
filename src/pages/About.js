import React,  {Component} from 'react';
import Navigation from  '../components/Navigation/Navigation';
import Jumbo from '../components/Container/Jumbo';
import Icon from '../components/Container/Icon';
import Footer from '../components/Footer/Footer';
import './src/main.css'


export default class About extends Component {
  render() {
    return(
      <>
       <Navigation />
       <Jumbo phrase="Michelle Hall: FullStack Web Developer" subtitle="Leveraging an IT and AV background to build a more intuitive user experience on the web" />
  <h3>About Me</h3>
  <div className = "row">
      <div className = "col-md-6">
      <p>Innovative approach towards developing apps, with a focus on practicality and future growth.</p>
            <p>My aim for each  web development project I work on is to deliver a product to my audience that improves their user experience and productivity.</p>
      </div>
      </div>
      <div class="row">
        <div class="medium-4 columns">
          <h3 class="h3">Work</h3>
          <p>I thrive in situations that present unique challenges. Whilst most people find it hard to <br>draw comparisions from a varied skill set I find that each and every skill I have acquired can be transfered to each situation.</br>
          </p>
</div>
</div>

   <Footer/>
  
</>
    );
  }
}


