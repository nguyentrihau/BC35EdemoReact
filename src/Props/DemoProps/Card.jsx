import React, { Component } from 'react'

export default class Card extends Component {
  render() {
    // this.props: thuoc tinh co san cua react class component dung de nhan gia tri tu component cha truyen vao 
    //props se khong duoc gan lai gia tri moi
    const{name,age}=this.props;
    return (
      <div>
        <div className="card">
            <img src="http://i.pravatar.cc?u=1" alt="..." />
            <div className="card-body">
                <h3>{name}</h3>
                <p>{age}</p>
            </div>
        </div>
      </div>
    )
  }
}
