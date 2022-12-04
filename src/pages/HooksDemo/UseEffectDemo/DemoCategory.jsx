import axios from 'axios';
import React, { useState } from 'react'
import { useEffect } from 'react';

function DemoCategory() {
    const [arrCategory, setArrCategory] = useState([]);
    const [arrProduct, setArrProduct] = useState([]);
    const [categoryId, setCategoryId] = useState(null);
    const getAllCategoryApi = async () => {
        const result = await axios({
            url: 'https://shop.cyberlearn.vn/api/Product/getAllCategory',
            method: 'GET'
        })
        //sau khi lay du lieu tu api ve thi setState cho arrCategory
        setArrCategory(result.data.content);
    }
    useEffect(() => {
        //goi api load danh muc
        getAllCategoryApi();
        return()=>{
            console.log('componentWillUnmont');
            /**
             * call back ma cac useEffect return se thuc thi
             * + component mat khoi react dom(vi du chuyen huong cac trang hoac if else ...)
             */
        }
    }, [])

    const getProductByCategoryId = async (id) => {
        const result = await axios({
            url: `https://shop.cyberlearn.vn/api/Product/getProductByCategory?categoryId=${id}`,
            method: 'GET'
        })
        //sau khi lay du lieu tu api ve thi setState cho arrCategory
        setArrProduct(result.data.content);
    }

    useEffect(()=>{
        if(categoryId){ // neu categoryId khac null => chay call api
            getProductByCategoryId(categoryId);
            // console.log(categoryId);
        }
    },[categoryId])
    console.log(arrCategory);
    return (
        <div className='mt-5'>
            <div className="d-flex">
                <div className="w-25">
                    <h3>Product Category</h3>
                    <nav className='d-flex flex-column'>
                        {arrCategory.map((item, index) => {
                            return <a className='mt-2 nav-link' href="#" key={index}  onClick={()=>{
                                setCategoryId(item.id)
                            }}>{item.category}</a>
                        })}
                    </nav>
                </div>
                <div className="w-75">
                    <h3>Product List</h3>
                    <div className="row">
                        {arrProduct.map((prod, index) => {
                            return <div className="col-4" key={index}>
                                <div className="card">
                                    <img src={prod.image} alt="..." />
                                </div>
                                <div className="card-body">
                                    <h3>{prod.name}</h3>
                                    <p>{prod.price}</p>
                                    <button className="btn btn-danger">
                                        <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                                    </button>
                                </div>
                            </div>
                        })}

                    </div>
                </div>
            </div>
        </div>
    )
}

export default DemoCategory