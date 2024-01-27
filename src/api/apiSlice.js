import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "/books",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:9000",
  }),
  endpoints: (builder) => ({
    fetchAllBooks: builder.query({
      query: () => ({
        url: "/books",
        method: "GET",
      }),
    }),
  }),
});

export const { useFetchAllBooksQuery } = apiSlice;
