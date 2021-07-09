import React from 'react';
import {Container} from "react-bootstrap";

const Footer = () => {
    return (
        <Container>
            <div className="row fii row-30">
                <div className="col-md-4 col-xl-5">
                    <div className="pr-xl-4"><a className="brand" href="/"></a>
                        <p>We are an award-winning creative agency, dedicated to the best result in web
                            design,
                            promotion, business consulting, and marketing.</p>

                        <p className="rights"><span>©  </span><span
                            className="copyright-year">2020</span><span> </span><span>Neutrino</span><span>. </span><span>Все права защищены.</span>
                        </p>
                    </div>
                </div>
                <div className="col-md-4">
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
                <div className="orange col-md-4 col-xl-3">
                    <h5>Links</h5>
                    <ul className="nav-list">
                        <li><a href="#">Projects</a></li>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">Contacts</a></li>
                    </ul>
                </div>
            </div>
        </Container>
    );
};

export default Footer;