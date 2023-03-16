import React, {Component} from "react";
import Header from "./Header";
import Footer from "./Footer";

class Book extends Component {
  constructor(props) {
    super(props);
    this.state = {
      book: {
           title: "Hobbit",
           author: "J. R. Tolkien",
           pages: "455",
         }
    };
  }

  render() {
    return (
      <div>
        <Header />
   <h1>{this.state.book.title}</h1>
   <h2>{this.state.book.author}</h2>
   <h4>Pages: {this.state.book.pages}</h4>
   <Footer />
 </div>
    )
  }
}



// const book = {
//   title: "Hobbit",
//   author: "J. R. Tolkien",
//   pages: "455",
// };

// function Book() {
//   return (
// <div className="App">
//   <h1>{book.title}</h1>
//   <h2>{book.author}</h2>
//   <h4>Pages: {book.pages}</h4>
// </div>
//   );
// }

export default Book;






// import React, { Component } from "react";
// import BookDescription from "./components/book/BookDescription";
// import Header from "./components/partial/Header";
// import Footer from "./components/partial/Footer";

// class Book extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       books: [
//         {
//           title: "Hobbit",
//           author: "J. R. Tolkien",
//           pages: "455",
//         },
//         {
//           title: "Rok 1984",
//           author: "G. Orwell",
//           pages: "455",
//         },
//         {
//           title: "Władca Pierścieni",
//           author: "J. R. Tolkien",
//           pages: "669",
//         },
//         {
//           title: "Stary człowiek i morze",
//           author: "E. Hemingway",
//           pages: "226",
//         },
//       ],
//     };
//   }

//   render() {
//     return (
//       <div>
//         <Header/>
//         {this.state.books.map((book, i) => (
//           <BookDescription
//             key={i}
//             title={book.title}
//             author={book.author}
//             pages={book.pages}
//           />
//         ))}
//         <Footer/>
//       </div>
//     );
//   }
// }

// export default Book;
