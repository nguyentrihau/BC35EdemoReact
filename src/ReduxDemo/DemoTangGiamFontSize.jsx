import React, { Component } from 'react'
import { connect, Connect } from 'react-redux'
class DemoTangGiamFontSize extends Component {
    render() {
        return (
            <div>
                <h3>Vi du 1: Tang giam fontsize</h3>
                <p style={{ fontSize: this.props.fSize }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus commodi sequi nihil corrupti animi accusamus dolorum deleniti dolores ea consectetur!</p>
                <button className="btn btn-success mx-2" onClick={() => {
                    //format data gui len redux (action)
                    const action = {
                        type: 'TANG_GIAM_FONTSIZE',//Nhan de biet thay doi state  nao
                        payload: 1 //Du lieu gui len redux
                    };
                    //dung props.dispatch de dua action len redux
                    this.props.dispatch(action);
                }}>+</button>
                <button className="btn btn-success mx-2" onClick={() => {
                    //format data gui len redux (action)
                    const action = {
                        type: 'TANG_GIAM_FONTSIZE1',//Nhan de biet thay doi state  nao
                        payload: 1 //Du lieu gui len redux
                    };
                    //dung props.dispatch de dua action len redux
                    this.props.dispatch(action);
                }}>-</button>
            </div>
        )
    }
}
// return {} tuong duong ()
const mapStateToProps = (state) => {
    return {
        fSize: state.fontSize
    }
}

const ComponentRedux = connect(mapStateToProps)(DemoTangGiamFontSize);
export default ComponentRedux;
