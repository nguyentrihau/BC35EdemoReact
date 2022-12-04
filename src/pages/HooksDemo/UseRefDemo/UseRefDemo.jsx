import React from 'react'
import { useRef } from 'react';
import { useState } from 'react'

const UseRefDemo = () => {
    const [comment,setComment] = useState('');
    const commentRef = useRef('');
    const handleChange = (e)=>{
        setComment(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(commentRef.current);
    }
  return (
    <div className='container'>
        <div className="card mt-2" onSubmit={handleSubmit}>
            <div className="card-header">
                <div className="comment p-2" style={{background:'#EEE'}}>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit tenetur repudiandae nisi?
                </div>
            </div>
            <div className="card-body">
                <form action="">
                    <input onChange={handleChange} type="text" className='form-control' name="comment" id="" />
                    <button className='btn btn-success mt-2' type='submit'>Send</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default UseRefDemo