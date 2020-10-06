import React from 'react';
import './App.css';
import Neareststore from './components/neareststore';
import  "bootstrap/dist/css/bootstrap.min.css"
import Navbar from './components/navbar';
import {BrowserRouter as Router,Route,Switch} from "react-router-dom";
import Itemlist from './components/itemlist';
import home from './components/home';
import Products from './components/products'
function App() {
  return (
    <div className="App">
      <Router>
      <Navbar/>
      <Route path="/" exact component={home}/>
      <Route path="/item-list" exact component={Itemlist}/>
      <Route path="/products" exact component={Products}/>
      <Route path="/nearest-store" exact component={Neareststore}/>
      </Router>
    </div>
  );
}

export default App;
