import React, { Component } from "react";
import Header from "../../components/partial/Header";
import Footer from "../../components/partial/Footer";
import BookDescription from "../../components/book/BookDescription";

class Book extends Component {
  render() {
    return (
      <div>
        <Header />
        <BookDescription />
        <Footer />
      </div>
    );
  }
}

export default Book;
