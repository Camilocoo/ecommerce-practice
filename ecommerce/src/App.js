import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Cart from "./components/Cart";
import Default from "./components/Default";
import Details from "./components/Details";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import {Switch,Route} from "react-router-dom";
import Modal from "./components/Modal"

import { faStroopwafel,faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';

library.add(faStroopwafel, faCartPlus);


function App() {
  return (
        <React.Fragment>
        <Navbar/>
        <Modal/>
            <Switch>
                <Route exact path="/" component={ProductList}/>
                <Route exact path="/details" component={Details}/>
                <Route exact path="/cart" component={Cart}/>
                <Route  component={Default}/>
            </Switch>

        </React.Fragment>
  );
}

export default App;
