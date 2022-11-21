import React, { Component } from 'react'
import ProductItem from './ProductItem'

export default class ProductList extends Component {
  render() {
    return (
      <div className='row'>
        {this.props.products.map((product)=>{
            return (
                <div className="col-4" key={product.id}>
                    <ProductItem product={product}/>
                </div>
            )
        })}
      </div>
    )
  }
}
