import React, { Component } from 'react'
import BaiTapChonXeRedux from './BaiTapChonXeRedux'
import DemoTangGiamFontSize from './DemoTangGiamFontSize'
import QuanlyNguoiDung  from './QuanLyNguoiDung/QuanlyNguoiDung'

export default class ReduxDemo extends Component {
  render() {
    return (
      <div className='container'>
        <DemoTangGiamFontSize/>
        <BaiTapChonXeRedux/>
        <QuanlyNguoiDung/>
      </div>
    )
  }
}
