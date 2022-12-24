import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: "filter",
  initialState: { filter: [] },
  reducers: {
    addFilter(state, action) {
      state.filter.push(action.payload);
      console.log(state.filter);
    },
    removeFilter(state, action) {
      const index = state.filter.findIndex((item) => item === action.payload);
      state.filter.splice(index, 1);
      console.log(state.filter);
    },
    clearFilter(state, action) {
      state.filter = [];
    },
  },
});

export default filterSlice.reducer;
export const filterActions = filterSlice.actions;
