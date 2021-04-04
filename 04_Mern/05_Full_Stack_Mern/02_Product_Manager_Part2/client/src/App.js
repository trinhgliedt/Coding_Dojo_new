import React from 'react';
import Products from './views/Products';
import SingleProduct from './views/SingleProduct';
import ProductForm from './components/ProductForm';
import { Link, Redirect, Router } from "@reach/router";

import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Products path="/products"/>
        <ProductForm path="/products/create"/>
        <SingleProduct path="/products/:id"/>
        <Redirect from="/" to="/products" noThrow="true" />
      </Router>
    </div>
  );
}

export default App;
