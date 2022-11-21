import React, { Component } from 'react'
import { connect } from 'react-redux'

 class TableNguoiDung extends Component {
  render() {
    return (
      <div>
        <table className='mt-2'>
            <thead className="bg-dark text-white">
                <tr>
                    <th>Tai khoan</th>
                    <th>Mat khau</th>
                </tr>
            </thead>
            <tbody>
              {this.props.arrNguoiDUngReducer.map((nd,index)=>{
                return <tr key={index}>
                    <td>{nd.taiKhoan}</td>
                    <td>{nd.matKhau}</td>
                </tr>
              })}
            </tbody>
        </table>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  arrNguoiDUngReducer:state.arrNguoiDUngReducer
})



export default connect(mapStateToProps)(TableNguoiDung)