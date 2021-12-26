import React, { Component } from "react";

class BookCard extends Component {
  state = {
    key: this.props.index,
    book: this.props.book,
    value: this.props.value,
  };

  render() {
    const { key, book, value } = this.state;

    return (
      <li key={key}>
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
            <div className="book-shelf-changer">
              <select
                value={value}
                onChange={(event) => this.props.handleChange(event)}
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
