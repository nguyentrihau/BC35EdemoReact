import React from 'react'
import { Outlet } from 'react-router-dom'
import BaiTapGioHang from './pages/BaiTapGioHang/BaiTapGioHang'
import HeaderHome from './pages/Home/HeaderHome'

export default function App() {
  return (
    <div>
      <HeaderHome/>
      {/* <BaiTapGioHang/> */}
      <div style={{minHeight:100}}>
      <Outlet/>
      </div>
      {/* Outlet la vi tri hien thi component route con  */}
      {/* <footer className='bg-dark text-light text-center p-5'>
        footer
      </footer> */}
    </div>
  )
}
