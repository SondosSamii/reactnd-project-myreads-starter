import React, { Component } from "react";
import BookCard from "./BookCard";

class BookshelfBooks extends Component {
  render() {
    const { books, shelf, updateBookShelf } = this.props;

    return (
      <ol className="books-grid">
        {books
          .filter((book) => book.shelf === shelf)
          .map((book) => (
            <BookCard
              key={book.id}
              index={book.id}
              book={book}
              value={shelf}
              updateBookShelf={updateBookShelf}
            />
          ))}
      </ol>
    );
  }
}

export default BookshelfBooks;
