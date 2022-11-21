import axios from 'axios'
import React, { Component } from 'react'

export default class ProductFilter extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        categories: [],
         searchTerm: "",
      }
    }

    fetchCategories = async () =>{
        try {
            const response = await axios.get("https://dummyjson.com/products/categories");
            //thanh cong
            this.setState({categories:response.data})
        } catch (error) {
            console.log(error);
        }
    }
    componentDidMount(){
        this.fetchCategories();
    }
    handleChange = (evt)=>{
        this.setState({searchTerm:evt.target.value})
    }
  render() {
    return (
      <div>
        <div className="mb-3 d-flex">
            <input type="text" placeholder='Search Product...' className="form-control" value={this.state.searchTerm} onChange={this.handleChange} />
            <button className='btn btn-secondary ml-2' onClick={()=>{
                this.props.onSearch(this.state.searchTerm)
            }}>Search</button>
        </div>
        <div className="mb-3">
            <select name="" id="" className="form-control" onChange={(e)=>{this.props.onChangeCategory(e.target.value)}}>
                {this.state.categories.map((category,index)=>{
                    return <option key={index} value={category} >{category}</option>
                })}
            </select>
        </div>
      </div>
    )
  }
}
