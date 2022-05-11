import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./Component/Home";

import NavigationBar from "./Component/NavBars/NavigationBar";
import SignUp from "./Component/AuthForms/SignUp";
import SignIn from "./Component/AuthForms/SignIn";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getUser } from "./redux/actions/useractions";
import PrivateRoute from "./Component/PrivateRoute/index";
import DashboardClient from "./Component/PrivateRoute/Dashbords/DashboardClient";
import DashbooardAdmin from "./Component/PrivateRoute/Dashbords/DashbooardAdmin";
import AddProduct from "./Component/Product/AddProduct";
import ProductList from "./Component/Product/ProductList";
import { getAllProducts } from "./redux/actions/productactions";
import EditProduct from "./Component/Product/EditProduct";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUser());
    dispatch(getAllProducts());
  }, [dispatch]);

  return (
    <div className="App">
      <NavigationBar />
      <Routes>
        <Route path="/register" element={<SignUp />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/" element={<Home />} />
        <Route
          path="/productList"
          element={
            <div>
              
              <ProductList />{" "}
              <Link to="/addProduct">
                {localStorage.getItem("token") ? (
                  <button>ADD PRODUCT</button>
                ) : null}
              </Link>{" "}
            </div>
          }
        />
        <Route
          path="/addProduct"
          element={
            <PrivateRoute>
              <AddProduct />
            </PrivateRoute>
          }
        />
        <Route path="/edit/:id" element={<EditProduct />} />
        <Route
          path="/dachboardClient"
          element={
            <PrivateRoute>
              <DashboardClient />
            </PrivateRoute>
          }
        />
        <Route
          path="/dachboardAdmin"
          element={
            <PrivateRoute>
              <DashbooardAdmin />
            </PrivateRoute>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
