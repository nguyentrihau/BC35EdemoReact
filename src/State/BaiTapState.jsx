import React, { Component } from 'react'

export default class BaiTapState extends Component {
    state = {
        fz: 20, //state defautl,
        
        img:'https://i.pravatar.cc?u=1'
    }
  render() {
    return (
      <div className='container'>
        <h3>Tang giam fontSize</h3>
        <p style={{fontSize:`${this.state.fz}px`}}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum dignissimos ad mollitia laudantium enim odit molestias eveniet repellat cupiditate consequuntur tempore laboriosam placeat nam eligendi in, corporis, exercitationem ipsum ullam!</p>
        <button className='btn btn-dark mx-2' onClick={()=>{
            this.setState({
                fz: this.state.fz + 5
            },()=>{
              console.log(this.state.fz);
          })
        }}>+</button>
        <button className='btn btn-dark mx-2'  onClick={()=>{
            this.setState({
                fz: this.state.fz - 5
            },()=>{
              console.log(this.state.fz);
          })
        }}>-</button>

        <hr/>
        <div className="card w-25">
            <img src={this.state.img} alt="..." />
            <div className="card-body">
              <button className="btn btn-success" onClick={()=>{
                let ramdomNumber = Math.floor(Math.random()* 100);
                let newImgSrc = 'https://i.pravatar.cc?u='+ramdomNumber;
                this.setState({
                  img:newImgSrc
                },()=>{console.log(this.state.img);})
              }}>
                Ramdom
              </button>
            </div>
        </div>
      </div>
    )
  }
}
