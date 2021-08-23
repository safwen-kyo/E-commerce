import {
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCT_SUCCESS,
  GET_PRODUCTS_Fail,
  GET_PRODUCT_Fail,
  GET_PRODUCTS_LOAD,
  GET_PRODUCT_LOAD,
  DELETE_PRODUCT,
  GET_PRODUCT,
  POST_PRODUCT_FAILD,
  GET_SEARCHED,
  PRODUCT_ERROR,
} from "../constants/constant";

//intial state
const initialState = {
  products: [],
  loadProducts: false,
  errors: null,
  product: {},
};
//reducers function
export const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_PRODUCTS_LOAD:
      return { ...state, loadProducts: true };
    case GET_PRODUCTS_SUCCESS:
      return { ...state, products: payload, loadProducts: false };
    case GET_SEARCHED:
      return { ...state, products: payload, loadProducts: false };
    case GET_PRODUCTS_Fail:
      return { ...state, loadProducts: false, errors: payload };

    case GET_PRODUCT_LOAD:
      return { ...state, loadProducts: true };

    case POST_PRODUCT_FAILD:
        return { ...state, errors: payload, loading: false }

    case GET_PRODUCTS_Fail:
      return { ...state, loadProducts: false, errors: payload };
    case GET_PRODUCT:
      return { ...state, produit: payload, loadProducts: false };
    default:
      return state;
  }
};
