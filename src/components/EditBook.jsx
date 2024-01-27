import { useParams } from "react-router-dom";
import { useFetchABooksQuery } from "../api/apiSlice";
import { useEffect, useState } from "react";

export default function EditBook() {
  const { bookId } = useParams();
  const { data: book } = useFetchABooksQuery(bookId);
  const [name, setName] = useState("");
  const [author, setAuthor] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const [price, setPrice] = useState("");
  const [featured, setFeatured] = useState(false);

  useEffect(() => {
    if (book) {
      setName(book.name);
      setAuthor(book.author);
      setThumbnail(book.thumbnail);
      setPrice(book.price);
      setFeatured(book.featured);
    }
  }, [book]);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <main className="py-6 2xl:px-6">
      <div className="container">
        <div className="p-8 overflow-hidden bg-white shadow-cardShadow rounded-md max-w-xl mx-auto">
          <h4 className="mb-8 text-xl font-bold text-center">Edit Book</h4>
          <form onSubmit={handleSubmit} className="book-form">
            <div className="space-y-2">
              <label htmlFor="lws-bookName">Book Name</label>
              <input
                required
                className="text-input"
                type="text"
                id="lws-bookName"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="lws-author">Author</label>
              <input
                required
                className="text-input"
                type="text"
                id="lws-author"
                name="author"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="lws-thumbnail">Image Url</label>
              <input
                required
                className="text-input"
                type="text"
                id="lws-thumbnail"
                name="thumbnail"
                value={thumbnail}
                onChange={(e) => setThumbnail(e.target.value)}
              />
            </div>

            <div className="grid grid-cols-2 gap-8 pb-4">
              <div className="space-y-2">
                <label htmlFor="lws-price">Price</label>
                <input
                  required
                  className="text-input"
                  type="number"
                  id="lws-price"
                  name="price"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="lws-rating">Rating</label>
                <input
                  required
                  className="text-input"
                  type="number"
                  id="lws-rating"
                  name="rating"
                  min="1"
                  max="5"
                />
              </div>
            </div>

            <div className="flex items-center">
              <input
                id="lws-featured"
                type="checkbox"
                name="featured"
                className="w-4 h-4"
                checked={featured}
                onChange={(e) => setFeatured(e.target.checked)}
              />
              <label htmlFor="lws-featured" className="ml-2 text-sm">
                This is a featured book
              </label>
            </div>

            <button type="submit" className="submit" id="lws-submit">
              Add Book
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
