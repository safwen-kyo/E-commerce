import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../JS/actions/products";

import { Table, Button } from "react-bootstrap";
import AdminProduct from "./AdminProduct";

const AdminProductList = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.productReducer.products);
  const loadProducts = useSelector(
    (state) => state.productReducer.loadProducts
  );

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  return (
    <>
      {/* <div>
        <p>Dashboard Admin</p>
      </div> */}

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Images</th>
            <th>Product</th>
            <th>Price</th>
            <th>Desponiblity</th>
            <th>Logo Officiel</th>
            <th>Add Product</th>
            <th>Remove Product</th>
            <th>Update Product</th>
          </tr>
        </thead>

        {loadProducts ? (
          <p>rr</p>
        ) : (
          products.map((el) => (
            <AdminProduct key={el._id} product={el}></AdminProduct>
          ))
        )}
      </Table>
    </>
  );
};

export default AdminProductList;
