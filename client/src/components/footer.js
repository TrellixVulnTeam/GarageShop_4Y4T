import React from 'react';
import {Container} from "react-bootstrap";

const Footer = () => {
    return (
        <Container className={'footer'}>
            <div className="row fii row-30 courierNew">
                <div className="col-md-4 col-xl-5">
                    <div className="pr-xl-4 m-5"><a className="brand" href="/"></a>
                        <p className = {'courierNew'}>ИП Рогозина Арина Михайловна</p>
                        <p className = {'courierNew'}>ИНН: 500314701427</p>
                        <p className = {'courierNew'}>ОГРНИП: 320508100210242</p>
                        <p className="rights"><span>©  </span><span
                            className="copyright-year">2020</span><span> </span><span>Neutrino</span><span>. </span><span>Все права защищены.</span>
                        </p>
                    </div>
                </div>
                <div className="col-md-4 mt-5">
                    <h5>Contacts</h5>
                    <dl className="contact-list">
                        <dt>email:</dt>
                        <dd><a href="mailto:#">ThePursuer@mail.ru</a></dd>
                    </dl>
                    <dl className="contact-list">
                        <dt>Телефон:</dt>
                        <dd><a href="tel:#">8-986-986-69-79</a> <span><br/>Или<br/></span> <a href="tel:#">8-989-249-66-16</a>
                        </dd>
                    </dl>
                </div>
                
            </div>
        </Container>
    );
};

export default Footer;
