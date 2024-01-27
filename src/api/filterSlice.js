import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchText: "",
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setSearchText: (state, action) => {
      state.searchText = action.payload;
    },
  },
});

export default filterSlice.reducer;
export const { setSearchText } = filterSlice.actions;
