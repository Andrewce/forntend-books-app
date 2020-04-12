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
            url: url,
            body: newBook
        },
            (err, res) => {
                if (err) return console.error(err);
                const info = JSON.parse(body);
                let items = [];
                info.forEach(function (i) {
                    items.push(i)
                })
                this.setState({ items: items });
                console.log(items.filter(items => items.id <= 10))
            });
    }

    render() {
        return (
            < div>
                <div className="App-Content">
                    {this.state.items
                        //.filter(items.id => items.id<=10)
                        .map((item, i) => {
                            return <ContentItems
                                name={item.author}
                                key={i}
                                eId={item.id}
                                bookTitle={item.title}
                            />
                        })}
                </div>
            </div >

        );
    }
};

