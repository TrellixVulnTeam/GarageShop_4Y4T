import React, {useContext, useEffect} from 'react';
import {Context} from "../index";
import {useHistory} from 'react-router-dom';
import {Col, Row, Button} from "react-bootstrap";
import {fetchBrands, fetchWares, fetchTypes, fetchBasketWare} from "../http/WareAPI";
import {observer} from "mobx-react-lite";
import jwt_decode from "jwt-decode";
import {Account_Route, Admin_Route, Login_Route, Shop_Route, Basket_Route} from "../utils/constants";
import BasketItem from './basketItem.js'

const BasketList = observer(() => {
    const {ware, user} = useContext(Context);
    let token = localStorage.getItem('token');

    let userName = jwt_decode(token);
    const history = useHistory();
    let wareInBacket;
    useEffect(()=>{
      try {
          
            fetchBasketWare(userName.id.id).then(data=>{ware.setWaresInBasket(data)})
            
          
      } catch (e) {
        console.log(e);
        history.push(Shop_Route);
      };

    },[])
    return (
      <Row className = {'m-5 basketItem'}>
      {ware.waresInBasket.map(ware =>
          <BasketItem key={ware.id} wareBasket={ware}/>
      )}

      </Row>
    );
});

export default BasketList;
