import React, {useContext, useEffect, useState} from 'react';
import {Context} from "../index";
import {useHistory} from 'react-router-dom';
import {Col, Row, Button} from "react-bootstrap";
import {fetchBrands, fetchWares, fetchTypes, fetchOneWare} from "../http/WareAPI";
import {observer} from "mobx-react-lite";
import jwt_decode from "jwt-decode";
import {Account_Route, Admin_Route, Login_Route, Shop_Route, Basket_Route} from "../utils/constants";
import BasketItem from './basketItem.js'

const BasketListNoUser = observer(() => {
    
    const {ware} = useContext(Context);
    
 
    const [basket, setBasket] = useState([]);
    const history = useHistory();
    
    
   let array = JSON.parse(localStorage.getItem('waresInLocalstorage'));
        console.log(array)
    if(array){
        return (
      <Row className = {'m-5 basketItem'}>
        {array.map(ware =>
            <BasketItem wareBasket={ware}/>
        )}
      </Row>
    );
    }
    if(!array){
        return (
      <Row className = {'m-5 basketItem'}>
    
      </Row>
    );
    }
   
    
    
});

export default BasketListNoUser;
