//rafce
import axios from 'axios';
import React,{useState} from 'react'
import { useEffect } from 'react'

const UseEffectDemo = () => {
    const [number,setNumber]=useState(1)
    const [arrProduct,setArrProduct] = useState([])
    console.log(arrProduct);
    useEffect(()=>{
        //truong hop 1:khong co tham so dependency,luon thuc thi sau moi lan component render => it su dung
        console.log('thuc thi sau khi render');
    })
    const getAllProduct = async ()=>{
        const result =await axios({
            url:"https://shop.cyberlearn.vn/api/Product",
            method:"GET"
        })
        setArrProduct(result.data.content)
        console.log(result.data.content);
    }
    useEffect(()=>{
        //Truong hop 2:co tham so thu 2 la dependency []., chi thuc thi 1 lan duy nhat sau lan render dau tien cua component (Giong componentdidmount)=>thuong dung de call api getAll...
        console.log('didmount');
        getAllProduct();
    },[])
  return (
    <div className='container'>
        <h3>Number:{number}</h3>
        <button className="btn btn-success" onClick={()=>{
            setNumber(number+1)
        }}>+</button>
        <hr />
        <h3>Product list</h3>
        <div className="row">
            {arrProduct.map((prod,index)=>{
                return <div className="col-4 mt-2" key={index}>
                    <div className="card">
                        <img src={prod.image} alt="..." />
                    </div>
                </div>
            })}
        </div>
    </div>
  )
}

export default UseEffectDemo