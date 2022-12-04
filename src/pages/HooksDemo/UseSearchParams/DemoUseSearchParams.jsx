import axios from 'axios';
import { useFormik } from 'formik'
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { NavLink, useSearchParams } from 'react-router-dom'
const DemoUseSearchParams = () => {

    const [searchParam, setSearchParam] = useSearchParams();
    const [arrProduct, setArrProduct] = useState();
    let keyword = searchParam.get('keyword');//khi duong dan url khong co tham so keyword = null;
    const frm = useFormik({
        initialValues: {
            keyword: ''
        },
        onSubmit: (values) => {
            console.log(values);
            //khi nguoi dung go tu khoa va submit => dua tu khoa len url
            setSearchParam({
                keyword: values.keyword
            })
        }
    });
    const getProductByKeyword = async () => {
        if (keyword) {//neu keyword khac null => call api
            const result = await axios({
                url: `https://shop.cyberlearn.vn/api/Product?keyword=${keyword}`,
                method: 'GET'
            });
            //sau khi call api dua vao tu khoa thanh cong thi setstate cho arrProduct
            setArrProduct(result.data.content);
            console.log(result.data.content);
        }
    }
    useEffect(() => {
        //call api
        getProductByKeyword();
    }, [keyword])
    return (
        <div className='container'>
            <h3>Search</h3>
            <form className="form-group" onSubmit={frm.handleSubmit}>
                <p>Nhap vao ten san pham</p>
                <input type="text" className='form-control' name='keyword' onChange={frm.handleChange} />
                <button className='m-2 btn btn-success'>Search</button>
            </form>
            <h3 className='m-2'>Ket qua tim kiem</h3>
            <div className="row">
                <div className="col-3">
                    {/* {arrProduct.map((prod, index) => {
                        return <div key={index}>
                            <div className="card">
                                <img src={prod.image}" alt="..." />
                            </div>
                            <div className="card-body">
                                <p>{prod.name}</p>
                                <p>{prod.price}</p>
                                <NavLink to={`/detail/${prod.id}`} className="btn btn-success">View detail</NavLink>
                            </div>
                        </div>
                    })} */}

                </div>
            </div>
        </div>
    )
}

export default DemoUseSearchParams