import { Button, IconButton, Stack, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { cartActions } from "../Store/Store";
import { useDispatch } from "react-redux";

const ItemButtons = ({ buttons, product }) => {
  const { price, itemQuantity } = product;
  const dispatch = useDispatch();
  const addHandler = () => {
    dispatch(cartActions.addItem(product));
  };

  const removeHandler = () => {
    dispatch(cartActions.removeItem(product));
  };

  if (buttons)
    return (
      <Stack
        direction="row"
        spacing={1}
        alignItems="center"
        justifyContent="center"
        width="15vw"
      >
        <IconButton onClick={removeHandler} size="large">
          <RemoveIcon
            sx={{ width: "30px", height: "30px", color: "#faece9" }}
          />
        </IconButton>
        <Typography variant="h6">{itemQuantity}</Typography>
        <IconButton onClick={addHandler} size="large">
          <AddIcon sx={{ width: "30px", height: "30px", color: "#faece9" }} />
        </IconButton>
        <Typography variant="h5" color="#faece9">
          ${(price * itemQuantity).toFixed(2)}
        </Typography>
      </Stack>
    );

  return (
    <Stack direction="row" alignItems="center" spacing={1}>
      <Button
        variant="contained"
        sx={{ p: "10px 15px", backgroundColor: "#468C98" }}
        onClick={addHandler}
      >
        add to cart
      </Button>
      <Typography> ${price}</Typography>
    </Stack>
  );
};

export default ItemButtons  ;
