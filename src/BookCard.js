import React, { Component } from "react";
import BookShelfChanger from "./BookShelfChanger";

class BookCard extends Component {
  render() {
    const { index, book } = this.props;

    return (
      <li key={index}>
        <div className="book">
          <div className="book-top">
            <div
              className="book-cover"
              style={{
                width: 128,
                height: 193,
                backgroundImage: `url("${book.imageLinks.thumbnail}")`,
              }}
            />
            {window.location.pathname !== "/search" ? (
              <BookShelfChanger />
            ) : (
              <></>
            )}
          </div>

          <div className="book-title">{book.title}</div>
          {book.authors.map((author, index) => (
            <div key={index} className="book-authors">
              {author}
            </div>
          ))}
        </div>
      </li>
    );
  }
}

export default BookCard;
