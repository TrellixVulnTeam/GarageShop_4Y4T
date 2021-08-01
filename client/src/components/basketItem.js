import React, {useContext, useEffect, useState} from 'react';
import {Context} from "../index";
import {useHistory} from 'react-router-dom';
import {Col, Row, Button, Dropdown, NavDropdown} from "react-bootstrap";
import {fetchBrands, fetchWares, fetchTypes, fetchBasketWare} from "../http/WareAPI";
import {observer} from "mobx-react-lite";
import jwt_decode from "jwt-decode";
import {Account_Route, Admin_Route, Login_Route, Shop_Route, Basket_Route} from "../utils/constants";

const BasketItem = observer(({wareBasket}) => {
    const [size, setSize] = useState('');

    return (
      <Row className = {'mt-2'}>
        <Col className = {'d-flex m-auto align-items-center justify-content-center '} md = {2}>
            <img className = {'bskImg'} src={process.env.REACT_APP_API_URL + wareBasket.img} />
        </Col>

        <Col className = {'d-flex m-auto align-items-center justify-content-center'} md = {3}>
            <h4>{wareBasket.name}</h4>
        </Col>
        <Col className = {'d-flex m-auto align-items-center justify-content-center'} md = {2}>
            <Dropdown>
                <NavDropdown id="nav-dropdown-dark-example" className={'size'} title={size ? size :'XS'} variant="outline-success">
                    <NavDropdown.Item href="#" onClick={()=>{setSize('XS')}}>XS</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#" onClick={()=>{setSize('S')}}>S</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#" onClick={()=>{setSize('M')}}>M</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#" onClick={()=>{setSize('L')}}>L</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#" onClick={()=>{setSize('XL')}}>XL</NavDropdown.Item>



                </NavDropdown>
            </Dropdown>

        </Col>
        <Col className = {'d-flex m-auto align-items-center justify-content-center'} md = {3}>
            <h3>{wareBasket.price}</h3>
        </Col>
      </Row>
    );
});

export default BasketItem;
