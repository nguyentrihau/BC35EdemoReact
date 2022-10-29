//rcc:react class component
import React, { Component } from 'react'
import ContentCompounent from './ContentCompounent'
import Footer from './Footer'
import HeaderHome from './HeaderHome'
import HomeCompounent from './HomeCompounent'
import NavigationCompounent from './NavigationCompounent'

export default class BaiTapHomLayout extends Component {
    render() {
        return (
            <div>
                <HomeCompounent/>
                <HeaderHome/>
                <div className="row p-0 m-0">
                    <div className="col-4 p-0">
                        <NavigationCompounent/>
                    </div>
                    <div className="col-8 p-0">
                        <ContentCompounent/>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}
