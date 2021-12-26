import React, { Component } from "react";
import BookCard from "./BookCard";

class BookshelfBooks extends Component {
  state = {
    value: this.props.shelf,
  };

  handleChange = (event) => {
    // console.log(this.props.books.filter((book) => book.id === "sJf1vQAACAAJ"));
    this.setState({
      value: event.target.value,
    });
  };

  render() {
    return (
      <ol className="books-grid">
        {this.props.books
          .filter((book) => book.shelf === this.props.shelf)
          .map((book, index) => (
            <BookCard
              key={index}
              index={index}
              book={book}
              value={this.state.value}
              handleChange={this.handleChange.bind(this)}
            />
            // <li key={index}>
            //   <div className="book">
            //     <div className="book-top">
            //       <div
            //         className="book-cover"
            //         style={{
            //           width: 128,
            //           height: 193,
            //           backgroundImage: `url("${book.imageLinks.thumbnail}")`,
            //         }}
            //       />
            //       <div className="book-shelf-changer">
            //         <select
            //           value={this.state.value}
            //           onChange={(event) => this.handleChange(event)}
            //         >
            //           <option value="move" disabled>
            //             Move to...
            //           </option>
            //           <option value="currentlyReading">
            //             Currently Reading
            //           </option>
            //           <option value="wantToRead">Want to Read</option>
            //           <option value="read">Read</option>
            //           <option value="none">None</option>
            //         </select>
            //       </div>
            //     </div>
            //     <div className="book-title">{book.title}</div>
            //     {book.authors.map((author, index) => (
            //       <div key={index} className="book-authors">
            //         {author}
            //       </div>
            //     ))}
            //   </div>
            // </li>
          ))}
      </ol>
    );
  }
}

export default BookshelfBooks;
