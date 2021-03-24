import "./App.css";
import WarningSign from "./components/WarningSign";
import MyBadge from "./components/MyBadge";
import "bootstrap/dist/css/bootstrap.min.css";
import BookList from "./components/BookList"

function App() {
  return (
    <div>
      <WarningSign text="This is some random text" />
      <MyBadge text="This is the badge text" color="success" />
      <BookList />
    </div>
  );
}

export default App;
