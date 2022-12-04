import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {useFormik} from 'formik'
import * as yup from 'yup'
const DemoUseNavigate = () => {
    //useNavigate: dung de chuyen huong trang sau 1 xu ly
    const navigate = useNavigate();
    const frmLogin = useFormik({
        initialValues:{
            email:'',
            password:''
        },
        validationSchema: yup.object().shape({
            email:yup.string().required('email cannot be blank!').email('email is invalid!'),
            password:yup.string().required('password cannot be blank!')
            // password:yup.string().required('password cannot be blank!').test('regex','ten loi')
        })
        ,
        onSubmit:(values)=>{
            console.log(values);
            if(values.email === 'cybersoft@gmail.com' && values.password == 'cybersoft'){
                navigate('/btgame')
            }else{
                alert('tai khoan mat khau khong dung')
            }
        }
    })
  return (
    <form className='container' onSubmit={frmLogin.handleSubmit}>
        <h3>Login</h3>
        <div className="form-group">
            <p>email</p>
            <input type="text" className='form-control' name='email' onChange={frmLogin.handleChange} />
            {frmLogin.errors.email && <div className='alert alert-danger'>{frmLogin.errors.email}</div>}
        </div>
        <div className="form-group">
            <p>password</p>
            <input type="text" className='form-control' name='password' onChange={frmLogin.handleChange} />
            {frmLogin.errors.password && <div className='alert alert-danger'>{frmLogin.errors.password}</div>}
        </div>
        <div className="form-group">
            <button type='submit' className='btn btn-success'>Login</button>
        </div>
    </form>
  )
}

export default DemoUseNavigate

// const [userLogin,setUserLogin] = useState({
//     username:'',
//     password:'',
// })
// //useNavigate cua react routerdom dung de chuyen huong trang sau 1 xu ly 
// const navigate = useNavigate();
// console.log(userLogin);
// const handleChange = (e) => {
//     const {value,name} = e.target;
//     setUserLogin({
//         ...userLogin,
//         [name]:value
//     })
// }
// const handleSubmit = (e) => {
//     e.preventDefault();
//     if(userLogin.username == 'cybersoft' && userLogin.password == 'cybersoft'){
//         //chuyen huong
//         navigate('/btgame');
//     }else {
//         alert('tai khoan mat khau khong dung')
//     }
// }