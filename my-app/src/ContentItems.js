import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


export default class ContentItems extends React.Component {
    constructor(props) {
        super(props)
        this.deleteBook = this.deleteBook.bind(this)
    }

    deleteBook() {
        var requestOptions = {
            method: 'DELETE',
            redirect: 'follow'
        };

        let { bookId } = this.props

        fetch(`http://localhost:3002/books?id=${bookId}`, requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error)); //TODO visual error message div/modal/alert
    }

    render() {
        return <div className="col-md-3">
            <div className="card text-center mt-4">
                <div className="card-body">
                    <div className="card-title">
                        ({this.props.bookId}) Author: {this.props.name}
                    </div>
                    <div className="card-subtitle">
                        Book Title: {this.props.bookTitle}
                    </div>
                    <div>
                        <br />
                        <img className="img-fluid" src="https://upload.wikimedia.org/wikipedia/commons/5/50/Closed_Book_Icon.svg" alt="-img..-" width="200" height="200" />
                        <br />
                    </div><br />
                    <input className="btn btn-primary" data-toggle="button" aria-pressed="false" autoComplete="off" type="submit" onClick={this.deleteBook} value="Delete" />
                </div>
            </div>

        </div>
    }
}
//change
