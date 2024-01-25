import React from 'react';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import ProductList from './ProductList';
import Product from './Product';

export default function AppShop() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<ProductList />} />
          <Route path="/product" element={<Product />} /> 
        </Routes>
      </BrowserRouter>
    </div>
  )
}