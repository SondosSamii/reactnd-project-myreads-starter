import React from "react";
import { Link, Route, Switch } from "react-router-dom";
import * as BooksAPI from "./BooksAPI";
import "./App.css";
import Bookshelf from "./Bookshelf";
import BookCard from "./BookCard";
import NotFound from "./NouFound";

class BooksApp extends React.Component {
  state = {
    books: [],
    query: "",
  };

  async componentDidMount() {
    const books = await BooksAPI.getAll();
    this.setState(() => ({ books }));
  }

  async updateBookShelf(bookToUpdate, shelf) {
    const books = await BooksAPI.update(bookToUpdate, shelf);
    if (books.length > 0) {
      this.setState(() => ({
        books: books,
      }));
      // console.log(books);
    }

    // this.state.books
    //   .filter((book) => book.id === bookToUpdate.id)
    //   .map((book) => {
    //     bookToUpdate.shelf = shelf;
    //     return book;
    //   });
  }

  async updateQuery(query) {
    this.setState(() => ({ query: query }));
    if (query.length > 0) {
      const searchedBooks = await BooksAPI.search(query);
      this.setState(() => ({ books: searchedBooks }));
    } else if (query.length === 0) {
      const books = await BooksAPI.getAll();
      this.setState(() => ({ books: books }));
    }
  }

  render() {
    const { books, query } = this.state;

    // const showingBooks =
    //   query === ""
    //     ? books
    //     : books.filter((term) =>
    //         term.title.toLowerCase().includes(query.toLowerCase())
    //       );

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
                      updateBookShelf={this.updateBookShelf}
                    />
                    <Bookshelf
                      books={books}
                      title="Want to Read"
                      shelf="wantToRead"
                      updateBookShelf={this.updateBookShelf}
                    />
                    <Bookshelf
                      books={books}
                      title="Read"
                      shelf="read"
                      updateBookShelf={this.updateBookShelf}
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
                      value={query}
                      onChange={(event) => this.updateQuery(event.target.value)}
                    />
                  </div>
                </div>
                <div className="search-books-results">
                  <ol className="books-grid">
                    {books.length > 0 &&
                      books.map((book) => (
                        <BookCard key={book.id} index={book.id} book={book} />
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
