import "./App.css";
import WarningSign from "./components/WarningSign";
import MyBadge from "./components/MyBadge";
import "bootstrap/dist/css/bootstrap.min.css";
import BookList from "./components/BookList";
import FilterBookList from "./components/FilterBookList";

function App() {
  return (
    <div>
      <WarningSign text="This is some random text" />
      <div className="d-flex justify-content-between mb-5">
        <MyBadge text="This is the badge text" color="success" />
        <FilterBookList />
      </div>
      <BookList />
    </div>
  );
}

export default App;
