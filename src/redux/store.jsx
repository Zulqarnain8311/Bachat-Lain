import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice"; // Import the default reducer from cartSlice

export const store = configureStore({
  reducer: {
    cart: cartReducer, // This should reference `cartReducer` not `cartSlice`
  },
});
