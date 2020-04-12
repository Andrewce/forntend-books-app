import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


export default class ContentItems extends React.Component {
    render() {
        return <div className="container border">
            <div className="">
                {this.props.eId}) {this.props.name}
                <br />Book author: ${this.props.bookTitle}
                <br />
                <br />
                <img src="https://raw.githubusercontent.com/Andrewce/Pic/master/user.png" alt="-img..-" width="200" height="200" />
                <br />
            age: {this.props.age}
            </div>
            <input type="submit" onClick={this.props.onFormSubmit} />
        </div>

    }
}
//change
