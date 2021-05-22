import React, { Component } from 'react';
import "./footer.css"
import imgf from "./files/image.jpg"
import telegram from "./files/telegram.svg"
import facebook from "./files/facebook.svg"
import instagram from "./files/instagram.svg"

class Footer extends Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>
                <div className="footer cantener">
                    <div className="footer1 cantener">
                        <a href="#" className="f1">
                            <div><img src="https://asaxiy.uz/custom-assets/images/icons/market.svg" alt="" /></div>
                            <div>
                                <h2>Больше не нужно ходить на базар</h2>
                                <p>У нас выгодные цены и доставка до дома</p>
                            </div>
                        </a>
                        <a href="#" className="f1">
                            <div><img src="https://asaxiy.uz/custom-assets/images/icons/fast-delivery.svg" alt="" /></div>
                            <div>
                                <h2>Удобства для вас</h2>
                                <p>Наш сервис удивит вас</p>
                            </div>
                        </a>
                        <a href="#" className="f1">
                            <div><img src="https://asaxiy.uz/custom-assets/images/icons/return.svg" alt="" /></div>
                            <div>
                                <h2>Быстрая доставка</h2>
                                <p>Быстрое оформление и гарантия на возврат в случае неисправности</p>
                            </div>
                        </a>
                        <a href="#" className="f1">
                            <div><img src="https://asaxiy.uz/custom-assets/images/icons/card.svg" alt="" /></div>
                            <div>
                                <h2>Рассрочка</h2>
                                <p>Без предоплаты на 12 или 18 месяцев</p>
                            </div>
                        </a>
                    </div>
                    <div className="footer2 cantener">
                        <div className="f2">
                            <p>Информация</p>
                            <a href="#">Пользовательское соглашение</a>
                            <a href="#">Условия рассрочки</a>
                            <a href="#">Информация о доставке</a>
                            <a href="#">Возврат товара</a>
                            <a href="#">О нас</a>
                        </div>
                        <div className="f2">
                            <p>Для связи</p>
                            <a href="#"><img src="https://asaxiy.uz/custom-assets/images/phone.svg" alt="" />+998 71 200 01 05</a>
                            <a href="#"><img src="https://asaxiy.uz/custom-assets/images/mail.svg" alt="" /> info@asaxiy.uz</a>
                            <a href="#"><img src="https://asaxiy.uz/custom-assets/images/location.svg" alt="" /> Чиланзар 3, Ташкент</a>
                        </div>
                        <div className="f2 f2_3">
                            <p>Наш Facebook</p>
                            <img className="flogo" src={imgf} alt="" />
                        </div>
                    </div>
                    <div className="footer3 cantener">
                        <div className="f3">
                            <p>Виды оплаты :</p>
                            <a className="cart" href="#"><img src="https://asaxiy.uz/custom-assets/images/click-logo.svg" alt="" /></a>
                            <a className="cart" href="#"><img src="https://asaxiy.uz/custom-assets/images/payme.svg" alt="" /></a>
                        </div>
                        <div className="f3">
                            <p>Мы в соц. сетях :</p>
                            <a href="https://facebook.com/asaxiyuz/"><img src={facebook} alt="" /></a>
                            <a href="https://t.me/asaxiyuz"><img src={telegram} alt="" /></a>
                            <a href="https://instagram.com/asaxiy.uz/"><img src={instagram} alt="" /></a>
                        </div>
                    </div>
                </div>
            </React.Fragment>
         );
    }
}
 
export default Footer;