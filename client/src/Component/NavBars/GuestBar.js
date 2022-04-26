import React from 'react'
import { Button, Navbar } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";

const GuestBar = () => {
  return (
    <div><Navbar.Text>
   
      <Link
        to="/login"
        style={{ color: "inherit", textDecoration: "inherit" }}
      > <Button variant="light" className="mx-1">
        Login  </Button>
      </Link>
  
  </Navbar.Text>
  <Navbar.Text>
    
      <Link
        style={{ color: "inherit", textDecoration: "inherit" }}
        to="/register"
      ><Button variant="light" className="mx-1">
        Register</Button>
      </Link>
    
  </Navbar.Text></div>
  )
}

export default GuestBar