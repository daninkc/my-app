import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import {BrowserRouter, Switch, Route } from 'react-router-dom';
import { homePage, contactInfo, finishedJobs, getBudget } from './routes/index';
import Home from './components/Home';

function App() {
  return (
    <BrowserRouter>  
  <header>
        <NavBar/>
          </header>
    
          <Switch>
          <Route exact path='/'>
            <Home />   
          </Route>
          <Route exact path='/presupuesto'>
            <getBudget /> 
          </Route>
          <Route exact path='/trabajos'>
            <finishedJobs /> 
          </Route>
          <Route exact path='/contacto'>
              <contactInfo />
          </Route>
        </Switch>
        </BrowserRouter>

      
  );
}

export default App;
