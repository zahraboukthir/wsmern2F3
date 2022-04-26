import React from "react";
import { Button, Navbar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "./../../redux/actions/useractions";

const AuthBar = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.userReducer.currentUser);
  return (
    <div>
      <Navbar.Text>
        Signed in as:{" "}
        <Link to="/dashboard"> {currentUser && currentUser.fullName}</Link>
      </Navbar.Text>
      <Button
        onClick={() => dispatch(logout())}
        variant="danger"
        className="m-2"
      >
        Logout
      </Button>
    </div>
  );
};

export default AuthBar;
