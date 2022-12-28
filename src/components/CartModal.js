import { Box, Button, Divider, Modal, Stack, Typography } from "@mui/material";
import Form from "./Form";
import { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { cartActions } from "../Store/Store";
import SingleProduct from "./Item";
import undraw_empty_cart from "../helpers/undraw_empty_cart_co.svg";
const CartModal = () => {
  const { cartItems, totalAmount, cartOpen } = useSelector((state) => state);
  const formRef = useRef();
  const dispatch = useDispatch();

  const handleCloseCart = () => {
    dispatch(cartActions.closeCart());
  };

  const handleClearCart = () => {
    dispatch(cartActions.resetCart());
  };
  return (
    <Modal
      open={cartOpen}
      onClose={handleCloseCart}
      sx={{
        width: "900px",
        mx: "auto",
        my: "40px",
        backgroundColor: "#da674b		",
        padding: "20px",
        textAlign: "center",
        borderRadius: "20px",
        overflow: "scroll",
      }}
      className="hide__scroll"
    >
      {!cartItems.length ? (
        <Box>
          <img src={undraw_empty_cart} width="500px" alt="empty_cart_img" />
          <Typography variant="h2" my="30px" color="#faece9">
            your cart is empty <br /> now
          </Typography>
          <Button
            variant="contained"
            sx={{
              ...btn_classes,
            }}
            onClick={handleCloseCart}
            size="large"
          >
            Fill it
          </Button>
        </Box>
      ) : (
        <Box
          width="100%"
          mt={2}
          sx={{ display: "flex", flexDirection: "column", gap: "30px" }}
        >
          <Box>
            <Typography variant="h3" mb={4} color="#f1c6bc">
              your cart items
            </Typography>
            {cartItems?.map((item) => (
              <Box key={item.id}>
                <SingleProduct product={item} buttons={1} />
                <Divider color="#e38d78" />
              </Box>
            ))}
          </Box>

          <Box
            sx={{
              borderRadius: "8px",
              mx: "auto",
              color: "#faece9",
              border: "1px solid #e38d78",
              padding: "10px 5px",
              width: "500px",
            }}
          >
            <Typography variant="h5">Total amount</Typography>
            <Typography variant="h5" my={1}>
              ${totalAmount.toFixed(2)}
            </Typography>
            <Stack direction="row" justifyContent="space-around" py="10px">
              <Button
                variant="contained"
                color="error"
                onClick={handleClearCart}
              >
                clear cart
              </Button>
              <Button
                variant="contained"
                sx={{
                  ...btn_classes,
                }}
                onClick={() =>
                  formRef.current.scrollIntoView({ behavior: "smooth" })
                }
              >
                Fill your info
              </Button>
            </Stack>
          </Box>
          <Box ref={formRef} paddingx="5px" mt="30px">
            <Form totalAmount={totalAmount} cartItems={cartItems} />
          </Box>
        </Box>
      )}
    </Modal>
  );
};

export default CartModal;

const btn_classes = {
  bgcolor: "white",
  color: "#FA8072",
  ":hover": { backgroundColor: "white" },
};
