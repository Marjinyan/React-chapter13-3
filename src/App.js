import withSearch from "./components/withSearch/withSearch";
import ProductList from "./components/BookList/BookList";
import "./App.css";
import { useFetch } from "./hooks/useFetch";
const HigherOrder = withSearch(ProductList);

const App = () => {
  const [loading, data] = useFetch("./books.json");
  if (loading) {
    return <p>Loading books...</p>;
  }
  return (
    <>
      <h1>BEST SELLING BOOKS</h1>
      <HigherOrder books={data.items} />
    </>
  );
};
export default App;
