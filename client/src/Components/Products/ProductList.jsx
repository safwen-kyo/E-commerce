import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../JS/actions/products";
import { getSearched } from "../../JS/actions/searchAction";
import Product from "./Product";
import "./ProductList.css";

const ProductList = () => {
  const dispatch = useDispatch();
  //Gett ALL Product
  const products = useSelector((state) => state.productReducer.products);

  const loadProducts = useSelector(
    (state) => state.productReducer.loadProducts
  );

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  // console.log(products, loadProducts);
  //  SEARCH DATA
  // products = useSelector((state) => state.SearchProducts.products);
  // console.log("search data", products);
  // const loading = useSelector((state) => state.productReducer.loading);

  // useEffect(() => {
  //   dispatch(getSearched());
  // }, [loading]);

  return (
    <div className="product">
      {loadProducts ? (
        <h2>Loading</h2>
      ) : (
        products.map((el) => <Product key={el._id} product={el} />)
      )}
    </div>
  );
};

export default ProductList;
