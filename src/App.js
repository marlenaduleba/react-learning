//import Book from "./components/book/Book";
// import Counter from "./components/Counter/Counter";
import HOC from "./components/User/User";

export const App = () => {
  
  return (
    <div>
      <HOC message="Hello you!" adultAge={18} />
    </div>
  );
};

