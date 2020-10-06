import React, { Component } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import Axios from 'axios';
//this.setState({ items: res.data })
export default class itemlist extends Component {
    state={items:[]};
    render() {
        Axios.post("http://localhost:5000/itemlist/get-cart/",{
            name:"aisf.khan.399@gmail.com",
        }).then(res=>this.setState({ items: res.data }));
        console.log(this.state.items);
        return (
            <div>
                <div className="card">
                        <div className="card-body">
                                {this.props.location.data1};
                                {this.state.items.map(item=><p>{item.name}</p>)}
                        </div>
                </div>
            </div>
        )
    }
}
