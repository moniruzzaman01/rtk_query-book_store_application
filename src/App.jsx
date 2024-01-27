import AddBook from "./components/AddBook";
import Books from "./components/Books";
import EditBook from "./components/EditBook";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <Navbar />

      <Books />

      <AddBook />

      <EditBook />
    </div>
  );
}

export default App;
