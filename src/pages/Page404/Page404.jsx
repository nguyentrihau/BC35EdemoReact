import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class Page404 extends Component {
  render() {
    return (
      <div className='container'>
        <h3>Khong tim thay trang</h3>
        
          Bam vao day
          <NavLink to={'/home'} className='btn btn-success'>
            Tro ve trang chu
          </NavLink>
        

      </div>
    )
  }
}
