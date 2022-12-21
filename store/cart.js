import { createSlice } from "@reduxjs/toolkit";
import {
  setDoc,
  collection,
  doc,
  updateDoc,
  onSnapshot,
  getDoc,
} from "firebase/firestore";

const cartSlice = createSlice({
  name: "cart",
  initialState: { cart: [], change: false },
  reducers: {
    addItemToCart(state, action) {
      const existingItem = state.cart.find(
        (item) => action.payload.id === item.id
      );
      state.change = true;
      if (!existingItem) {
        state.cart.push(action.payload);
      } else {
        existingItem.quantity++;
      }
    },
    removeItemfromCart(state, action) {
      const existingItem = state.cart.find(
        (item) => action.payload.id === item.id
      );
      state.change = true;
      if (existingItem.quantity === 1) {
        state.change = true;
        const index = state.cart.findIndex(
          (item) => item.id === action.payload.id
        );
        state.cart.splice(index, 1);
      }
      existingItem.quantity--;
    },
    replaceCart(state, action) {
      state.cart = action.payload;
    },
    toggleItemToCart(state, action) {
      const existingItem = state.cart.find(
        (item) => action.payload.id === item.id
      );
      state.change = true;
      if (!existingItem) {
        state.cart.push(action.payload);
      } else {
        const index = state.cart.findIndex(
          (item) => item.id === action.payload.id
        );
        state.cart.splice(index, 1);
      }
    },
    closeChange() {
      state.change = false;
    },
  },
});

export const sendCartData = (cart, id, db) => {
  return async (dispatch) => {
    const sendRequest = async () => {
      const docRef = doc(db, "users", id);
      const payload = { cart };

      updateDoc(docRef, payload);
    };
    try {
      await sendRequest();
    } catch (error) {
      console.log(error.message);
    }
  };
};

export const getCartData = (id, db) => {
  return async (dispatch) => {
    const getRequest = async () => {
      const docRef = doc(db, "users", id);
      const docSnap = await getDoc(docRef);
      return docSnap.data().cart;
    };
    try {
      const data = await getRequest();
      console.log(data);
      dispatch(cartActions.replaceCart(data || []));
    } catch (error) {
      console.log(error.message);
    }
  };
};

export default cartSlice.reducer;
export const cartActions = cartSlice.actions;
