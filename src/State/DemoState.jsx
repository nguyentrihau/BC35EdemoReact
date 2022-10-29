import React, { Component } from 'react'
import style from './DemoState.module.css'
export default class DemoState extends Component {
    username = 'Quan';
    // login = false;//false chua dang nhap,true da dang nhap
    state = {
        login : false //this.state la thuoc tinh co san cua react class component chua cac gia tri lam thay doi giao dien
    }
    renderLogin = () => {
        if(this.state.login){
            return <span>
                Hello ! {this.username};
            </span>
        }
        return <button className='btn btn-success' onClick={()=>{
            this.handleLogin();
        }}>
            Login
        </button>
    }
    handleLogin = () =>{
        // this.login = true;
        // console.log(this.login);
        // this.renderLogin()
        //this.setState la phuong thuc co san cua react class component, dung de thay doi gia tri state. Sau khi state duoc thay doi => giao dien tu dong render lai
        this.setState({
            login:true
        },()=>{//co the dung asyn await de log
            //function xu ly sau khi setState thu thi xong
            console.log(this.state.login);
        });
        
    }
    render() {
        return (
            <div>

                <nav className="nav justify-content-end text-white  bg-dark">
                    
                    <a className="nav-link text-white" href="#">
                        {/* {this.login ? <span>Hello ! {this.username}</span> : <button>Login</button>} */}
                        {this.renderLogin()}
                    </a>
                    
                </nav>
                <p style={{
                    backgroundColor:'purple',
                    color:'#fff',
                    padding:'15px',
                    margin:'10px'
                }}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe, ullam? Soluta molestiae quas vero, et eveniet iste eaque. Perspiciatis, ex.</p>
                <div className={`${style['fz-5xl']} bg-primary` }>
                    Bai tap State
                </div>
            </div>
        )
    }
}
