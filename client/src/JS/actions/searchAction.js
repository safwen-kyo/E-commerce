import axios from "axios";
import { GET_SEARCHED, PRODUCT_ERROR } from "../constants/search";
// const initialState = {
//   product: [],
//   loading: true,
//   error: {},
// };
export const getSearched = (search) => async (dispatch) => {
  try {
    const result = await axios.get(
      `http://localhost:4000/api/admin/search/${search}`
    );

    dispatch({
      type: GET_SEARCHED,
      payload: result.data.res,
    });
  } catch (err) {
    dispatch({
      type: PRODUCT_ERROR,
      payload: { msg: err.response.data.msg, status: err.response.status },
    });
  }
};

