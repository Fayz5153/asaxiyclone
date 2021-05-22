import React, { Component } from 'react';
import "./Links.css"
import logo from "./files/asaxiylogo.svg"
import appstore from "./files/appstore.svg"
import googleplay from "./files/googleplay.svg"

class Links extends Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>
                <div className="Links cantener">
                    <div className="carusels3">
                        <div className="carusel3_1 cantener">
                            <div className="brands">
                            <div className="c3img">
                                <img src="https://assets.asaxiy.uz/brand//5e15c4ec85cf2.jpg" alt="" />
                            </div>
                            <div className="c3img">
                                <img src="https://assets.asaxiy.uz/brand//5e15c5de44b63.jpg" alt="" />
                            </div>
                            <div className="c3img">
                                <img src="https://assets.asaxiy.uz/brand//5e15c615d99f8.png" alt="" />
                            </div>
                            <div className="c3img">
                                <img src="https://assets.asaxiy.uz/brand//5e15c63e06b95.png" alt="" />
                            </div>
                            <div className="c3img">
                                <img src="https://assets.asaxiy.uz/brand//5e15c65d0af72.jpg" alt="" />
                            </div>
                            <div className="c3img">
                                <img src="https://assets.asaxiy.uz/brand//600bc3fa84df8.jpg" alt="" />
                            </div>
                            <div className="c3img">
                                <img src="https://assets.asaxiy.uz/brand//5e15c561deadb.png" alt="" />
                            </div>
                            <div className="c3img">
                                <img src="https://assets.asaxiy.uz/brand//6064cdf0ce901.png" alt="" />
                            </div>
                            <div className="c3img">
                                <img src="https://assets.asaxiy.uz/brand//5e15c4697e437.jpg" alt="" />
                            </div>
                            <div className="c3img">
                                <img src="https://assets.asaxiy.uz/brand//5ff6f8872a0db.jpg" alt="" />
                            </div>
                            </div>
                        </div>
                        <div className="carusel3_2 cantener">
                            <div className="appimg">
                                <img src="https://asaxiy.uz/custom-assets/images/asaxiy-app.png" alt="" />
                            </div>
                            <div className="applink">
                                <a href="#"><img src={logo} alt="" /></a>
                                <p>Ваш интернет магазин</p>
                                <div className="app-link">
                                    <a href="https://apps.apple.com/uz/app/asaxiy/id1532401944"><img src={appstore} alt="" /></a>
                                    <a href="https://play.google.com/store/apps/details?id=uz.asaxiy.market"><img src={googleplay} alt="" /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
         );
    }
}
 
export default Links;