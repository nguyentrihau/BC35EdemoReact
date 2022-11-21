import React, { Component } from 'react'

export default class ProductItem extends Component {
  render() {
    const {image,name,price} = this.props.prod;
    return (
      <div>
        <div className="card text-left">
          <img src={image} alt="..." className='img-fluid' />
          <div className="card-body">
            <h4>{name.length > 24?name.substring(0,24)+"...":name}</h4>
            <p>{price}$</p>
            <button className='btn btn-dark'>Add to card <i class="fas fa-shopping-cart fa-xs fa-fw"></i> </button>
          </div>
        </div>
      </div>
    )
  }
}
