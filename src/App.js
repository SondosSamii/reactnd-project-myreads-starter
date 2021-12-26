import React from "react";
import { Link, Route, Switch } from "react-router-dom";
import * as BooksAPI from "./BooksAPI";
import "./App.css";
import Bookshelf from "./Bookshelf";
import BookCard from "./BookCard";
import NotFound from "./NouFound";

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    books: [],
    query: "",
  };

  async componentDidMount() {
    const books = await BooksAPI.getAll();
    this.setState(() => ({ books }));
  }

  updateBookShelf = (bookToUpdate, shelf) => {
    BooksAPI.update(bookToUpdate, shelf);

    let updatedBooks = [];
    updatedBooks = this.state.books.filter(
      (book) => book.id !== bookToUpdate.id
    );

    if (shelf !== "none") {
      bookToUpdate.shelf = shelf;
      updatedBooks = updatedBooks.concat(bookToUpdate);
    }

    this.setState({ books: updatedBooks });

    // console.log(this.state.books);
    // this.state.books
    //   .filter((book) => book.id === bookToUpdate.id)
    //   .map((book) => {
    //     bookToUpdate.shelf = shelf;
    //     console.log(book);
    //     return book;
    //   });

    // await BooksAPI.update(bookToUpdate, shelf);
    // console.log(bookToUpdate);
    // console.log(shelf);
  };

  async updateQuery(query) {
    this.setState(() => ({
      query: query.trim(),
    }));

    // const searchedBooks = await BooksAPI.search(query);
    // this.setState(() => ({ books: searchedBooks }));
  }

  render() {
    const { books, query } = this.state;

    const showingBooks =
      query === ""
        ? books
        : books.filter((term) =>
            term.title.toLowerCase().includes(query.toLowerCase())
          );

    return (
      <div className="app">
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <div className="list-books">
                <div className="list-books-title">
                  <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                  <div>
                    <Bookshelf
                      books={books}
                      title="Currently Reading"
                      shelf="currentlyReading"
                      updateBooks={() => this.updateBookShelf}
                    />
                    <Bookshelf
                      books={books}
                      title="Want to Read"
                      shelf="wantToRead"
                      updateBooks={this.updateBookShelf}
                    />
                    <Bookshelf
                      books={books}
                      title="Read"
                      shelf="read"
                      updateBooks={this.updateBookShelf}
                    />
                  </div>
                </div>
                <div className="open-search">
                  <Link to="/search">
                    <button>Add a book</button>
                  </Link>
                </div>
              </div>
            )}
          />

          <Route
            path="/search"
            render={() => (
              <div className="search-books">
                <div className="search-books-bar">
                  <Link to="/">
                    <button className="close-search">Close</button>
                  </Link>
                  <div className="search-books-input-wrapper">
                    {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
                    <input
                      type="text"
                      placeholder="Search by title or author"
                      value={this.state.query}
                      onChange={(event) => this.updateQuery(event.target.value)}
                    />
                  </div>
                </div>
                <div className="search-books-results">
                  <ol className="books-grid">
                    {showingBooks.map((book, index) => (
                      <BookCard key={index} index={index} book={book} />
                    ))}
                  </ol>
                </div>
              </div>
            )}
          />

          <Route path="*" component={NotFound} />
        </Switch>
      </div>
    );
  }
}

export default BooksApp;
