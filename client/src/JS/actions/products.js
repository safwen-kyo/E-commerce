import {
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCT_SUCCESS,
  GET_PRODUCTS_Fail,
  GET_PRODUCT_Fail,
  GET_PRODUCTS_LOAD,
  GET_PRODUCT_LOAD,
  DELETE_PRODUCT,
  GET_PRODUCT,
  POST_PRODUCT,
  POST_PRODUCT_FAILD,
  GET_SEARCHED,
  PRODUCT_ERROR,
} from "../constants/constant";

import axios from "axios";

//  Get all Product for Client & Admin
export const getProducts = (search) => async (dispatch) => {
  dispatch({
    type: GET_PRODUCTS_LOAD,
  });
  try {
    if (!search) {
      let result = await axios.get(`/api/admin/`);
      // console.log(result);
      dispatch({
        type: GET_PRODUCTS_SUCCESS,
        payload: result.data.res,
      });
    } if(search) {
      let result = await axios.get(`/api/admin/${search}`);
      // console.log(result);
      dispatch({
        type: GET_SEARCHED,
        payload: result.data.res,
      });
    }
  } catch (error) {
    dispatch({
      type: GET_PRODUCTS_Fail,
      payload: error,
    });
  }
};
// get by categories
//
export const getByCategories = (categories) => async (dispatch) => {
  dispatch({
    type: GET_PRODUCTS_LOAD,
  });
  try {
    if (!categories) {
      let result = await axios.get(`/api/admin/categories/${categories}`);
      // console.log(result);
      dispatch({
        type: GET_PRODUCTS_SUCCESS,
        payload: result.data.res,
      });
    } if(categories) {
      let result = await axios.get(`/api/admin/categories/${categories}`);
      // console.log(result);
      dispatch({
        type: GET_SEARCHED,
        payload: result.data.res,
      });
    }
  } catch (error) {
    dispatch({
      type: GET_PRODUCTS_Fail,
      payload: error,
    });
  }
};

// Delete Product Admin
// export const deleteProduct = (_id = (dispatch) => {
//   axios
//     .delete(`/api/products/${_id}`)
//     .then((res) => dispatch(getProducts()))
//     .catch((err) => console.log(err));
// });
export const deleteProduct = (id) => async (dispatch) => {
  try {
    let result = await axios.delete(`/api/admin/${id}`);
    alert(result.data.message);
    dispatch(getProducts());
  } catch (error) {
    console.log(error);
  }
};

export const getProduct = (id) => async (dispatch) => {
  dispatch({
    type: GET_PRODUCT_LOAD,
  });
  try {
    let result = await axios.get(`/api/admin/find/${id}`);
    dispatch({
      type: GET_PRODUCT,
      payload: result.data.res,
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: GET_PRODUCTS_Fail,
      payload: error,
    });
  }
};
export const postProduct = (produit) => async (dispatch) => {
  try {
    let result = await axios.post("/api/admin/", produit);
    // console.log("reducerpost state is", produit);
    dispatch(getProducts());
    alert(result.data.message);
  } catch (error) {
      
      dispatch({ type: POST_PRODUCT_FAILD, payload: error.response.data });
    
  }
};

export const editProduct = (id, produit) => async (dispatch) => {
  try {
    let result = await axios.put(`/api/admin/${id}`, produit);
    alert(result.data.message);
    dispatch(getProducts());
  } catch (error) {
    console.log(error);
  }
};
