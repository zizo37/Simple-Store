import React from 'react';
import { Link } from 'react-router-dom';

export default function Nav() {
  return (
    <>
      <Link to="/">ProductList</Link><br />
      <Link to="/product">Product</Link><br />
    </>
  );
}