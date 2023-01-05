

const stateDefault = {
    arrXucXac: [
        { img: './img/1.png', diem: 1 },
        { img: './img/2.png', diem: 2 },
        { img: './img/3.png', diem: 3 },
    ],
    diemCuoc: true, //true:tai,false:xiu
    soBanThang: 0,
    soLanCuoc: 0,

};

export const baiTapGameReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case 'DAT_CUOC': {
            let newState = {...state}
            newState.diemCuoc = action.payload;
            return { ...newState };
        }
        case 'PLAY_GAME':{
            let newState = {...state};
            //arrXXNN = [{},{},{}];
            let arrXXNN = [];
            for (let i = 0; i < 3; i++) {
                //moi lan lap ramdom tao so ngau nhien
                let soNN = Math.floor(Math.random()*6) +1;
                //tu so ngau nhien tao ra ob xuc xac ngau nhien
                let xxNN = {img:`./img/${soNN}.png`,diem:soNN};
                //dua vao mang xuc xac moi
                arrXXNN.push(xxNN);
            }
            //cap nhat ket qua
            let diem = 0;
            for (const xx of arrXXNN) {
                diem += xx.diem;
            }
            if((diem > 11 && newState.diemCuoc === true) || (diem < 11 && newState.diemCuoc === false) ){
                newState.soBanThang +=1;
            }
            //cap nhat lai state
            newState.arrXucXac = arrXXNN;
            //Cap nhat so lan cuoc
            newState.soLanCuoc += 1;
            return newState;


        }
        default: return state;
    }
}