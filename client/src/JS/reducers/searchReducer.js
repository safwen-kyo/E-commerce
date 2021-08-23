import { PRODUCT_ERROR,GET_SEARCHED} from '../constants/search'
const initialState = {
    products: [],
    loading: true,
    error: {}
  };
 export const SearchProducts= (state=initialState,{type,payload})=>{
    switch(type){
        case PRODUCT_ERROR:
      return { ...state,
        error: payload,
        loading: false
      };
        case GET_SEARCHED:
      return { ...state ,
      products:payload,
      loading :false
      };
        default :
      return state ;
     }
  }