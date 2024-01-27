import { useState } from "react";
import { useFetchAllBooksQuery } from "../api/apiSlice";
import Book from "./Book";
import { useSelector } from "react-redux";

export default function Books() {
  const { data: books, isLoading, isError, error } = useFetchAllBooksQuery();
  const [isFeatured, setIsFeatured] = useState(false);
  const { searchText } = useSelector((state) => state.filter);

  let content = null;
  if (isLoading) {
    content = <div>Loading...</div>;
  } else if (isError) {
    content = <div>{error.message}</div>;
  } else if (books.length == 0) {
    content = <div>No content found!!!</div>;
  } else if (books.length > 0) {
    content = books
      .filter((book) => {
        if (isFeatured) {
          return book.featured == isFeatured && book;
        } else {
          return book;
        }
      })
      .filter((book) => {
        if (searchText) {
          return book.name.toLowerCase().includes(searchText) && book;
        } else {
          return book;
        }
      })
      .map((book, key) => <Book key={key} book={book} />);
  }

  return (
    <main className="py-12 px-6 2xl:px-6 container">
      <div className="order-2 xl:-order-1">
        <div className="flex items-center justify-between mb-12">
          <h4 className="mt-2 text-xl font-bold">Book List</h4>

          <div className="flex items-center space-x-4">
            <button
              onClick={() => setIsFeatured(false)}
              className={`lws-filter-btn ${!isFeatured && "active-filter"}`}
            >
              All
            </button>
            <button
              onClick={() => setIsFeatured(true)}
              className={`lws-filter-btn ${isFeatured && "active-filter"}`}
            >
              Featured
            </button>
          </div>
        </div>
        <div className="space-y-6 md:space-y-0 md:grid grid-cols-1 lg:grid-cols-3 gap-6">
          {content}
        </div>
      </div>
    </main>
  );
}
