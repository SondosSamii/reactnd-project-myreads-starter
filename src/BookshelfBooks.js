import React, { Component } from "react";
import PropTypes from "prop-types";
import BookCard from "./BookCard";

class BookshelfBooks extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    shelf: PropTypes.string.isRequired,
  };

  render() {
    const { books, shelf, updateBookShelf } = this.props;

    return (
      <ol className="books-grid">
        {books.length > 0 &&
          books
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
