import React, { Component } from 'react'

export default class Phone extends Component {
    render() {
        const {phone,xemChiTiet}= this.props;
        return (
            <div className="card" key={phone.id}>
                <img src={phone.hinhAnh} height={450} style={{ objectFit: 'cover' }} alt="..." />
                <div className="card-body">
                    <h3>{phone.tenSP}</h3>
                    <p>{phone.giaBan}</p>
                    <button className='btn btn-dark' onClick={() => {
                        // xemChiTiet(phone);
                        this.props.xemChiTiet(phone);
                    }}>Xem chi tiet</button>
                </div>
            </div>
        )
    }
}
