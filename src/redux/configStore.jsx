import {configureStore} from '@reduxjs/toolkit'
import { arrNguoiDUngReducer } from './reducers/nguoiDungReducer';

export const store = configureStore({
    reducer: {
        //Noi chua state cua ung dung
        fontSize:(state = 30,action)=> {
            console.log('action1',action);
            switch(action.type){
                case 'TANG_GIAM_FONTSIZE':{
                    state += action.payload;
                    return state
                }
                case 'TANG_GIAM_FONTSIZE1':{
                    state -= action.payload;
                    return state
                }
                default : return state;
            }
            // if(action.type === 'TANG_GIAM_FONTSIZE'){
            //     state += action.payload;
            // }
            // return state;
        },
        imgSrc:(state='./img/red-car.jpg',action)=>{
            console.log('action2',action)
            switch(action.type){
                case 'CHANGE_COLOR':{
                    state = action.payload;
                    return state;
                }
                default: return state;
            }
        },
        arrNguoiDUngReducer:arrNguoiDUngReducer
    }   
})