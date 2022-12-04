import React, { Component } from 'react';
import { connect } from 'react-redux';

 class FormNguoiDung extends Component {
    handleSubmit = (e) => {
      e.preventDefault();
      let taiKhoan = document.getElementById('taiKhoan').value;
      let matKhau = document.getElementById('matKhau').value;
      //this.props.dispatch
      const action = {
        type: 'THEM_NGUOI_DUNG',
        payload: { taiKhoan: taiKhoan, matKhau: matKhau } //object literal (ES6)
      }
  
      this.props.dispatch(action);
    }
  render() {
    return (
      <div>
        <form class="card" onSubmit={this.handleSubmit}>
            <div class="card-header">
                <h3>Thong tin nguoi dung</h3>
            </div>
            <div class="card-body">
            <div className="form-group">
                <p>Tai khoan</p>
                <input type="text" className="form-control" name='taiKhoan' id='taiKhoan' />
            </div>
            <div className="form-group">
                <p>Mat khau</p>
                <input type="text" className="form-control" name='matKhau' id='matKhau' />
            </div>
            </div>
            <div class="card-footer ">
                <button className="btn btn-success m-2" type='submit' >
                    them nguoi dung
                </button>
            </div>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({})


export default connect(mapStateToProps)(FormNguoiDung)