import React, { Component } from "react";
import PropTypes from "prop-types";
import BookshelfBooks from "./BookshelfBooks";

class Bookshelf extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    shelf: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  };

  render() {
    const { title, books, shelf, updateBookShelf } = this.props;

    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{title}</h2>
        <div className="bookshelf-books">
          <BookshelfBooks
            books={books}
            shelf={shelf}
            updateBookShelf={updateBookShelf}
          />
        </div>
      </div>
    );
  }
}

export default Bookshelf;
