import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cart";
import wishlistReducer from "./wishlist";
import filterReducer from "./filter";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    wishlist: wishlistReducer,
    filter: filterReducer,
  },
});

export default store;
