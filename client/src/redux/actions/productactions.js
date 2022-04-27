import axios from "axios";
import { ADD_PRODUCT_FAIL, ADD_PRODUCT_SUCCESS, GET_ALL_PRODUCTS_FAIL, GET_ALL_PRODUCTS_SUCCESS, LOAD_PRODUCTS } from "../actionstypes/productconst";

export const getAllProducts = () => async (dispatch) => {
    dispatch({ type: LOAD_PRODUCTS });
    try {
      const response = await axios.get("http://localhost:7000/product/");
      dispatch({ type: GET_ALL_PRODUCTS_SUCCESS, payload: response.data });
      console.log(response.dataS)
    } catch (error) {
      console.log(error);
      dispatch({ type: GET_ALL_PRODUCTS_FAIL, payload: error });
    }
  };
  export const addProduct = (newProduct, navigate) => async (dispatch) => {
    try {
      const opts = {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      };
      const response = await axios.post(
        "http://localhost:7000/product/addProduct",
        newProduct,opts
      );
      console.log(response);
      dispatch({ type: ADD_PRODUCT_SUCCESS });
      dispatch(getAllProducts());
      navigate("/");
    } catch (error) {
      console.dir(error);
      dispatch({ type: ADD_PRODUCT_FAIL, payload: error });
    }
  };