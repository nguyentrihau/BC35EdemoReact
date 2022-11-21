import React, { Component } from 'react';
import ProductFilter from './ProductFilter';
import ProductList from './ProductList';
import axios from 'axios';

export default class Store extends Component {
    //rconst
    constructor(props) {
      super(props)
    
      this.state = {
         products:[],
         searchTerm:"",
        category:"",
      }
    }

    fetchProducts = async () => {
        let url = "https://dummyjson.com/products";
        if (this.state.searchTerm){
            url += `/search?q=${this.state.searchTerm}`;
            // console.log(url);
        }else if (this.state.category){
            url += `/category/${this.state.category}`
        }
        try {
            const response = await axios.get(url);
            // call API thanh cong
            this.setState({products:response.data.products});
            // console.log(response.data.products);
        } catch (error) {
            console.log(error);
        }
    }

    componentDidMount(){
        this.fetchProducts();
    }
    componentDidUpdate(prevProps,prevState){
        if(prevState.searchTerm !== this.state.searchTerm){
            this.fetchProducts();
        }
        if(prevState.category !== this.state.category){
            this.fetchProducts();
        }
    }

    handleSearch = (searchTerm)=>{
        this.setState({searchTerm,category:""})
    };

    handleChangeCategory = (category) => {
        this.setState({category,searchTerm:""})
    }
  render() {
    return (
      <div className='container'>
        <h1 className="text-center text-primary">Cybersoft Store</h1>
        <div className="row">
            <div className="col-3">
                <ProductFilter onSearch = {this.handleSearch} onChangeCategory ={this.handleChangeCategory} />
            </div>
            <div className="col-9">
                <ProductList products={this.state.products}/>
            </div>
        </div>
      </div>
    )
  }
}
