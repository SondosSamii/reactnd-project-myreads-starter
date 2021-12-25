import React, { Component } from 'react'
import BookshelfBooks from './BookshelfBooks'

class Bookshelf extends Component {
    render() {
        return(
            <div className="bookshelf">
                <h2 className="bookshelf-title">{this.props.title}</h2>
                <div className="bookshelf-books">
                    <BookshelfBooks books={this.props.books} shelf={this.props.shelf}/>
                </div>
            </div>
        )
    }
}

export default Bookshelf;