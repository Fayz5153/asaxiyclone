import React, { Component } from 'react';
import "./category.css"
import chat from "./chat.svg"
import star from "./star.svg"
import cart from "./cart.svg"

const data = require("./json/tv.json")
class Tv extends Component {
    state = { 
        data:data
     }
    render(props) { 
        return ( 
            <React.Fragment>
                <div className="category-asos cantener">
                    {this.state.data.map((tv) => {
                        if (this.props.search === false) {
                          return (
                            <div className="category">
                              <div className="image"><img src={tv.image} alt="" /></div>
                              <div className="brand"><a href="#">{tv.brand}</a></div>
                              <div className="title"><p>{tv.name}</p></div>
                              <div className="feedback"><img className="star" src={star} alt="" /><p><img className="chat" src={chat} alt="" />{tv.feedback}</p></div>
                              <div className="price"><p>{tv.price}</p><img src={cart} alt="" /></div>
                            </div>
                          )
                        }
                        else {
                          if (tv.name.toUpperCase().includes(this.props.keyword.toUpperCase())) {
                            return (
                              <div className="category">
                                <div className="image"><img src={tv.image} alt="" /></div>
                                <div className="brand"><a href="#">{tv.brand}</a></div>
                                <div className="title"><p>{tv.name}</p></div>
                                <div className="feedback"><img className="star" src={star} alt="" /><p><img className="chat" src={chat} alt="" />{tv.feedback}</p></div>
                                <div className="price"><p>{tv.price}</p><img src={cart} alt="" /></div>
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
 
export default Tv;


{/* <div className="category-asos cantener">
                {this.state.data.map((tv) => {
                  if (this.props.category === "all") {
                    if (this.props.search === true) {
                      if (tv.brand.includes(this.props.keyword)) {
                        return (
                          <div key={tv.id} className="category">
                            <div className="image"><img src={tv.image} alt="" /></div>
                            <div className="title"><p>{tv.name}</p></div>
                            <div className="feedback"><img className="star" src={star} alt="" /><p><img className="chat" src={chat} alt="" />{tv.feedback}</p></div>
                            <div className="price"><p>{tv.price}</p><img src={cart} alt="" /></div>
                          </div>
                        );
                      }
                      else{
                      }
                    }
                    else {
                      return (
                        <div key={tv.id} className="category">
                            <div className="image"><img src={tv.image} alt="" /></div>
                            <div className="title"><p>{tv.name}</p></div>
                            <div className="feedback"><img className="star" src={star} alt="" /><p><img className="chat" src={chat} alt="" />{tv.feedback}</p></div>
                            <div className="price"><p>{tv.price}</p><img src={cart} alt="" /></div>
                          </div>
                      );
                    }
                  }
                   else if (props.category !== "all") {
                    if (tv.category === props.category) {
                      return (
                        <div key={tv.id} className="category">
                            <div className="image"><img src={tv.image} alt="" /></div>
                            <div className="title"><p>{tv.name}</p></div>
                            <div className="feedback"><img className="star" src={star} alt="" /><p><img className="chat" src={chat} alt="" />{tv.feedback}</p></div>
                            <div className="price"><p>{tv.price}</p><img src={cart} alt="" /></div>
                        </div>
                      );
                    }
                  }
                })}
              </div> */}