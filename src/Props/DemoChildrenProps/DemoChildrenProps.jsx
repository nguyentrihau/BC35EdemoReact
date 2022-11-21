import React, { Component } from 'react'
import ChildrenComponent from './ChildrenComponent'
import ExerciseCarStore from '../ExerciseCarStore/ExerciseCarStore'
import BaiTapXemChiTiet from '../ShoeApp/ShoeApp'

export default class DemoChildrenProps extends Component {
  render() {
    return (
      <div className='container'>
        <ChildrenComponent>
            <ExerciseCarStore/>
            <BaiTapXemChiTiet/>
        </ChildrenComponent>
          
      </div>
    )
  }
}
