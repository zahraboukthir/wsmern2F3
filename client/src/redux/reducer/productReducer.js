import {
  ADD_PRODUCT_FAIL,
  ADD_PRODUCT_SUCCESS,
  GET_ALL_PRODUCTS_FAIL,
  GET_ALL_PRODUCTS_SUCCESS,
  LOAD_PRODUCTS,
} from "../actionstypes/productconst";

const initialState = {
  loading: false,
  products: [],
  errors: null,
};
export const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOAD_PRODUCTS:
      return { ...state, loading: true };
    case GET_ALL_PRODUCTS_SUCCESS:
      return { ...state, products: payload.allProducts, loading: false };
    case GET_ALL_PRODUCTS_FAIL:
      return { ...state, errors: payload, loading: false };

    case ADD_PRODUCT_FAIL:
      return { ...state, errors: payload };

    default:
      return state;
  }
};
