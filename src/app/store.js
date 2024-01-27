import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "../api/apiSlice";
import filterReducer from "../api/filterSlice";

const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    filter: filterReducer,
  },
  middleware: (getDefaultMiddlewares) =>
    getDefaultMiddlewares().concat(apiSlice.middleware),
});

export default store;
