import React, { Component } from 'react';
import axios from 'axios';
import Children from './Children';

export default class Lifecycle extends Component {
    // snippet tao constructor:rconst
    constructor(props) {
        super(props)

        this.state = {
            //tao state users de chua data tra ve tu api
            posts: [],
            //tao state userID de chua id cua user muon loc ra danh sach posts
            userID: null,
        }
        console.log('contructor run');
    }
    fetchPosts = () => {
        axios
            .get(`https://jsonplaceholder.typicode.com/posts`, {
                params: {
                    userId: this.state.userID || null,
                },
            })
            .then((response) => {
                //call api thanh cong
                console.log(response.data);
                // goi setstate de gan data cho state posts
                this.setState({ posts: response.data })
            })
            .catch((error) => {
                console.log(error);
            });
    }
    handleMouseMove = () =>{
        console.log('handleMouseMove');
    }
    //chay 1 lan duy nhat sau aln render dau tien 
    //thuong dung de xu ly:call api,setState,setTimeout,...
    componentDidMount() {
        console.log('componentDidMount run');
        this.fetchPosts();
        document.addEventListener("mousemove",this.handleMouseMove)
    };

    //chay sau moi lan render , tu lan render thu 2 tro di
    //thuong dung:su dung gia tri state va props moi de thuc hien mot hanh dong nao do nhu:
    // - su dung gia tri props moi de setState
    // - su dung gia tri state/props moi de call API
    // ** Neu setState trong compotentDidUpdate bat buoc phai co dieu kien
    // componentDidUpdate: cung cap 2 tham so lan luot la gia tri truoc khi thay doi cua props va state
    componentDidUpdate(prevProps, prevState) {
        console.log('componentDidUpdate run', this.state);
        //neu state userID bi thay doi => goi lai ham fetchPosts
        //??:lam sao de kiem tra chi duy nhat state userId bi thay doi
        if (prevState.userID !== this.state.userID) {
            this.fetchPosts()
        }

    }
    //Chay mot lan duy nhat truoc khi component bi huy bo   
    componentWillUnmount(){
        console.log('componentWillUnmount run');
        document.removeEventListener("mousemove",this.handleMouseMove);
    }

    handleSelect = (postID) => {
        //userID:id cua user muon lay thong tin chi tiet
        axios
            .get(`https://jsonplaceholder.typicode.com/posts/${postID}`)
            .then((response) => {
                //call api thanh cong
                console.log(response.data);
            })
            .catch((error) => {
                console.log(error);
            });

        //Tao state userId va setState
    }

    changeUser = (evt) => {
        const { value } = evt.target;
        //Goi setState de luu value nay vao state userId
        this.setState({ userID: value })
    }
    render() {
        console.log('render run');
        return (
            <div>
                <Children userId = {this.state.userID}/>
                {/* Select user  */}
                <select onChange={this.changeUser}>
                    <option value="">seclect user</option>
                    <option value="1">User 1</option>
                    <option value="2">User 2</option>
                    <option value="3">User 3</option>
                    <option value="4">User 4</option>
                    <option value="5">User 5</option>
                    <option value="6">User 6</option>
                    <option value="7">User 7</option>
                    <option value="8">User 8</option>
                    <option value="9">User 9</option>
                    <option value="10">User 10</option>
                </select>
                <ul>
                    {this.state.posts.map((posts) => {
                        return <li key={posts.id}>
                            <span className='mr-2'>{posts.title}</span>
                            <button onClick={() => {
                                this.handleSelect(posts.id)
                            }}>Chi tiet</button>
                        </li>
                    })}
                </ul>
            </div>
        )
    }
}
