//import Book from "./components/book/Book";
// import Counter from "./components/Counter/Counter";
//import HOC from "./components/User/User";
//import Refs from "./components/Refs/Refs";
import First from "./components/Children/First";
import Second from "./components/Children/Second";

export const App = () => {
  
  return (
    <div>
    <First>
      <p>Dodatkowa informacja</p>
      <Second/>
    </First>
    </div>
  );
};

