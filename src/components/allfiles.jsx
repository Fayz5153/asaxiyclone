import React, { Component } from 'react';
import Search from "./search/search"
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import "./navbar/navbar.css"
import CaruselBig from "./sliders/sliderbig"
import Links from "./links/Links"
import Footer from "./footer/footer"
import "./responsive.css"

class Allfiles extends Component {
    state = {  }
    render() { 
        return ( 
        <React.Fragment>
                <div className="asos">
                        <div className="search"><Search/></div>
                        <div className="main">
                            <Switch>
                                <Route exact path="/" component={CaruselBig}/>
                            </Switch>
                        </div>
                        <div className="asos-links">
                            <Links/>
                        </div>
                        <div className="asos-footer">
                            <Footer/>
                        </div>
                </div>
        </React.Fragment>
         );
    }
}
 
export default Allfiles;