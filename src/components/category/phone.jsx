import React, { Component } from 'react';
import "./category.css"
import chat from "./chat.svg"
import star from "./star.svg"
import cart from "./cart.svg"

const data = require("./json/mobile.json")
class Phone extends Component {
    state = { 
        data:data
     }
    render(props) { 
        return ( 
            <React.Fragment>
                <div className="category-asos cantener">
                    {this.state.data.map((phone) => {
                        if (this.props.search === false) {
                          return (
                            <div className="category">
                              <div className="image"><img src={phone.image} alt="" /></div>
                              <div className="brand"><a href="#">{phone.brand}</a></div>
                              <div className="title"><p>{phone.name}</p></div>
                              <div className="feedback"><img className="star" src={star} alt="" /><p><img className="chat" src={chat} alt="" />{phone.feedback}</p></div>
                              <div className="price"><p>{phone.price}</p><img src={cart} alt="" /></div>
                            </div>
                          )
                        }
                        else {
                          if (phone.name.toUpperCase().includes(this.props.keyword.toUpperCase())) {
                            return (
                              <div className="category">
                                <div className="image"><img src={phone.image} alt="" /></div>
                                <div className="brand"><a href="#">{phone.brand}</a></div>
                                <div className="title"><p>{phone.name}</p></div>
                                <div className="feedback"><img className="star" src={star} alt="" /><p><img className="chat" src={chat} alt="" />{phone.feedback}</p></div>
                                <div className="price"><p>{phone.price}</p><img src={cart} alt="" /></div>
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
 
export default Phone;


{/* <div className="category-asos cantener">
                {this.state.data.map((phone) => {
                  if (this.props.category === "all") {
                    if (this.props.search === true) {
                      if (phone.brand.includes(this.props.keyword)) {
                        return (
                          <div key={phone.id} className="category">
                            <div className="image"><img src={phone.image} alt="" /></div>
                            <div className="title"><p>{phone.name}</p></div>
                            <div className="feedback"><img className="star" src={star} alt="" /><p><img className="chat" src={chat} alt="" />{phone.feedback}</p></div>
                            <div className="price"><p>{phone.price}</p><img src={cart} alt="" /></div>
                          </div>
                        );
                      }
                      else{
                      }
                    }
                    else {
                      return (
                        <div key={phone.id} className="category">
                            <div className="image"><img src={phone.image} alt="" /></div>
                            <div className="title"><p>{phone.name}</p></div>
                            <div className="feedback"><img className="star" src={star} alt="" /><p><img className="chat" src={chat} alt="" />{phone.feedback}</p></div>
                            <div className="price"><p>{phone.price}</p><img src={cart} alt="" /></div>
                          </div>
                      );
                    }
                  }
                   else if (props.category !== "all") {
                    if (phone.category === props.category) {
                      return (
                        <div key={phone.id} className="category">
                            <div className="image"><img src={phone.image} alt="" /></div>
                            <div className="title"><p>{phone.name}</p></div>
                            <div className="feedback"><img className="star" src={star} alt="" /><p><img className="chat" src={chat} alt="" />{phone.feedback}</p></div>
                            <div className="price"><p>{phone.price}</p><img src={cart} alt="" /></div>
                          </div>
                      );
                    }
                  }
                })}
              </div> */}