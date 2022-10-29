//rfc: functional compounent
import React, { Component } from 'react'

//Function nay se chua noi dung component
export default function Product() {
    return (
<div className="card">
  <div className="card-header">
    Header
  </div>
  <div className="card-body">
    <h4 className="card-title">ten san pham</h4>
    <p className="card-text">gia</p>
  </div>
  <div className="card-footer text-muted">
    Footer
  </div>
</div>

    )
}
