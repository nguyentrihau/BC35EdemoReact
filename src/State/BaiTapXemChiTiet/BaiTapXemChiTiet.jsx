import React, { Component } from 'react'
import Phone from './Phone';

const data = [{ "maSP": 1, "tenSP": "VinSmart Live", "manHinh": "AMOLED, 6.2, Full HD+", "heDieuHanh": "Android 9.0 (Pie)", "cameraTruoc": "20 MP", "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP", "ram": "4 GB", "rom": "64 G B", "giaBan": 5700000, "hinhAnh": "./img/vsphone.jpg" },
{ "maSP": 2, "tenSP": "Meizu 16Xs", "manHinh": "AMOLED, FHD+ 2232 x 1080 pixels", "heDieuHanh": "Android 9.0 (Pie); Flyme", "cameraTruoc": "20 MP", "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 7600000, "hinhAnh": "./img/meizuphone.jpg" },
{ "maSP": 3, "tenSP": "Iphone XS Max", "manHinh": "OLED, 6.5, 1242 x 2688 Pixels", "heDieuHanh": "iOS 12", "cameraSau": "Chính 12 MP & Phụ 12 MP", "cameraTruoc": "7 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 27000000, "hinhAnh": "./img/applephone.jpg" }]
export default class BaiTapXemChiTiet extends Component {
    state = {
        spChiTiet: {
            "maSP": 1,
            "tenSP": "VinSmart Live",
            "manHinh": "AMOLED, 6.2, Full HD+",
            "heDieuHanh": "Android 9.0 (Pie)",
            "cameraTruoc": "20 MP",
            "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP",
            "ram": "4 GB",
            "rom": "64 G B",
            "giaBan": 5700000,
            "hinhAnh": "./img/vsphone.jpg"
        }
    }
    renderProduct = () => {
        return data.map((phone, index) => {
            return <div className="col-4" key={index}>
                <Phone phone={phone} xemChiTiet={this.xemChiTiet} />
            </div>
        });
    };
    xemChiTiet = (phoneClick) => {
        console.log(phoneClick);
        //cap nhat lai state = thong tin san pham duoc click
        this.setState({
            spChiTiet:phoneClick
        })
    }
    render() {
        const { maSP, tenSP, manHinh, heDieuHanh, cameraTruoc, cameraSau, ram, rom, giaBan, hinhAnh } = this.state.spChiTiet
        return (
            <div>
                <div className="container">
                    <h3>Danh sach san pham</h3>
                    <div className="row">
                        {this.renderProduct()}
                    </div>
                    <div className="mt-4">
                        <div className="row">
                            <div className="col-4">
                                <h3 className='text-center'>{tenSP}</h3>
                                <img src={hinhAnh} className='w-100' style={{ objectFit: 'cover' }} height={450} alt="..." />
                            </div>
                            <div className="col-8">
                                <h3>Thong so ky thuat</h3>
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th>Man Hinh</th>
                                            <th>{manHinh}</th>
                                        </tr>
                                        <tr>
                                            <th>He dieu hanh</th>
                                            <th>{heDieuHanh}</th>
                                        </tr>
                                        <tr>
                                            <th>Camera truoc</th>
                                            <th>{cameraTruoc}</th>
                                        </tr>
                                        <tr>
                                            <th>Camera sau</th>
                                            <th>{cameraSau}</th>
                                        </tr>
                                        <tr>
                                            <th>Ram</th>
                                            <th>{ram}</th>
                                        </tr>
                                        <tr>
                                            <th>Rom</th>
                                            <th>{rom}</th>
                                        </tr>
                                        <tr>
                                            <th>Gia ban</th>
                                            <th>{giaBan}vnd</th>
                                        </tr>
                                    </thead>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
