import "./App.css";
import WarningSign from "./components/WarningSign";
import MyBadge from "./components/MyBadge";
import "bootstrap/dist/css/bootstrap.min.css";
import SingleBook from "./components/SingleBook";

function App() {
  return (
    <div>
      <WarningSign text="This is some random text" />
      <MyBadge text="This is the badge text" color="success" />
      {/* <SingleBook
        book={{
          asin: "0316438960",
          title: "The Last Wish: Introducing the Witcher",
          img:
            "https://images-na.ssl-images-amazon.com/images/I/51eHtkVLL5L.jpg",
          price: 9.59,
          category: "fantasy",
        }}
      /> */}
    </div>
  );
}

export default App;
