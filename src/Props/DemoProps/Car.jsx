import React, { Component } from 'react'

export default class car extends Component {
  render() {
    /**
     * khac biet giua this.state va this.props:
     * giong: deu la thuoc tinh co san tu react component,dung de binding du lieu len giao dien.
     * khac nhau:state dung de chua du lieu thay doi tren giao dien va co the gan lai duoc thong qua phuong thuc setState.
     * props:dung de nhan du lieu tu component cha truyen vao va khong gan lai gia tri do.
     */
    const {img,name,id,price} = this.props.prod;
    return (
      <div>
        <div className="card">
            <img src={img} alt="..." />
            <div className="card-body bg-dark text-white">
                <h3>{name}</h3>
                <p>{price}</p>
                {this.props.tagButton}
            </div>
        </div>
      </div>
    )
  }
}
