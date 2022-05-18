import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useDispatch, useSelector } from "react-redux";

import { Link } from "react-router-dom";
import { deleteProduct } from "../../redux/actions/productactions";

export default function Product({ el }) {
  const dispatch=useDispatch()
  const user=useSelector(state=>state.userReducer.currentUser)
  return (
    <div style={{margin:"10px"}}>
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={el.image}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {el.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {el.createDate} by {el.user.fullName}
        </Typography>
      </CardContent>
     {user&&user.role==="admin"?<CardActions>
       <Link to ={`/edit/${el._id}`} ><Button size="small" >Edit</Button></Link> 
       <Link to="/addProduct">
       <Button size="small" >Add Product</Button>
              </Link>{" "}
        <Button size="small" onClick={()=>dispatch(deleteProduct(el._id))}>Delete</Button>
      </CardActions>:null}
    </Card>
    </div>
  );
}