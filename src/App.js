import React from 'react';
import { Route } from "react-router-dom";
import './App.css';
import { Home, About, Contact, Navigation } from './components';
 


const App = () => (
  <div>

    <Navigation />
    
    <Route exact path="/" render={
      () => {
        return ( <h1>Welcome Home</h1>);
      }
    }/>

    <Route path="/about" render={
      () => {
        return ( <h1>About</h1>);
      }
    }/>

    <Route path="/contact" render={
      () => {
        return ( <h1>Contact</h1>);
      }
    }/>
    </div>
);

export default App;
