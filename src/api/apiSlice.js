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

    fetchABooks: builder.query({
      query: (bookId) => ({
        url: `/books/${bookId}`,
        method: "GET",
      }),
      providesTags: (result, error, arg) => [{ type: "book", id: arg }],
    }),

    addABook: builder.mutation({
      query: (data) => ({
        url: "/books",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["books"],
    }),

    editABook: builder.mutation({
      query: ({ bookId, data }) => ({
        url: `/books/${bookId}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: (result, error, arg) => [
        "books",
        { type: "book", id: arg.bookId },
      ],
    }),
  }),
});

export const {
  useFetchAllBooksQuery,
  useAddABookMutation,
  useFetchABooksQuery,
  useEditABookMutation,
} = apiSlice;
