import React, { Component } from 'react'

export default class ChildrenComponent extends Component {
  render() {
    return (
      <div>
        <h3>Title:Cybersoft</h3>
        <h3>Bai tap xem chi tiet</h3>
        <p>{this.props.children[1]}</p>
      </div>
    )
  }
}
