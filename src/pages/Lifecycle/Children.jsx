import React, { Component,PureComponent } from 'react';

//pureComponent: tu giup component xu ly phuong thuc shouldComponentUpdate
//no se di so sanh toan bo props va state hien tai voi props va state moi,neu khong co thang nao thay doi no se ko render lai component. []cu !== []moi

export default class Children extends PureComponent {
    //duoc chay moi khi state/props thay doi va chay truoc phuong thuc render
    // neu return ve false => khong cho phep chay phuong thuc render
    // shouldComponentUpdate: cung cap 2 tham so lan luot la gia tri sau khi thay doi cua props va state 
    // shouldComponentUpdate(nextProps, nextState){
    //     // chi cho phep render lai neu prop userId bi thay doi 
    //     if(nextProps.userID !== this.props.userID){
    //         return true;//cho phep render
    //     }
    //     return false;
    // }
  render() {
    console.log('Children render run');
    return (
      <div>
        <h1>Children - {this.props.userID}</h1>
      </div>
    )
  }
}
