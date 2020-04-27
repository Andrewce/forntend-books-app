import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


export default class AddItems extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      newAuthor: "",
      newBookTitle: ""
    }
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const data = this.state
    console.log("handleSubmit", data)

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({ "author": this.state.newAuthor, "title": this.state.newBookTitle });

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    fetch("http://localhost:3002/books", requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
  }
  handleInputChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  render() {
    const { newAuthor } = this.state
    const { newBookTitle } = this.state
    return <div className="">
      <div className="form-group bg-info d-flex flex-column text-center align-items-center p-3" >
        <div className="col-md-3 text-center">
          <h1>Add a new book {this.state.value} </h1>
          <form onSubmit={this.handleSubmit} className="">
            <label for="author">New Author</label>
            <input className="form-control" type="text" name="newAuthor" id="author" placeholder="Enter the author" onChange={this.handleInputChange} required /><br />
            <label for="bookTitle">New Book Title</label>
            <input className="form-control" type="text" name="newBookTitle" placeholder="Enter the title" onChange={this.handleInputChange} /><br />
            <input type="submit" value="+ Add" className="btn-primary mb-2" />
          </form>
        </div>
      </div>
    </div>
  }

}
