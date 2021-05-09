import Header from "./components/Header/Header";
import Jumbo from "./components/Container/Jumbo";
import Card from "./components/Container/Card";

import './App.css';

function App() {
  return (
    <div className="App">
     <Header/>
    
 
    <div className = "App-background">
     
       
      <Jumbo>
      <Card/>
      </Jumbo>
      
        
    </div>
    
    
    </div>
  
  );
}

export default App;
