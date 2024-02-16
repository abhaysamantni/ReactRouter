import React from "react";
import { Link, Outlet } from "react-router-dom";

const Products = () => {
  return (
    <div>
      <h1><Link to="/products">List Of Products</Link></h1>
      <Outlet />
    </div>
  );
};

export default Products;
