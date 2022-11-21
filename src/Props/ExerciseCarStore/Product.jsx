import React, { Component } from 'react'
import Modal from './Modal'

export default class Product extends Component {
    render() {
        const {item} = this.props
        return (
            <div>
                <div className="card text-white bg-primary">
                    <img className="card-img-top" src={item.img} alt='...' />
                    <div className="card-body">
                        <h4 className="card-title">{item.name}</h4>
                        <p className="card-text">{item.price}</p>
                        <button data-toggle="modal" data-target="#modelId" className='btn btn-success' onClick={()=>{
                            this.props.viewDetail(item)
                        }}>View details</button>
                    </div>
                </div>

            </div>
        )
    }
}
