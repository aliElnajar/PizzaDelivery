import {
  AppBar,
  Badge,
  Button,
  ButtonGroup,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useSelector, useDispatch } from "react-redux";
import { cartActions } from "../../Store/Store";
const Navbar = () => {
  const ItemsQuantity = useSelector((state) => state.totalQuantity);
  const dispatch = useDispatch();
  const handleOpen = () => {
    dispatch(cartActions.openCart());
  };
  return (
    <AppBar
      position="static"
      sx={{
        color: "#faece9",
        backgroundColor: "#da674b",
        p: "20px",
        borderRadius: "5px",
      }}
    >
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          PIZZATION
        </Typography>
        <IconButton aria-label="cart" size="large" onClick={handleOpen}>
          <Badge badgeContent={ItemsQuantity} color="primary">
            <ShoppingCartIcon sx={{ height: "30px", width: "30px" }} />
          </Badge>
        </IconButton>
        <ButtonGroup color="inherit" variant="text" sx={{ ml: "30px" }}>
          <Button>Menu</Button>
          <Button href="#footer">Contact us</Button>
        </ButtonGroup>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
