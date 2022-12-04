//rafce
import React,{useState} from 'react'

const UseStateDemo = () => {
  const [number,setNumber] = useState(10)
  const [fontSize,setFontSize] = useState(16);
  //this.state = {like};
  const [state,setState] = useState({
    like:1
  })
  console.log(number);
  return (
    <div className='container'>
      <h3>Demo use state</h3>
      <p>Number: {number}</p>
      <button className="btn btn-success mx-2" onClick={()=>{
        setNumber(number+1);
      }}>+</button>
      <button className="btn btn-success mx-2" onClick={()=>{
        setNumber(number-1);
      }}>-</button>
      <hr />
      <h3>Like: {state.like}</h3>
      <button className="btn btn-danger mx-2" onClick={()=>{
        setState({
          like:state.like+1
        })
      }}>
        <i class="fa fa-heart" aria-hidden="true"></i>
      </button>
      <hr />
      <h3>Tang giam fontSize</h3>
      <p style={{fontSize:fontSize}}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, maiores?</p>
      <button className="btn btn-success mx-2" onClick={()=>{
        setFontSize(fontSize+4);
      }}>+</button>
      <button className="btn btn-success mx-2" onClick={()=>{
        setFontSize(fontSize-4);
      }}>-</button>
    </div>
  )
}

export default UseStateDemo