import React, { Component } from "react";
import PropTypes from "prop-types";
import BookShelfChanger from "./BookShelfChanger";

class BookCard extends Component {
  static propTypes = {
    book: PropTypes.object.isRequired,
    index: PropTypes.string.isRequired,
    value: PropTypes.string,
  };

  render() {
    const { index, book, value, updateBookShelf } = this.props;

    return (
      <div>
        {book ? (
          <li key={index}>
            <div className="book">
              <div className="book-top">
                {book.imageLinks ? (
                  <div
                    className="book-cover"
                    style={{
                      width: 128,
                      height: 193,
                      backgroundImage: `url("${book.imageLinks.thumbnail}")`,
                    }}
                  />
                ) : (
                  <div
                    className="book-cover"
                    style={{
                      width: 128,
                      height: 193,
                      backgroundImage: `url("images/book-placeholder.png")`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  />
                )}
                {window.location.pathname === "/" ? (
                  <BookShelfChanger
                    value={value}
                    book={book}
                    updateBookShelf={updateBookShelf}
                  />
                ) : (
                  <></>
                )}
              </div>
              {book.title && <div className="book-title">{book.title}</div>}
              {book.authors &&
                book.authors.map((author, index) => (
                  <div key={index} className="book-authors">
                    {author}
                  </div>
                ))}
            </div>
          </li>
        ) : (
          <></>
        )}
      </div>
    );
  }
}

export default BookCard;
