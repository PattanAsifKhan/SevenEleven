import React, { Component } from 'react'
import axios from 'axios';
import Card from './card';
export default class products extends Component {
    constructor(props){
        super(props);
        this.state = {uname:'',products: []};
        this.openlist=this.openlist.bind(this);
    }
    state = {uname:'',products: []};
    openlist(){
        this.props.history.push({
            pathname: '/item-list',
            data1: this.state.uname
          });
          //window.open('/item-list');
    }
    render() {
        axios.get("http://localhost:5000/products/").then(res=>this.setState({ products: res.data }));
        return (
            <div> <h1>Welcome User {this.props.location.data} <button type="button" onClick={this.openlist}className="btn btn-primary">Checklist</button></h1>
            <div className="d-flex align-content-start flex-wrap bd-highlight example-parent">
                {this.state.products.map((product) => (
                    <Card  uid={this.props.location.data} key={product.id} name={product.name} price={product.price} description={product.description}/>
                ))}
                </div>
                </div>
        )
    }
}
/*const gridcontainer={
    display: "grid",
    gridTemplateColumns:"auto auto auto",
    padding: "10px"
}*/