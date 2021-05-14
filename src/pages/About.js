import React,  {Component} from 'react';
import Card from '../components/Container/Card';
import Footer from '../components/Footer/Footer';



export default class About extends Component {
  render() {
    return(
      <>

       <Card>
  <h3 className = "h3">About Me</h3>
  <div className = "callout-large">
      <div className = "col-md-6">
      <p>Innovative approach towards developing apps, with a focus on practicality and future growth.</p>
            <p>My aim for each  web development project I work on is to deliver a product to my audience that improves their user experience and productivity.</p>
      </div>
      </div>
      </Card>
      <div className = "callout large">
        <div className ="hero-section">
          <h3 className ="h3">Work</h3>
          <p>I thrive in situations that present unique challenges. Whilst most people find it hard to draw comparisions from a varied skill set I find that each and every skill I have acquired can be transfered to each situation.
          </p>
</div>
</div>


   <Footer/>
  
</>
    );
  }
}


