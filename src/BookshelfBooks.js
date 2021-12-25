import React, { Component } from 'react'

class BookshelfBooks extends Component {
    render() {
        return(
          <ol className="books-grid">
          {this.props.books.filter(book => book.shelf === this.props.shelf).map((book, index) => (
            <li key={index}>
              <div className="book">
                <div className="book-top">
                  <div className="book-cover"
                    style={{
                        width: 128,
                        height: 193,
                        backgroundImage: `url("${book.imageLinks.thumbnail}")`}}></div>
                  <div className="book-shelf-changer">
                    <select>
                      <option value="move" disabled>Move to...</option>
                      <option value="currentlyReading" onClick={()=>this.props.updateBookShelf(book, "currentlyReading")}>Currently Reading</option>
                      <option value="wantToRead" onClick={()=>this.props.updateBookShelf(book, "wantToRead")}>Want to Read</option>
                      <option value="read" onClick={()=>this.props.updateBookShelf(book, "read")}>Read</option>
                      <option value="none">None</option>
                    </select>
                  </div>
                </div>
                <div className="book-title">{book.title}</div>
                {book.authors.map((author, index) => (
                    <div key={index} className="book-authors">{author}</div>
                ))}
              </div>
            </li>
            ))}
          </ol>
        )
    }
}

export default BookshelfBooks;