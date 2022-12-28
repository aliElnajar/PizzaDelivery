import { Box, CircularProgress, Container, Divider } from "@mui/material";
import React, { useState, useEffect } from "react";
import SingleProduct from "./Item";
import database from "./Firebase";
const MenuItems = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const unsubscribe = database
      .collection("menuItems")
      .onSnapshot((snapshot) =>
        setItems(snapshot.docs.map((item) => item.data()))
      );
    return () => unsubscribe();
  }, []);
  return (
    <Container
      maxWidth="lg"
      sx={{
        bgcolor: "#da674b",
        p: "30px 0 20px",
        borderRadius: "10px",
        my: "50px",
      }}
    >
      <Box>
        {items.length ? (
          items.map((product, i) => (
            <div key={product.id}>
              <SingleProduct product={product} />
              {i === items.length - 1 ? null : <Divider />}
            </div>
          ))
        ) : (
          <CircularProgress size="70px" sx={{ ml: "50%", color: "#468C98" }} />
        )}
      </Box>
    </Container>
  );
};

export default MenuItems;
