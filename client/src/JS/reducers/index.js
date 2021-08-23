import { combineReducers } from "redux";
import { productReducer } from "./products";
import { editReducer } from "./edit";
import { userReducer } from "./user";
import { SearchProducts } from "./searchReducer";
export const rootReducer = combineReducers({
  productReducer,
  editReducer,
  userReducer,
  SearchProducts,
});
