import React, { Component } from 'react'

export default class GioHang extends Component {
    render() {
        const { gioHang,xoaGioHang,tangGiamSoLuong } = this.props;
        return (
            <div className='card'>
                <div className="card-header">
                    Gio hang
                </div>
                <div className="card-body">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Ma sp</th>
                                <th>Hinh Anh</th>
                                <th>Ten san pham</th>
                                <th>So luong</th>
                                <th>Thanh tien</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {gioHang.map((item, index) => {
                                return <tr key={index}>
                                    <td>1</td>
                                    <td>
                                        <img src={item.hinhAnh} width={50} height={50} alt="..." />
                                    </td>
                                    <td>{item.tenSp}</td>
                                    <td>{item.giaBan}</td>
                                    <td>
                                        <button className="btn btn-dark mx-2" onClick={()=>{
                                            tangGiamSoLuong(item.maSP,1)
                                        }}>+</button>
                                        {item.soLuong}
                                        <button className="btn btn-dark mx-2" onClick={()=>{
                                            tangGiamSoLuong(item.maSP,-1)
                                        }}>-</button>
                                    </td>
                                    <td>{item.giaBan * item.soLuong}</td>
                                    <td>
                                        <button className="btn btn-danger" onClick={()=>{
                                            xoaGioHang(item.maSP)
                                        }}>xoa</button>
                                    </td>
                                </tr>
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}
