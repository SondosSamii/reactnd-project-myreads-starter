import React, { Component } from "react";
import PropTypes from "prop-types";

class BookShelfChanger extends Component {
  static propTypes = {
    book: PropTypes.object.isRequired,
    value: PropTypes.string.isRequired,
    updateBookShelf: PropTypes.func.isRequired,
    getBook: PropTypes.func,
  };

  render() {
    const { book, value, updateBookShelf, getBook } = this.props;

    return (
      <div className="book-shelf-changer">
        <select
          value={book.shelf ? book.shelf : value}
          onChange={(event) => {
            if (window.location.pathname === "/search") getBook(book.id);
            updateBookShelf(book, event.target.value);
          }}
          // getBook={this.props.getBook(book.id)}
        >
          <option value="move" disabled>
            Move to...
          </option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">None</option>
        </select>
      </div>
    );
  }
}

export default BookShelfChanger;
