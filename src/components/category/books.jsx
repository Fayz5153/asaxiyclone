import React, { Component } from 'react';
import "./category.css"
import chat from "./chat.svg"
import star from "./star.svg"
import cart from "./cart.svg"

const data = require("./json/books.json")

class Books extends Component {
  state = {
    data: data
  }
  render(props) {
    return (
      <React.Fragment>
        <div className="category-asos cantener">

          {this.state.data.map((book) => {
            if (this.props.search === false) {
              return (
                <div className="category">
                  <div className="image"><img src={book.image} alt="" /></div>
                  <div className="title"><p>{book.name}</p></div>
                  <div className="feedback"><img className="star" src={star} alt="" /><p><img className="chat" src={chat} alt="" />{book.feedback}</p></div>
                  <div className="price"><p>{book.price}</p><img src={cart} alt="" /></div>
                </div>
              )
            }
            else {
              if (book.name.toUpperCase().includes(this.props.keyword.toUpperCase())) {
                return (
                  <div className="category">
                    <div className="image"><img src={book.image} alt="" /></div>
                    <div className="title"><p>{book.name}</p></div>
                    <div className="feedback"><img className="star" src={star} alt="" /><p><img className="chat" src={chat} alt="" />{book.feedback}</p></div>
                    <div className="price"><p>{book.price}</p><img src={cart} alt="" /></div>
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

export default Books;

{/* <div className="category">
  <div className="image"><img src={book.image} alt="" /></div>
  <div className="title"><p>{book.name}</p></div>
  <div className="feedback"><img className="star" src={star} alt="" /><p><img className="chat" src={chat} alt="" />{book.feedback}</p></div>
  <div className="price"><p>{book.price}</p><img src={cart} alt="" /></div>
</div> */}
{/* <div className="category-asos cantener">
                {this.state.data.map((book) => {
                  if (this.props.category === "all") {
                    if (this.props.search === true) {
                      if (book.brand.includes(this.props.keyword)) {
                        return (
                          <div key={book.id} className="category">
                            <div className="image"><img src={book.image} alt="" /></div>
                            <div className="title"><p>{book.name}</p></div>
                            <div className="feedback"><img className="star" src={star} alt="" /><p><img className="chat" src={chat} alt="" />{book.feedback}</p></div>
                            <div className="price"><p>{book.price}</p><img src={cart} alt="" /></div>
                          </div>
                        );
                      }
                      else{
                      }
                    }
                    else {
                      return (
                        <div key={book.id} className="category">
                            <div className="image"><img src={book.image} alt="" /></div>
                            <div className="title"><p>{book.name}</p></div>
                            <div className="feedback"><img className="star" src={star} alt="" /><p><img className="chat" src={chat} alt="" />{book.feedback}</p></div>
                            <div className="price"><p>{book.price}</p><img src={cart} alt="" /></div>
                          </div>
                      );
                    }
                  }
                   else if (props.category !== "all") {
                    if (book.category === props.category) {
                      return (
                        <div key={book.id} className="category">
                            <div className="image"><img src={book.image} alt="" /></div>
                            <div className="title"><p>{book.name}</p></div>
                            <div className="feedback"><img className="star" src={star} alt="" /><p><img className="chat" src={chat} alt="" />{book.feedback}</p></div>
                            <div className="price"><p>{book.price}</p><img src={cart} alt="" /></div>
                          </div>
                      );
                    }
                  }
                })}
              </div> */}