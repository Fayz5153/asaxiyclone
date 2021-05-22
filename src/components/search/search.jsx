import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import asaxiyimg from "./files/asaxiylogo.svg";
import searchimg from "./files/search.svg";
import "./search.css";
import Books from "../category/books"
import Phone from "../category/phone"
import Tv from "../category/tv"
import Air from "../category/air"
import tv from "../navbar/files/tv.svg"
import phone from "../navbar/files/phone.svg"
import air from "../navbar/files/air.svg"
import book from "../navbar/files/book.svg"
import Allcategory from "../category/allcategory"


class Search extends Component {
    state = {
        language: false,
        category: "all",
        menu: false,
        key: "",
        search: true,
    }
    handleMenu = () => {
        this.setState({
            menu: !this.state.menu,
        });
    };
    handleSearch = () => {
        if(this.state.key !== ""){
            this.setState({search:true})
        }
    }
    handleclass = () => {
        if (this.state.language === false) {
            return ""
        }
        else {
            return "s"
        }
    }
    handlelanguage = () => {
        this.setState({
            language: !this.state.language
        })
    }
    render() {
        return (
            <React.Fragment>
                <div className="search1 cantener">
                    <div className="logo-div">
                        <Link exact to="/">
                            <img src={asaxiyimg} alt="" /></Link>
                    </div>
                    <div className="search-div">
                        <input onChange={(event) => {
                            this.setState({ key: event.target.value });
                        }} type="text" placeholder="Поиск..." name="" id="" />
                        <Link to="/search"><img src={searchimg} alt="" /><p>Поиск</p></Link>
                    </div>
                    <div className="user-div">
                        <div class={`div-language borders` + this.handleclass()}>
                            <button onClick={this.handlelanguage}>
                                Русский
                            </button>
                            <ul class={`language` + this.handleclass()}>
                                <li class="item1"><a href="#">O'zbekcha</a></li>
                                <li class="item2"><a href="#">Ўзбекча</a></li>
                                <li class="item3"><a href="#">Русский</a></li>
                            </ul>
                        </div>
                        <div className="div-cart">
                            <div><button><svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 4.562L7.768 9.64a1 1 0 11-1.536-1.28l5-6a1 1 0 011.536 0l5 6a1 1 0 11-1.536 1.28L12 4.562z" fill="#C2C6D1" /><path fill-rule="evenodd" clip-rule="evenodd" d="M3.5 9a1 1 0 00-.923 1.385l3.654 8.769A3 3 0 009 21h6a3 3 0 002.77-1.846l3.653-8.77A1 1 0 0020.5 9h-17zM14 15a2 2 0 11-4 0 2 2 0 014 0z" fill="#C2C6D1" /></svg>Корзинка</button></div>
                            <div className="savatcha">
                                <div className="savat1"></div>
                                <div className="savat">
                                    <div className="savat2"><p>Сумма</p> <p>0 сум</p></div>
                                    <div className="savat3 "><a href="">ОФОРМИТЬ ПОКУПКУ</a></div>
                                    <div className="savat4"><a href="">ПЕРЕЙТИ В КОРЗИНКУ</a></div>
                                </div>

                            </div>
                        </div>
                        <div className="div-phone"><a href="tel:+998 71 200 01 05"><i class="fas fa-mobile-alt"></i>  +998 71 200 01 05</a></div>
                    </div>
                    <div className="orta_chiziq"></div>
                </div><br />
                <div className="navbar navshadow">
                    <div class="nav_bar cantener">
                        <Link to="/book"><img src={book} alt="" />Книги</Link>
                        <Link to="/phone"><img src={phone} alt="" />Телефоны и гаджеты</Link>
                        <Link to="/air"><img src={air} alt="" />Кондиционеры</Link>
                        <Link to="/tv"><img src={tv} alt="" />Телевизоры, видео и аудио</Link>
                    </div>
                </div>
                <div className="main">
                    <Switch>
                        <Route path="/book" component={Books} >
                            <Books
                                keyword={this.state.key}
                                search={this.state.search}
                                category={this.state.category} />
                        </Route>
                        <Route path="/phone" component={Phone} >
                            <Phone
                                keyword={this.state.key}
                                search={this.state.search}
                                category={this.state.category} />
                        </Route>
                        <Route path="/air" component={Air} >
                            <Air
                                keyword={this.state.key}
                                search={this.state.search}
                                category={this.state.category} />
                        </Route>
                        <Route path="/tv" component={Tv} >
                            <Tv
                                keyword={this.state.key}
                                search={this.state.search}
                                category={this.state.category} />
                        </Route>
                        <Route path="/search" component={Allcategory}>
                        <Allcategory
                            keyword={this.state.key}
                            search={this.state.search}
                            category={this.state.category}/>
                        </Route>
                    </Switch>
                </div>
            </React.Fragment>
        );
    }
}

export default Search;