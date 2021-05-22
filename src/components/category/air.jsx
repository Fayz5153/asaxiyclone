import React, { Component } from 'react';
import "./category.css"
import chat from "./chat.svg"
import star from "./star.svg"
import cart from "./cart.svg"

const data = require("./json/kond.json")
class Air extends Component {
    state = { 
        data:data
     }
    render(props) { 
        return ( 
            <React.Fragment>
                <div className="category-asos cantener">
                    {this.state.data.map((air) => {
                        if (this.props.search === false) {
                          return (
                            <div className="category">
                              <div className="image"><img src={air.image} alt="" /></div>
                              <div className="brand"><a href="#">{air.brand}</a></div>
                              <div className="title"><p>{air.name}</p></div>
                              <div className="feedback"><img className="star" src={star} alt="" /><p><img className="chat" src={chat} alt="" />{air.feedback}</p></div>
                              <div className="price"><p>{air.price}</p><img src={cart} alt="" /></div>
                          </div>
                          )
                        }
                        else {
                          if (air.name.toUpperCase().includes(this.props.keyword.toUpperCase())) {
                            return (
                              <div className="category">
                                  <div className="image"><img src={air.image} alt="" /></div>
                                  <div className="brand"><a href="#">{air.brand}</a></div>
                                  <div className="title"><p>{air.name}</p></div>
                                  <div className="feedback"><img className="star" src={star} alt="" /><p><img className="chat" src={chat} alt="" />{air.feedback}</p></div>
                                  <div className="price"><p>{air.price}</p><img src={cart} alt="" /></div>
                              </div>
                            )
                          }
                        }
                    })}
                </div>
            </React.Fragment>
         );
    }
}
 
export default Air;






{/* <div className="category-asos cantener">
                {this.state.data.map((air) => {
                  if (this.props.category === "all") {
                    if (this.props.search === true) {
                      if (air.brand.includes(this.props.keyword)) {
                        return (
                          <div key={air.id} className="category">
                            <div className="image"><img src={air.image} alt="" /></div>
                            <div className="title"><p>{air.name}</p></div>
                            <div className="feedback"><img className="star" src={star} alt="" /><p><img className="chat" src={chat} alt="" />{air.feedback}</p></div>
                            <div className="price"><p>{air.price}</p><img src={cart} alt="" /></div>
                          </div>
                        );
                      }
                      else{
                      }
                    }
                    else {
                      return (
                        <div key={air.id} className="category">
                            <div className="image"><img src={air.image} alt="" /></div>
                            <div className="title"><p>{air.name}</p></div>
                            <div className="feedback"><img className="star" src={star} alt="" /><p><img className="chat" src={chat} alt="" />{air.feedback}</p></div>
                            <div className="price"><p>{air.price}</p><img src={cart} alt="" /></div>
                          </div>
                      );
                    }
                  }
                   else if (props.category !== "all") {
                    if (air.category === props.category) {
                      return (
                        <div key={air.id} className="category">
                            <div className="image"><img src={air.image} alt="" /></div>
                            <div className="title"><p>{air.name}</p></div>
                            <div className="feedback"><img className="star" src={star} alt="" /><p><img className="chat" src={chat} alt="" />{air.feedback}</p></div>
                            <div className="price"><p>{air.price}</p><img src={cart} alt="" /></div>
                          </div>
                      );
                    }
                  }
                })}
              </div> */}