import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer"
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Services from "./Pages/Services/Services";
import Contact from "./Pages/Contact/Contact";
import './App.css';



function App() {
  return (
    <Router> 
      <Header/>
      <switch>
      <Route exact path="/"  component={Home} />
          <Route path='/About' component={About} />
          <Route path="/Services" component={Services} />
          <Route path="/Contact" component={Contact} />
      </switch>
      <Footer/>
    </Router>
    
    
    
      
   
   
  );
}

export default App;
