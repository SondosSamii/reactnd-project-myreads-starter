import React, { Component } from "react";
import PropTypes from "prop-types";
import BookshelfBooks from "./BookshelfBooks";

class Bookshelf extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    shelf: PropTypes.string.isRequired,
  };

  render() {
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.title}</h2>
        <div className="bookshelf-books">
          <BookshelfBooks
            books={this.props.books}
            shelf={this.props.shelf}
            updateBooks={this.props.updateBooks}
          />
        </div>
      </div>
    );
  }
}

export default Bookshelf;
