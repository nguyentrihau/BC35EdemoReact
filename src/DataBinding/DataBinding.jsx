import React, { Component } from 'react'

export default class DataBinding extends Component {

    product = {
        id:1,
        name:'protuct 1',
        price:1000,
        image: 'https://i.pravatar.cc'
    };

    tong2so = (a, b) => (a + b); // du lieu tra ve cua phuong thuc:string,number,boolean,jsx compounent (<div>....</div>) khong return ve object hoac array.

    renderProduct = () => {//badoo tinder
        return <div className="card">
            <img src={this.product.image} alt="" />
            <div className="card-body">
                <h3>{this.product.name}</h3>
                <p>{this.product.price}</p>
                <button className='btn btn-dark'>Add to card</button>
            </div>
        </div>
    }
    render() {
        let title = 'Cybersoft';
        return (
            <div className='container'>
                <h3>Title:{title}</h3>
                <h3>Tong: {this.tong2so(5, 10)}</h3>
                <div className="w-25 d-inline-block px-1">
                    {this.renderProduct()}
                </div>
                <div className="w-25 d-inline-block px-1">
                    {this.renderProduct()}
                </div>
                <div className="w-25 d-inline-block px-1">
                    {this.renderProduct()}
                </div>
                <div className="w-25 d-inline-block px-1">
                    {this.renderProduct()}
                </div>
            </div>
        )
    }
}
