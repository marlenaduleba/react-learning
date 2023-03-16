import React, { Component } from "react";
import BookDescription from "../../components/book/BookDescription";
import Header from "../../components/partial/Header";
import Footer from "../../components/partial/Footer";

class Book extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [
        {
          title: "Hobbit",
          author: "J. R. Tolkien",
          pages: "455",
        },
        {
          title: "Rok 1984",
          author: "G. Orwell",
          pages: "455",
        },
        {
          title: "Władca Pierścieni",
          author: "J. R. Tolkien",
          pages: "669",
        },
        {
          title: "Stary człowiek i morze",
          author: "E. Hemingway",
          pages: "226",
        },
      ],
    };
  }

  render() {
    return (
      <div>
        <Header/>
        {this.state.books.map((book, i) => (
          <BookDescription
            key={i}
            title={book.title}
            author={book.author}
            pages={book.pages}
          />
        ))}
        <Footer/>
      </div>
    );
  }
}

export default Book;
