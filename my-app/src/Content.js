import React from 'react';
import request from 'request'
import ContentItems from './ContentItems'

export class Content extends React.Component {

    constructor() {
        super();
        this.state = {
            items: [],
        };
    }
    componentDidMount() {
        let url = 'http://localhost:3002/books'
        request({
            method: 'GET',
            url: url
        },
            (err, res, body) => {
                if (err) return console.error(err);
                const info = JSON.parse(body);
                let items = [];
                info.forEach(function (i) {
                    items.push(i)
                })
                this.setState({ items: items });
            });
    }
    componentDidUpdate() {
        let url = 'http://localhost:3002/books'
        request({
            method: 'GET',
            url: url
        },
            (err, res, body) => {
                if (err) return console.error(err);
                const info = JSON.parse(body);
                let items = [];
                info.forEach(function (i) {
                    items.push(i)
                })
                this.setState({ items: items });
            });
    }




    render() {
        return (
            < div className="container">
                < div className="row">
                    {this.state.items
                        .map((item, i) => {
                            return <ContentItems
                                name={item.author}
                                key={i}
                                bookId={item.id}
                                bookTitle={item.title}
                            />
                        })}
                </div >
            </div >

        );
    }
};

