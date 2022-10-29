import React, { Component } from 'react'


const arrProduct = [
    {id:1,name:'red car',img:"./img/red-car.jpg",price:1000},
    {id:2,name:'black car',img:"./img/black-car.jpg",price:1000},
    {id:3,name:'silver car',img:"./img/silver-car.jpg",price:1000},
    {id:4,name:'steel car',img:"./img/steel-car.jpg",price:1000}
]
export default class renderList extends Component {

    // renderProduct = () => {
    //     let output = [];
    //     for (const prod of arrProduct) {
    //         let tr = <tr>
    //             <td>{prod.id}</td>
    //             <td>{prod.name}</td>
    //             <td><img src={prod.img} alt="..." width={50} height={50} /></td>
    //             <td>{prod.price}</td>
    //         </tr>
            
    //         output.push(tr);//[<tr></tr>,<tr></tr>]
    //     }
    //     return output; //[<tr></tr>,<tr></tr>]
    // }
    renderProduct = () => {
        let arrTr = arrProduct.map((prod,index)=>{
            return <tr key={index}>
                <td>{prod.id}</td>
                <td>{prod.name}</td>
                <td><img src={prod.img} alt="..." width={50} height={50} /></td>
                <td>{prod.price}</td>
            </tr>
        });
        return arrTr; //[<tr></tr>,<tr></tr>]
    }
    renderCardProduct = ()=> {
        return arrProduct.map((prod,index)=>{
            return <div className="col-3" key={index}>
            <div className="card my-3">
                <img src={prod.img} alt="..." />
                <div className="card-body">
                    <p>{prod.name}</p>
                    <p>{prod.price}</p>
                    <button className='btn btn-success'>Add to card</button>
                </div>
            </div>
        </div>
        })
    }
  render() {
    return (
      <div>
        <h3>Card List</h3>
        <table className="table">
            <thead>
                <tr>
                    <th>id</th>
                    <th>name</th>
                    <th>img</th>
                    <th>price</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {this.renderProduct()}
                {/* <tr>
                    <td>1</td>
                    <td>red car</td>
                    <td><img src="./img/red-car.jpg" alt="..." width={50} height={50} /></td>
                    <td>1000</td>
                    <td></td>
                </tr> */}
            </tbody>
        </table>
        <h3 className="mt-2">Card Product List</h3>
            <div className="row mt-2">
                <div className="row">
                    {this.renderCardProduct()}
                    {/* <div className="col-4">
                        <div className="card">
                            <img src="./img/red-car.jpg" alt="..." />
                            <div className="card-body">
                                <p>Product name</p>
                                <p>Product price</p>
                                <button className='btn btn-success'>Add to card</button>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
      </div>
    )
  }
}
