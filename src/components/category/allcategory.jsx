import React, { Component } from 'react';
import { Link, Route} from 'react-router-dom';
import chat from "./chat.svg"
import star from "./star.svg"
import cart from "./cart.svg"
import "./category.css"

const all = require("../category/json/all.json")
// const phone = require("../category/json/mobile.json")
// const books = require("../category/json/books.json")
// const tv = require("../category/json/tv.json")

class Allcategory extends Component {
    state = { 
        // tvs:tv,
        // phones:phone,
        // books:books,
        // airs:air,
        all:all
     }
    render(props) { 
        return ( 
            <React.Fragment>
                <div className="allcategory cantener">
                <div className="back">
                   <Link exact to="/">Назад</Link>
                    <p>Резултати поиска</p> 
                </div>
                
                <div className="category-asos cantener">
                {this.state.all.map((all) => {
                        if (this.props.keyword === "") {
                          return (
                            null
                          )
                        }
                        else  {
                          if (all.name.toUpperCase().includes(this.props.keyword.toUpperCase())) {
                            return (
                              <div className="category">
                                  <div className="image"><img src={all.image} alt="" /></div>
                                  <div className="brand"><a href="#">{all.brand}</a></div>
                                  <div className="title"><p>{all.name}</p></div>
                                  <div className="feedback"><img className="star" src={star} alt="" /><p><img className="chat" src={chat} alt="" />{all.feedback}</p></div>
                                  <div className="price"><p>{all.price}</p><img src={cart} alt="" /></div>
                              </div>
                            )
                          }
                        }
                    })}
                </div>
                </div>
            </React.Fragment>
         );
    }
}
 
export default Allcategory;

