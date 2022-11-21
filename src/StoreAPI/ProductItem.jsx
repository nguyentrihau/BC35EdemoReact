import React, { Component } from 'react'

export default class ProductItem extends Component {
  render() {
    const {thumbnail,title,price} = this.props.product;
    return (
      <div className='card'>
        <img src={thumbnail} className='card-img' height={250} alt={title} />
        <div className="card-body">
            <h3 className="card-title">{title}</h3>
            <p className="text-card">{price}</p>
            {/* <p className="card-text">{description}</p> */}
            <button className="btn btn-success">Details</button>
        </div>
      </div>
    )
  }
}
