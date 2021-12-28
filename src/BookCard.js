import React, { Component } from "react";
import PropTypes from "prop-types";
import BookShelfChanger from "./BookShelfChanger";

class BookCard extends Component {
  static propTypes = {
    index: PropTypes.string.isRequired,
    book: PropTypes.object.isRequired,
    value: PropTypes.string.isRequired,
    updateBookShelf: PropTypes.func.isRequired,
  };

  render() {
    const { index, book, value, updateBookShelf } = this.props;

    return (
      <div>
        {book ? (
          <li key={index}>
            <div className="book">
              <div className="book-top">
                <div
                  className="book-cover"
                  style={{
                    width: 128,
                    height: 193,
                    backgroundImage: book.imageLinks
                      ? `url("${book.imageLinks.thumbnail}")`
                      : `url("images/book-placeholder.png")`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />
                <BookShelfChanger
                  value={value}
                  book={book}
                  updateBookShelf={updateBookShelf}
                />
                {/* {window.location.pathname === "/" ? (
                  <BookShelfChanger
                    value={value}
                    book={book}
                    updateBookShelf={updateBookShelf}
                  />
                ) : (
                  <></>
                )} */}
              </div>
              {book.title && <div className="book-title">{book.title}</div>}
              {book.authors && (
                <div key={index} className="book-authors">
                  {book.authors.join(", ")}
                </div>
              )}
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
