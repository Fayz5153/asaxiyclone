import React, { Component } from 'react';
import "./navbar.css"
import tv from "./files/tv.svg"
import phone from "./files/phone.svg"
import air from "./files/air.svg"
import book from "./files/book.svg"
import { Link } from 'react-router-dom';

class Navbar extends Component {
    state = { }
    render() { 
        return ( 
            <React.Fragment>
                <div className="category-asos cantener">
                        {this.state.airs.map((air) => {
                            if (this.props.search === false) {
                                return (
                                    <div className="category dnone">
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

                    <div className="category-asos cantener">
                        {this.state.tvs.map((tv) => {
                            if (this.props.search === false) {
                            return (
                                <div className="category dnone">
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

                    <div className="category-asos cantener">
                        {this.state.phones.map((phone) => {
                            if (this.props.search === false) {
                            return (
                                <div className="category dnone">
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

                    <div className="category-asos cantener">
                        {this.state.books.map((book) => {
                            if (this.props.search === false) {
                            return (
                                <div className="category dnone">
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
 
export default Navbar;

















