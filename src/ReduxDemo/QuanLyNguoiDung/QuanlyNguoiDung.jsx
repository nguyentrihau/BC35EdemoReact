import React, { Component } from 'react'
import { connect } from 'react-redux'
import FormNguoiDUng from './FormNguoiDung'
import TableNguoiDung from './TableNguoiDung'

 class QuanlyNguoiDung extends Component {
  render() {
    return (
      <div className='container'>
        <FormNguoiDUng/>
        <TableNguoiDung/>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({})


export default connect(mapStateToProps)(QuanlyNguoiDung)