import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class HeaderHome extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
                    <NavLink className="navbar-brand" to="/home">Cybersoft</NavLink>
                    <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation" />
                    <div className="collapse navbar-collapse" id="collapsibleNavId">
                        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                            <li className="nav-item ">
                                <NavLink className={({isActive})=> isActive?'nav-link bg-warning text-white':'nav-link'} to="/home" style={({isActive})=>isActive?{color:'red',borderRadius:'5px'}:{}}>Home <span className="sr-only">(current)</span></NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className={({isActive})=> isActive?'nav-link bg-warning text-white':'nav-link'} to="/login" style={({isActive})=>isActive?{color:'red',borderRadius:'5px'}:{}}>Login</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className={({isActive})=> isActive?'nav-link bg-warning text-white':'nav-link'} to="/register" style={({isActive})=>isActive?{color:'red',borderRadius:'5px'}:{}}>Register</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className={({isActive})=> isActive?'nav-link bg-warning text-white':'nav-link'} to="/formdemo" style={({isActive})=>isActive?{color:'red',borderRadius:'5px'}:{}}>ReactForm</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className={({isActive})=> isActive?'nav-link bg-warning text-white':'nav-link'} to="/lifecycle" style={({isActive})=>isActive?{color:'red',borderRadius:'5px'}:{}}>Lifecycle</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className={({isActive})=> isActive?'nav-link bg-warning text-white':'nav-link'} to="/store" style={({isActive})=>isActive?{color:'red',borderRadius:'5px'}:{}}>Store</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className={({isActive})=> isActive?'nav-link bg-warning text-white':'nav-link'} to="/reduxdemo" style={({isActive})=>isActive?{color:'red',borderRadius:'5px'}:{}}>Redux</NavLink>
                            </li>
                            <li className="nav-item dropdown">
                                <NavLink className="nav-link dropdown-toggle" to="#" id="dropdownId" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">More</NavLink>
                                <div className="dropdown-menu" aria-labelledby="dropdownId">
                                    <NavLink className="dropdown-item" to="#">Shoes</NavLink>
                                    <NavLink className="dropdown-item" to="#">Car</NavLink>
                                </div>
                            </li>
                        </ul>
                        <div className="form-inline my-2 my-lg-0">
                            <input className="form-control mr-sm-2" type="text" placeholder="Search" />
                            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                            <NavLink to="/btgiohang ">
                            <i className="fa fa-cart-plus" style={{color:'white',fontSize:'20px',marginLeft:'5px'}} aria-hidden="true"></i>
                            </NavLink>

                        </div>
                    </div>
                </nav>

            </div>
        )
    }
}
