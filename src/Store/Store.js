import { configureStore } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

const getSavedStorage = () => {
  const cartStorage = localStorage.getItem("cartItems");
  if (cartStorage) {
    return JSON.parse(cartStorage);
  }
  return [];
};

const initialState = {
  cartItems: getSavedStorage(),
  totalQuantity: 0,
  totalAmount: 0,
  cartOpen: false,
};
const generalSlice = createSlice({
  name: "generalSlice",
  initialState,
  reducers: {
    addItem(state, action) {
      const duplicate = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (duplicate >= 0) {
        state.cartItems[duplicate].itemQuantity += 1;
      } else {
        const item = { ...action.payload, itemQuantity: 1 };
        state.cartItems.push(item);
      }
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    removeItem(state, action) {
      const selectedItem = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (state.cartItems[selectedItem].itemQuantity > 1) {
        state.cartItems[selectedItem].itemQuantity -= 1;
      } else {
        console.log("deleted");
        state.cartItems = state.cartItems.filter(
          (item) => item.id !== action.payload.id
        );
      }
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    setTotals(state) {
      let totalAmount = 0;
      let totalQuantity = 0;
      state.cartItems.map((item) => {
        const { price, itemQuantity } = item;
        totalAmount += price * itemQuantity;
        totalQuantity += itemQuantity;
      });
      state.totalAmount = totalAmount;
      state.totalQuantity = totalQuantity;
    },
    openCart(state) {
      state.cartOpen = true;
    },
    closeCart(state) {
      state.cartOpen = false;
    },
    resetCart(state) {
      localStorage.removeItem("cartItems");
      state.cartItems = getSavedStorage();
      state.cartOpen = false;
    },
  },
});

export const cartActions = generalSlice.actions;

const Store = configureStore({ reducer: generalSlice.reducer });

export default Store;
