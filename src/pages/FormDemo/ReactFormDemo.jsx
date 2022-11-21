import React, { Component } from 'react'

export default class ReactFormDemo extends Component {
  state = {
    values: {
      id: '',
      name: '',
      price: '',
      image: '',
      description: '',
      productType: 'phone'
    },
    errors: {
      id: '',
      name: '',
      price: '',
      image: '',
      description: '',
    },
    valid: false
  }

  checkValid = () => {
    //form hop le khi values !=='' va error = '';
    //lay ra object value va erro de duyet dieu kien hop le
    let { values, errors } = this.state;
    for (let key in errors) {
      if (errors[key] !== '' || values[key] == '') {
        return false
      }
    };
    return true;
  }
  handleChangeInput = (e) => {
    // let(value,id) = e.target;//id:id,name,price,...

    //attribute: la thuoc tinh tu minh them vao the
    // let regex = e.target;
    // console.log(regex);
    // let dataAttrRegex = e.target.getAttribute('data-regex');
    // if(dataAttrRegex{
    //     let regex = new RegExp(dataAttrRegex) tu them dau /\;
    //     if(!regex.test(value)){messesErro=id + "err"}
    // })
    let value = e.target.value;
    let id = e.target.id;
    //xu ly value
    let newValue = { ...this.state.values } //this.state.values
    newValue[id] = value;
    //xu ly erro
    let newErro = { ...this.state.errors } //this.state.errors
    //xu ly loi
    let messesErro = '';
    if (value.trim() == '') {
      messesErro = id + ' khong duoc bo trong'
    } else {
      let dataType = e.target.getAttribute('data-type');
      if (dataType == 'number') {
        let regexNumber = /^\d+$/;
        if (!regexNumber.test(value)) {
          messesErro = id + ' phai nhap so'
        }
      }
    }
    newErro[id] = messesErro;
    // console.log(id, value);
    // console.log(this.state);
    //cap nhat state

    this.setState({
      values: newValue,
      errors: newErro
    }, () => {
      // console.log(this.state);
      let valid = this.checkValid();
      // console.log({valid});
      //sau khi xu ly errors
      if (this.checkValid()) {
        this.setState({
          valid: valid
        })
      }
    })
  }
  handleSumit = (e) => {
    e.preventDefault();
    if (!this.checkValid()) {
      return;//dung ham ko submit
    }
    console.log("submi");
  }
  render() {
    return (
      <form className='container' onSubmit={this.handleSumit}>
        <h3>Create product</h3>
        <div className="card">
          <div className="card-header bg-dark text-warning">
            <h3>Product info</h3>
          </div>
          <div className="card-body">
            <div className="row">
              <div className="col-6">
                <div className="form-group">
                  <p>id</p>
                  {/* S  */}
                  <input type="text" className='form-control' name="id" id="id" onInput={this.handleChangeInput} />
                  {this.state.errors.id !== '' && <p className='text-danger'>{this.state.errors.id}</p>}
                </div>
                <div className="form-group">
                  <p>name</p>
                  <input type="text" className='form-control' name="name" id="name" onInput={this.handleChangeInput} />
                  {this.state.errors.name !== '' ? <p className='text-danger'>{this.state.errors.name}</p> : ''}
                </div>
                <div className="form-group">
                  <p>price</p>
                  <input type="text" data-type='number' data-regex=' /^\d+$/' className='form-control' name="price" id="price" onInput={this.handleChangeInput} />
                  {this.state.errors.price !== '' && <p className='text-danger'>{this.state.errors.price}</p>}
                </div>
              </div>
              <div className="col-6">
                <div className="form-group">
                  <p>image</p>
                  <input type="text" className='form-control' name="image" id="image" onInput={this.handleChangeInput} />
                  {this.state.errors.image !== '' && <p className='text-danger'>{this.state.errors.image}</p>}
                </div>
                <div className="form-group">
                  <p>productType</p>
                  <select name="" className='form-control' id="productType" onInput={this.handleChangeInput}>
                    <option value={"phone"}>Phone</option>
                    <option value={"tablet"}>Tablet</option>
                    <option value={"laptop"}>Laptop</option>
                  </select>
                </div>
                <div className="form-group">
                  <p>description</p>
                  <textarea name="description" className='form-control' id="description" onInput={this.handleChangeInput} ></textarea>
                  {this.state.errors.description !== '' && <p className='text-danger'>{this.state.errors.description}</p>}
                </div>
              </div>
            </div>
          </div>
          <div className="card-footer">
            <button className="btn btn-primary mx-1" type='submit' disabled={!this.state.valid}>
              Create
            </button>
            {/* <button className="btn btn-success" type='submit' >
                            Update
                        </button> */}
          </div>
        </div>
      </form>
    )
  }
}
