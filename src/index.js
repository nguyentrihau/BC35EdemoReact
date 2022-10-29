import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
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
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<div>
{/* <BaiTapHomLayout/> */}
{/* <DataBinding/> */}
{/* <HandleEvent/> */}
{/* <DemoState/> */}
{/* <BaiTapState/> */}
{/* <p className='color-red'>abc</p> */}
{/* <RenderList/> */}
{/* <ExRenderFilms/> */}
{/* <DemoProps/> */}
<ShoeApp/>
</div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
