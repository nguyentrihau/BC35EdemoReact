//luu y:doi voi reference value (ibject,array) thi khi cap nhat state tren redux can clone gia tri ra object hoac array moi khi return ve gia tri moi do
const stateDefault =[
    {taiKhoan:'userA',matKhau:'123441'},
    {taiKhoan:'userB',matKhau:'4312'},
] //OXXX

export const arrNguoiDUngReducer = (state = stateDefault,action)=>{
    switch(action.type){
        case 'THEM_NGUOI_DUNG':{
            state.push(action.payload);
            return [...state]; //immutable : tinh chat bat bien
        }
        default:return state;
    }
}