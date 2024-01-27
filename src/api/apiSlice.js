import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "/books",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:9000",
  }),
  tagTypes: ["books"],
  endpoints: (builder) => ({
    fetchAllBooks: builder.query({
      query: () => ({
        url: "/books",
        method: "GET",
      }),
      providesTags: ["books"],
    }),

    addABook: builder.mutation({
      query: (data) => ({
        url: "/books",
        method: "POST",
        data,
      }),
      invalidatesTags: ["books"],
    }),
  }),
});

export const { useFetchAllBooksQuery, useAddABookMutation } = apiSlice;
