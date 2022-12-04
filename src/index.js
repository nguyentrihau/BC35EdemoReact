import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import Header from './components/Header';
import Product from './components/Product';
import BaiTapHomLayout from './components/BaiTapHomeLayout/BaiTapHomLayout';
import DataBinding from './DataBinding/DataBinding';
import HandleEvent from './HandleEvent/HandleEvent';
import DemoState from './State/DemoState';
import RenderList from './RenderList/RenderList';
//nhung css
import './assets/css/style.css'
import BaiTapState from './State/BaiTapState';
import ExRenderFilms from './RenderList/ExRenderFilms';
import DemoProps from './Props/DemoProps/DemoProps';
import ShoeApp from './Props/ShoeApp/ShoeApp';
import BaiTapXemChiTiet from './State/BaiTapXemChiTiet/BaiTapXemChiTiet';
import ExerciseCarStore from './Props/ExerciseCarStore/ExerciseCarStore';
import DemoChildrenProps from './Props/DemoChildrenProps/DemoChildrenProps';
//setup react router dom
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home/Home';
import Register from './pages/Register/Register';
import Login from './pages/Login/Login';
import Detail from './pages/Detail.jsx/Detail';
import App from './App';
import Page404 from './pages/Page404/Page404';
import ReactFormDemo from './pages/FormDemo/ReactFormDemo';
import BaiTapGioHang from './pages/BaiTapGioHang/BaiTapGioHang';
import Lifecycle from './pages/Lifecycle/Lifecycle';
import Store from './StoreAPI/Store';

//setup redux store
import { Provider } from 'react-redux';
import { store } from './redux/configStore';
import ReduxDemo from './ReduxDemo/ReduxDemo';
import BaiTapGameXucXac from './pages/BaiTapGameXucXac/BaiTapGameXucXac';
import UseStateDemo from './pages/HooksDemo/UseStateDemo/UseStateDemo';
import UseEffectDemo from './pages/HooksDemo/UseEffectDemo/UseEffectDemo';
import DemoCategory from './pages/HooksDemo/UseEffectDemo/DemoCategory';
import UseCallBackDemo from './pages/HooksDemo/UseCallBackDemo/UseCallBackDemo';
import UseMemoDemo from './pages/HooksDemo/UseMemoDemo/UseMemoDemo';
import UseRefDemo from './pages/HooksDemo/UseRefDemo/UseRefDemo';
import UseRedux from './pages/HooksDemo/UseReduxDemo/UseRedux';
import DemoUseNavigate from './pages/HookRouter/DemoUseNavigate';
import DemoUseParams from './pages/DemoUseParams/DemoUseParams';
import DemoUseSearchParams from './pages/HooksDemo/UseSearchParams/DemoUseSearchParams';

//JSX


// import Home from './pages/Home/Home';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
    <Provider store={store}>
        <BrowserRouter >
            <Routes>
                <Route path='' element={<App />}>
                    <Route index path='home' element={<Home />} />
                    {/* <Route path='' element={<HeaderHome/>} /> */}
                    <Route path='login' element={<Login />} />
                    <Route path='register' element={<Register />} />
                    <Route path='detail' element={<Detail />} />
                    <Route path='formdemo' element={<ReactFormDemo />} />
                    <Route path='btgiohang' element={<BaiTapGioHang />} />
                    <Route path='page404' element={<Page404 />} />
                    <Route path='lifecycle' element={<Lifecycle />} />
                    <Route path='store' element={<Store />} />
                    <Route path='reduxdemo' element={<ReduxDemo/>} />
                    <Route path='btgame' element={<BaiTapGameXucXac/>} />
                    <Route path='hook-use-state' element={<UseStateDemo/>} />
                    <Route path='hook-effect' element={<UseEffectDemo/>} />
                    <Route path='democategory' element={<DemoCategory/>} />
                    <Route path='usecallback' element={<UseCallBackDemo/>} />
                    <Route path='hookusememo' element={<UseMemoDemo/>} />
                    <Route path='hookuseref' element={<UseRefDemo/>} />
                    <Route path='hookuseredux' element={<UseRedux/>} />
                    <Route path='hookusenavigate' element={<DemoUseNavigate/>} />
                    <Route path='detail'>
                        <Route path=':id' element={<DemoUseParams/>}></Route>
                    </Route>
                    <Route path='hookusesearchparam' element={<DemoUseSearchParams/>} />
                    <Route path='*' element={<Navigate to="/page404" />} />
                </Route>

            </Routes>
        </BrowserRouter>
    </Provider>
    </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
