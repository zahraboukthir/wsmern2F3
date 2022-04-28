import axios from "axios";
import { ADD_PRODUCT_FAIL, ADD_PRODUCT_SUCCESS, DELETE_PRODUCT_FAIL, DELETE_PRODUCT_SUCCESS, EDIT_PRODUCT_FAIL, EDIT_PRODUCT_SUCCESS, GET_ALL_PRODUCTS_FAIL, GET_ALL_PRODUCTS_SUCCESS, GET_PRODUCT_FAIL, GET_PRODUCT_SUCCESS, LOAD_PRODUCTS } from "../actionstypes/productconst";
//get all product public route
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
  //add nwe product : private route for admin user
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
      navigate("/productList");
    } catch (error) {
      console.dir(error);
      dispatch({ type: ADD_PRODUCT_FAIL, payload: error });
    }
  };
// delete product : private route for admin user
  export const deleteProduct = (idProduct) => async (dispatch) => {
    try {
      const opts = {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      };
      const response = await axios.delete(
        `http://localhost:7000/product/delete/${idProduct}`,opts
      );
      console.log(response.data)
      dispatch({ type: DELETE_PRODUCT_SUCCESS });
      dispatch(getAllProducts());

    } catch (error) {
      console.dir(error);
      dispatch({ type: DELETE_PRODUCT_FAIL, payload: error });
    }
  };
// edit product : private route for admin user
  export const editProduct = (Productedit,idProduct,navigate) => async dispatch => {
    try {
      const opts = {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      };
      const response = await axios.put(`http://localhost:7000/product/update/${idProduct}`,Productedit,opts);
      console.log(response)
      dispatch({ type: EDIT_PRODUCT_SUCCESS });
      dispatch(getAllProducts());
      navigate("/productList")
    } catch (error) {
      console.dir(error);
      dispatch({ type: EDIT_PRODUCT_FAIL, payload: error });
    }
  };
  // get product details : public route 
  export const getOneProduct = (idProduct) => async (dispatch) => {
    try {
      const response = await axios.get(
        `http://localhost:7000/product/one/${idProduct}`
      );
      dispatch({ type: GET_PRODUCT_SUCCESS, payload: response.data });
    } catch (err) {
      console.dir(err);
      dispatch({ type: GET_PRODUCT_FAIL, payload: err });
    }
  };