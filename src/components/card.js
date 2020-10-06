import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Axios from 'axios';
import Items from "../model/items";

export default class card extends Component {
    constructor(props){
        super(props);
    }
    addData=(a,b,c,d,e,uid)=>{
        Axios.post("http://localhost:5000/itemlist/update-cart",{
            name:a,
            id:b,
            price:c,
            description:d,
            quantity:e,
            uid:uid
        }).catch("ERROR");

    }

    render() {
        return (
            <div className="p-2 bd-highlight col-example">
                <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" style={{ width:"100%",height: '15vw',objectFit: 'cover'}} src="https://media.gq.com/photos/5f316a12092046da7abdb421/master/w_2000,h_1333,c_limit/COS-regular-fit-recycled-cotton-jeans.jpg" />
                <Card.Body>
                <Card.Title>{this.props.name}</Card.Title>
                <Card.Text>
                   Price: {this.props.price}
                </Card.Text>
                <Card.Text>
                {this.props.description}
                </Card.Text>
                <Button variant="primary" onClick={this.addData(this.props.name,this.props.id,this.props.price,this.props.description,1,this.props.uid)}>Add to cart</Button>
                </Card.Body>
                </Card>
            </div>
        );
    }
}
/*const griditem={
    border: "1px solid rgba(0, 0, 0, 0.8)",
    padding: "20px",
    fontSize: "30px",
    textAlign: "center"
  }*/