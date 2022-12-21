import { createSlice } from "@reduxjs/toolkit";
import {
  setDoc,
  collection,
  doc,
  updateDoc,
  onSnapshot,
  getDoc,
} from "firebase/firestore";

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState: { wishlist: [], change: false },
  reducers: {
    toggleItemToWishlist(state, action) {
      const existingItem = state.wishlist.find(
        (item) => action.payload.id === item.id
      );
      state.change = true;
      if (!existingItem) {
        state.wishlist.push(action.payload);
        action.payload.wishlist = true;
      } else {
        action.payload.wishlist = false;
        const index = state.wishlist.findIndex(
          (item) => item.id === action.payload.id
        );
        state.wishlist.splice(index, 1);
      }
    },

    replaceWishlist(state, action) {
      state.wishlist = action.payload;
    },
    removeItemWishlist(state, action) {
      const index = state.wishlist.findIndex(
        (item) => item.id === action.payload.id
      );
      state.wishlist.splice(index, 1);
    },
    closeChange() {
      state.change = false;
    },
  },
});

export const sendWishlistData = (wishlist, id, db) => {
  return async (dispatch) => {
    const sendRequest = async () => {
      const docRef = doc(db, "users", id);
      const payload = { wishlist };

      updateDoc(docRef, payload);
    };
    try {
      await sendRequest();
    } catch (error) {
      console.log(error.message);
    }
  };
};

export const getWishlistData = (id, db) => {
  return async (dispatch) => {
    const getRequest = async () => {
      const docRef = doc(db, "users", id);
      const docSnap = await getDoc(docRef);
      return docSnap.data().wishlist;
    };
    try {
      const data = await getRequest();
      console.log(data);
      dispatch(wishlistActions.replaceWishlist(data || []));
    } catch (error) {
      console.log(error.message);
    }
  };
};

export default wishlistSlice.reducer;
export const wishlistActions = wishlistSlice.actions;
