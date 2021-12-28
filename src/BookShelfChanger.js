import React, { Component } from "react";
import PropTypes from "prop-types";

class BookShelfChanger extends Component {
  static propTypes = {
    book: PropTypes.object.isRequired,
    value: PropTypes.string.isRequired,
    updateBookShelf: PropTypes.func.isRequired,
  };

  render() {
    const { book, value, updateBookShelf } = this.props;

    return (
      <div className="book-shelf-changer">
        <select
          value={value}
          onChange={(event) => {
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
