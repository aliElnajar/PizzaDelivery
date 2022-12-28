import { Box, Stack, Typography } from "@mui/material";
import { cartActions } from "../Store/Store";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import ProductButtons from "./ItemButtons";

const Item = ({ product, buttons }) => {
  const cartItems = useSelector((state) => state.cartItems);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(cartActions.setTotals());
  }, [cartItems]);

  const { name, ingredients, price, url } = product;
  return (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="space-between"
      py={2}
      px={2}
      color="#faece9"
    >
      <img
        src={url}
        alt="pizza"
        style={{
          width: "160px",
          height: "100px",
          overflow: "hidden",
          borderRadius: "20px",
        }}
      />
      <Stack ml={1} spacing={2} flexGrow="1" alignSelf="flex-start">
        <Typography variant="h5" fontWeight="bold">
          {name}
        </Typography>
        <Typography variant="body1" component="span">
          {ingredients}
        </Typography>
      </Stack>
      <Box>
        <ProductButtons price={price} product={product} buttons={buttons} />
      </Box>
    </Stack>
  );
};

export default Item;
