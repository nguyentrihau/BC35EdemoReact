import React, { Component } from 'react'
import { connect } from 'react-redux'
import { datCuocAction } from '../../redux/Action/BaiTapGameAction';

class XucXac extends Component {
    renderKetQua= ()=>{
        const {arrXucXac}=this.props;
        let diem = 0;
        for (const xx of arrXucXac) {
            diem+= xx.diem;
        }
        let ketQua = diem > 11 ? 'Tài':'Xỉu';
        return `${diem}-${ketQua}`
    }
    render() {
        console.log(this.props,'dsads');
        const {arrXucXac} = this.props;
        return (
            <div>
                <div className="container-fluid">
                    <div className="row text-center pt-5">
                        <div className="col-4">
                            <button className="btn" onClick={()=>{
                                //b1:tạo ra object action
                                // const action = {
                                //     type:'DAT_CUOC',
                                //     payload:true
                                // }
                                const action = datCuocAction(true);
                                //b2: Dùng this.props.dispatch gửi lên reducer
                                this.props.dispatch(action);
                            }}>
                                <div className="p-5 bg-danger text-white rounded display-4">
                                    Tài
                                </div>
                            </button>
                        </div>
                        <div className="col-4">
                            {arrXucXac.map((xucXac,index)=>{
                                return <img src={xucXac.img} alt="..." key={index} width={50} height={50} className='mx-2' />
                            })}
                            <div className="display-5 pt-5 text-light">
                                {this.renderKetQua()}
                            </div>
                        </div>
                        <div className="col-4">
                            <button className="btn" onClick={()=>{
                                //b1:tạo ra object action
                                // const action = {
                                //     type:'DAT_CUOC',
                                //     payload:false   
                                // }
                                const action = datCuocAction(false);

                                //b2: Dùng this.props.dispatch gửi lên reducer
                                this.props.dispatch(action);
                            }}>
                                <div className="p-5 bg-danger text-white rounded display-4">
                                    Xỉu
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    arrXucXac: state.baiTapGameReducer.arrXucXac
})

export default connect(mapStateToProps)(XucXac)