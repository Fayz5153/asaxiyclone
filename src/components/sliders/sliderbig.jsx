import React, { Component } from 'react';
import {Carousel, CarouselItem} from "react-bootstrap"
import i1 from "./files/1.jpg"
import i2 from "./files/2.jpg"
import i3 from "./files/3.jpg"
import i4 from "./files/4.jpg"
import "./slider.css"
import star from "./files/star.svg"
import cart from "./files/cart.svg"
import chat from "./files/chat.svg"
import stiv from "./files/stiv.jpg"
import band from "./files/band.jpg"

const data1 = require("./json/s1.json")
const data2 = require("./json/s2.json")
const data3 = require("./json/s3.json")
const data4 = require("./json/s4.json")
const book = require("./json/books.json")
const tv = require("./json/tv.json")
const tv1 = require("./json/tv1.json")
const air = require("./json/kond.json")
const air1 = require("./json/kond1.json")
const brand = require("./json/brands.json")
const phone = require("./json/mobile.json")
const phone1 = require("./json/mobile1.json")

class CaruselBig extends Component {
    state = { 
        d1: data1,
        d2: data2,
        d3: data3,
        d4: data4,
        book:book,
        phone:phone,
        phone1:phone1,
        air:air,
        air1:air1,
        tv:tv,
        tv1:tv1,
        brand:brand,
     }
    render() { 
        return ( 
            <React.Fragment>
                <div className="carusels1 cantener">
                    <div className="carusel-big">
                        <Carousel touch>
                            <Carousel.Item interval={3000}>
                                <img
                                className="d-block big-carusel-img"
                                src={i1}
                                alt={i1}
                                />
                            </Carousel.Item>
                            <Carousel.Item interval={3000}>
                                <img
                                className="d-block big-carusel-img"
                                src={i2}
                                alt={i2}
                                />
                            </Carousel.Item>
                            <Carousel.Item interval={3000}>
                                <img
                                className="d-block big-carusel-img"
                                src={i3}
                                alt={i3}
                                />
                            </Carousel.Item>
                            <Carousel.Item interval={3000}>
                                <img
                                className="d-block big-carusel-img"
                                src={i4}
                                alt={i4}
                                />
                            </Carousel.Item>
                        </Carousel>
                    </div>
                    <div className="carusel-big2">
                        <div className="carusel1">
                            <div className="carusel1_1">
                                <Carousel fade
                                interval={null}>
                                    {
                                        this.state.d1.map((d1)=>{
                                            return(
                                                <CarouselItem interval={null}>
                                                    <div className="carusel2_1">
                                                    <div><img src={d1.image} alt="" /></div>
                                                    <div>
                                                        <h1>{d1.brand}</h1>
                                                        <p>{d1.type}</p>
                                                        
                                                    </div>
                                                    </div><p className="pslayd">{d1.name}</p>
                                                </CarouselItem>
                                            )
                                        })
                                    }
                                </Carousel>
                            </div>
                            <div className="carusel1_1">
                            <Carousel fade interval={null}>
                                    {
                                        this.state.d2.map((d2)=>{
                                            return(
                                                <CarouselItem interval={null}>
                                                    <div className="carusel2_1">
                                                    <div><img src={d2.image} alt="" /></div>
                                                    <div>
                                                        <p>{d2.type}</p>
                                                        
                                                    </div>
                                                    </div><p className="pslayd">{d2.name}</p>
                                                </CarouselItem>
                                            )
                                        })
                                    }
                                </Carousel>
                            </div>
                        </div>
                        <div className="carusel2">
                            <div className="carusel1_2">
                                <Carousel fade interval={null}>
                                    {
                                        this.state.d3.map((d3)=>{
                                            return(
                                                <CarouselItem interval={null}>
                                                    <div className="carusel2_2">
                                                    <div>
                                                        <h1>{d3.brand}</h1>
                                                        <p>{d3.type}</p>
                                                        
                                                    </div>
                                                    <div><img src={d3.image} alt="" /></div>
                                                    </div>
                                                    <p className="pslayd">{d3.name}</p>
                                                </CarouselItem>
                                            )
                                        })
                                    }
                                </Carousel>
                            </div>
                            <div className="carusel1_2">
                                <Carousel fade interval={null}>
                                    {
                                        this.state.d4.map((d4)=>{
                                            return(
                                                <CarouselItem interval={null}>
                                                    <div className="carusel2_2">
                                                    <div>
                                                        <h1>{d4.brand}</h1>
                                                        <p>{d4.type}</p>
                                                        
                                                    </div>
                                                    <div><img src={d4.image} alt="" /></div>
                                                    </div><p className="pslayd">{d4.name}</p>
                                                </CarouselItem>
                                            )
                                        })
                                    }
                                </Carousel>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="carusels2 cantener">
                    <div className="caruselmain cantener">
                        <div className="mainchap1">
                            {this.state.book.map((book)=>{
                                return(
                                    <div className="bookslider">
                                        <img src={book.image} alt="" />
                                        <p>{book.name}</p>
                                    </div>
                                )
                            })}
                        </div>
                        <div className="mainchap2">
                            
                            <div className="category"><p className="haftatavari">Товар недели</p>
                                <div className="image"><img src={stiv} alt="" /></div>
                                <div className="title"><p>Уолтер Айзексон: Стив Жобс</p></div>
                                <div className="feedback"><img className="star" src={star} alt="" /><p><img className="chat" src={chat} alt="" />53 отзывов</p></div>
                                <div className="price"><p>59 000 сум</p><img src={cart} alt="" /></div>
                            </div>
                        </div>
                        <div className="mainchap3">
                            <div className="category"><p className="haftatavari">Топ продукт</p>
                                <div className="image"><img src={band} alt="" /></div>
                                <div className="brand"><a href="#">Xiaomi</a></div>
                                <div className="title"><p>Смарт браслет Xiaomi Mi Band 4 (Русское Меню)</p></div>
                                <div className="feedback"><img className="star" src={star} alt="" /><p><img className="chat" src={chat} alt="" />10 отзывов</p></div>
                                <div className="price"><p>269 000 сум</p><img src={cart} alt="" /></div>
                            </div>    
                        </div></div>
                    <div className="caruselmain">
                        <div className="mainslayd1">
                            <p className="pnew">Популярные товары</p>
                            <Carousel>
                                <CarouselItem>
                                    <div className="mailslayd">
                                {this.state.phone.map((phone) => {
                                    return(
                                            
                                            <div className="category">
                                                <div className="image"><img src={phone.image} alt="" /></div>
                                                <div className="brand"><a href="#">{phone.brand}</a></div>
                                                <div className="title"><p>{phone.name}</p></div>
                                                <div className="feedback"><img className="star" src={star} alt="" /><p><img className="chat" src={chat} alt="" />{phone.feedback}</p></div>
                                                <div className="price"><p>{phone.price}</p><img src={cart} alt="" /></div>
                                            </div>
                                            
                                    )
                                })}</div>
                                </CarouselItem>
                                <CarouselItem>
                                    <div className="mailslayd">
                                {this.state.phone1.map((phone1) => {
                                    return(
                                            
                                            <div className="category">
                                                <div className="image"><img src={phone1.image} alt="" /></div>
                                                <div className="brand"><a href="#">{phone1.brand}</a></div>
                                                <div className="title"><p>{phone1.name}</p></div>
                                                <div className="feedback"><img className="star" src={star} alt="" /><p><img className="chat" src={chat} alt="" />{phone1.feedback}</p></div>
                                                <div className="price"><p>{phone1.price}</p><img src={cart} alt="" /></div>
                                            </div>
                                            
                                    )
                                })}</div>
                                </CarouselItem>
                            </Carousel>
                        </div>
                        <div className="mainslayd1">
                        <p className="pnew">Популярные товары</p>
                            <Carousel>
                                <CarouselItem>
                                    <div className="mailslayd">
                                {this.state.air.map((air) => {
                                    return(
                                            
                                            <div className="category">
                                                <div className="image"><img src={air.image} alt="" /></div>
                                                <div className="brand"><a href="#">{air.brand}</a></div>
                                                <div className="title"><p>{air.name}</p></div>
                                                <div className="feedback"><img className="star" src={star} alt="" /><p><img className="chat" src={chat} alt="" />{air.feedback}</p></div>
                                                <div className="price"><p>{air.price}</p><img src={cart} alt="" /></div>
                                            </div>
                                            
                                    )
                                })}</div>
                                </CarouselItem>
                                <CarouselItem>
                                    <div className="mailslayd">
                                {this.state.air1.map((air1) => {
                                    return(
                                            
                                            <div className="category">
                                                <div className="image"><img src={air1.image} alt="" /></div>
                                                <div className="brand"><a href="#">{air1.brand}</a></div>
                                                <div className="title"><p>{air1.name}</p></div>
                                                <div className="feedback"><img className="star" src={star} alt="" /><p><img className="chat" src={chat} alt="" />{air1.feedback}</p></div>
                                                <div className="price"><p>{air1.price}</p><img src={cart} alt="" /></div>
                                            </div>
                                            
                                    )
                                })}</div>
                                </CarouselItem>
                            </Carousel>
                        </div>
                        <div className="mainslayd1">
                        <p className="pnew">Популярные товары</p>
                            <Carousel>
                                <CarouselItem>
                                    <div className="mailslayd">
                                {this.state.tv.map((tv) => {
                                    return(
                                            
                                            <div className="category">
                                                <div className="image"><img src={tv.image} alt="" /></div>
                                                <div className="brand"><a href="#">{tv.brand}</a></div>
                                                <div className="title"><p>{tv.name}</p></div>
                                                <div className="feedback"><img className="star" src={star} alt="" /><p><img className="chat" src={chat} alt="" />{tv.feedback}</p></div>
                                                <div className="price"><p>{tv.price}</p><img src={cart} alt="" /></div>
                                            </div>
                                            
                                    )
                                })}</div>
                                </CarouselItem>
                                <CarouselItem>
                                    <div className="mailslayd">
                                {this.state.tv1.map((tv1) => {
                                    return(
                                            
                                            <div className="category">
                                                <div className="image"><img src={tv1.image} alt="" /></div>
                                                <div className="brand"><a href="#">{tv1.brand}</a></div>
                                                <div className="title"><p>{tv1.name}</p></div>
                                                <div className="feedback"><img className="star" src={star} alt="" /><p><img className="chat" src={chat} alt="" />{tv1.feedback}</p></div>
                                                <div className="price"><p>{tv1.price}</p><img src={cart} alt="" /></div>
                                            </div>
                                            
                                    )
                                })}</div>
                                </CarouselItem>
                            </Carousel>
                        </div>
                    </div>
                </div>
                
            </React.Fragment>
         );
    }
}
 
export default CaruselBig;



{/* <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active" data-bs-interval="2500">
                            <img src={i1} class="d-block w-100" alt={i1}/>
                        </div>
                        <div class="carousel-item" data-bs-interval="2500">
                            <img src={i2} class="d-block w-100" alt={i2}/>
                        </div>
                        <div class="carousel-item" data-bs-interval="2500">
                            <img src={i3} class="d-block w-100" alt={i3}/>
                        </div>
                        <div class="carousel-item" data-bs-interval="2500">
                            <img src={i4} class="d-block w-100" alt={i4}/>
                        </div>
                    </div>
                </div> */}