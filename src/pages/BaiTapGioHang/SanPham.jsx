import React, { Component } from 'react'

export default class SanPham extends Component {
    render() {
        const {prod,themGioHang} = this.props;
        // console.log(this.props);
        return (
            <div>
                <div className="card">
                    <img src={prod.hinhAnh} alt="..." className='img-fluid' height={450} style={{ objectFit: 'contain' }} />
                    <div className="card-body">
                    <h3>{prod.tenSP}</h3>
                    <p>{prod.giaBan}</p>
                    <button className='btn btn-danger' onClick={()=>{
                        themGioHang(prod)
                    }}>Them gio hang <i className="fa fa-cart-plus" aria-hidden="true"></i></button>
                </div>
                </div>

            </div>
        )
    }
}
