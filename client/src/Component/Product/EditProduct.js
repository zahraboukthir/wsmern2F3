import * as React from "react";

import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";

import Box from "@mui/material/Box";

import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useDispatch, useSelector } from "react-redux";

import { useNavigate, useParams } from "react-router-dom";
import { editProduct, getOneProduct } from "../../redux/actions/productactions";
const EditProduct = () => {
  const oldProduct = useSelector((state) => state.productReducer.productEdit);
  const [product, setProduct] = React.useState(oldProduct);
  console.log(product);
  const { id } = useParams();
  React.useEffect(() => {
    dispatch(getOneProduct(id));
  }, []);
  React.useEffect(() => {
    setProduct(oldProduct);
  }, [oldProduct]);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const theme = createTheme();
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData();
    // eslint-disable-next-line no-console
    data.append('file',product.image);
    data.append('name',product.name);
    data.append('price',product.price);
    data.append('qte',product.qte);
    console.log({

      data
    });
    dispatch(editProduct(data, id, navigate));
  };
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography component="h1" variant="h5">
              Edit Product
            </Typography>
            <Box
              component="form"
              onSubmit={handleSubmit}
              noValidate
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="Name"
                label="Name Product"
                name="name"
                value={product.name}
                onChange={(e) =>
                  setProduct({ ...product, name: e.target.value })
                }
                autoComplete="no"
                autoFocus
              />
              <TextField
                margin="normal"
                fullWidth
                name="price"
                label="Price"
                type="Number"
                id="price"
                autoComplete="current-password"
                value={product.price}
                onChange={(e) =>
                  setProduct({ ...product, price: e.target.value })
                }
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="qte"
                label="Quantity"
                type="Number"
                id="qte"
                autoComplete="current-password"
                value={product.qte}
                onChange={(e) =>
                  setProduct({ ...product, qte: e.target.value })
                }
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="file"
                label="Image"
                type="file"
                id="file"
                onChange={(e) =>
                  setProduct({ ...product, image: e.target.files[0] })
                }
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Save
              </Button>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
    </div>
  );
};

export default EditProduct;
