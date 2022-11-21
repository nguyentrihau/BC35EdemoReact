import React, { Component } from 'react'
import Modal from './Modal';
import ProductList from './ProductList';


const products = [ { id: 1, name: 'black car', img: './img/black-car.jpg', price: 1000 },
{ id: 2, name: 'red car', img: './img/red-car.jpg', price: 2000 },
{ id: 3, name: 'silver car', img: './img/silver-car.jpg', price: 3000 },
{ id: 3, name: 'Steel car', img: './img/steel-car.jpg', price: 4000 }
];
export default class ExerciseCarStore extends Component {
    state = {
        productDetail:{
            id: 1, name: 'black car', img: './img/black-car.jpg', price: 1000
        }
    }
    //this.state dat tai component nao thi ham setState se dinh nghia tai compotent do
    viewDetail = (productClick)=>{
        //xu ly
        this.setState({
            productDetail:productClick
        })
    }
  render() {
    return (
      <div>
        <div className="container">
            <ProductList data={products} viewDetail={this.viewDetail} />
            <Modal prodDetail = {this.state.productDetail}  />    
        </div>
      </div>
    )
  }
}
