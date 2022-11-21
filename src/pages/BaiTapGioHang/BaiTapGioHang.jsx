import React, { Component } from 'react'
import DanhSachSanPham from './DanhSachSanPham'
import GioHang from './GioHang'

export default class BaiTapGioHang extends Component {
    state = {
        gioHang:[
            {
                maSP: 1, tenSP: "VinSmart Live", giaBan: 5700000, hinhAnh: "./img/vsphone.jpg",soLuong:2
            }
        ]
    }
    xoaGioHang = (maSPClick) => {
        console.log(maSPClick);
        // //lay ra gio hang
        // let gioHang = this.state.gioHang;
        
        // let index = gioHang.findIndex(sp => sp.maSP === maSPClick);
        // //tim thay
        // if(index !== -1){//xu ly xoa
        //     gioHang.splice(index,1)
        // }
        //cap nhat lai state
        this.setState({
            gioHang:this.state.gioHang.filter(sp => sp.maSP !== maSPClick)
        })
    }
    tangGiamSoLuong = (maSp,soLuong)=>{
        //xu ly setState
        //tim ra san pham duoc click tu gio hang
        let gioHang = this.state.gioHang;
        let spGh = gioHang.find(sp => sp.maSP === maSp);
        if(spGh){
            spGh.soLuong += soLuong;
            if(spGh.soLuong <= 0){
                if(window.confirm('ban co muon xoa san pham khong?')){
                    this.xoaGioHang(maSp);
                    return;
                }
                spGh.soLuong -= soLuong;
                return
            }
            //xu ly setState
            this.setState({
                gioHang:gioHang
            })
        }
    }
    themGioHang = (spClick)=>{
        const spGioHang = {...spClick,soLuong:1}
        console.log(spClick);
        //setState...
        //xu ly cap nhat state.gioHang khi click
        let gioHang = this.state.gioHang;
        //kiem tra sp vua click da co trong gio hang hay chua
        //find tra ve object trong mang
        let spCheck = gioHang.find(sp => sp.maSP === spClick.maSP);
        if(spCheck){
            spCheck.soLuong = spCheck.soLuong +1;
        }else{
            gioHang.push(spGioHang);
        }
        //Cap nhat state
        this.setState({
            gioHang:gioHang
        })
        
    }
  render() {
    return (
      <div className='container'>
        <GioHang gioHang={this.state.gioHang} xoaGioHang={this.xoaGioHang} tangGiamSoLuong={this.tangGiamSoLuong}/>
        <DanhSachSanPham themGioHang = {this.themGioHang}/>
      </div>
    )
  }
}
