import React, { Component } from 'react'

export default class HandleEvent extends Component {

    handleClick = (name,e) => {
        alert('say hello'+name)
    }

    sayHello = (name) =>{
        alert(name);
    }
  render() {
    return (
      <div className='container'>
        <button className='btn btn-dark' onClick={this.handleClick.bind(this,'Hai Mentor')}>Button</button>

        <input type="text" className='w-25 form-control' onInput={(e)=>{
            let tagInput = e.target;//document.getElementById('text');
            console.log(tagInput.value);
        }} />

        <button className='btn btn-dark' onClick={(e)=>{
            //dinh nghia su kien = arrow function => thuc thi ham gi thi goi ham do ben trong
            this.sayHello('Nguyen van A')
        }}>Say hello</button>

        <div className="h-25 bg-dark content p-5"  onMouseEnter={(e)=>{
            e.target.innerHTML = 'onMouseEnter';
            e.target.className = 'h-25 bg-primary content p-5';
        }} onMouseLeave={(e)=>{
            e.target.innerHTML = 'onMouseLeave';
            e.target.className = 'h-25 bg-danger content p-5';
        }}>abc</div>
        
      </div>
    )
  }
}
