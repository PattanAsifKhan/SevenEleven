import React, { Component } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import Axios from 'axios';
export default class home extends Component {
    constructor(props) {
        super(props);
        this.state = {value: '',value1:''};

        this.handleChange = this.handleChange.bind(this);
        this.handleChange1 = this.handleChange1.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this)
        this.openProd=this.openProd.bind(this);
    }
    handleChange(event) {
        this.setState({value: event.target.value});
      }
      handleChange1(event) {
        this.setState({value1: event.target.value});
      }
    
      handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value1);
        event.preventDefault();
      }
      openProd(event){
        event.preventDefault();
      Axios.post("http://localhost:5000/itemlist/add-user",{
          id:this.state.value,
          name:this.state.value1,
          items:[]
        }
      );
      this.props.history.push({
        pathname: '/products',
        data: this.state.value1
      });
      }
    render() {
        return (
            <div>
            <form onSubmit={this.handleSubmit}>
                <br></br>
            <label>
              Name:
              <input type="text" value={this.state.value} onChange={this.handleChange} />
            </label>
            <br></br>
            <label>
              Email:
              <input type="text" value={this.state.value1} onChange={this.handleChange1} />
            </label>
            <br></br>
            <input type="submit" value="Submit" onClick={this.openProd} />
          </form>
          </div>
            
        );
    }
}
