import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Books from "../components/Books";
import AddBook from "../components/AddBook";
import EditBook from "../components/EditBook";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Books />,
      },
      {
        path: "/add-book",
        element: <AddBook />,
      },
      {
        path: "/edit-book/:bookId",
        element: <EditBook />,
      },
    ],
  },
]);
