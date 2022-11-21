//rcredux => xoa chu export va xoa ham mapDispatchToProps

import React, { Component } from 'react'
import { connect } from 'react-redux'


 class BaiTapChonXeRedux extends Component {
    handleChandColor = (color)=>{
        let newImgSrc = `./img/${color}-car.jpg`;
        const action = {
            type:'CHANGE_COLOR',
            payload:newImgSrc
        };
        //su dung this.props de dua action len redux
        this.props.dispatch(action);

    }
  render() {
    let{imgSrc} = this.props;
    return (
        
      <div>
        <hr />
        <h3>Bai tap chon xe hoi</h3>
        <div className="row">
            <div className="col-6">
                <img src={imgSrc} className='w-100' alt="..." />
            </div>
            <div className="col-6">
                <button className="btn btn-danger mx-2" onClick={()=>{
                    this.handleChandColor('red');
                }}>Red</button>
                <button className="btn btn-secondary mx-2" onClick={()=>{
                    this.handleChandColor('steel');
                }}>Steel</button>
                <button className="btn btn-dark mx-2" onClick={()=>{
                    this.handleChandColor('black');
                }}>Black</button>
                <button className="btn btn-default mx-2" onClick={()=>{
                    this.handleChandColor('silver');
                }}>Silver</button>
            </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
    imgSrc:state.imgSrc
})

// const mapDispatchToProps = {}

export default connect(mapStateToProps)(BaiTapChonXeRedux)