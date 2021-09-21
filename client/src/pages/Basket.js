import React, {useContext, useEffect} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import BasketList from "../components/basketList.js";
import BasketForm from "../components/BasketForm.js";
import BasketFormNoUser from "../components/BasketFormNoUser.js";
import BasketListNoUser from "../components/basketListNoUser.js";

import New from "../components/New";
import {Context} from "../index";
import {fetchBrands, fetchWares, fetchTypes, fetchOneWare} from "../http/WareAPI";
import {observer} from "mobx-react-lite";

const Basket = observer(() => {
    
const {user, ware} = useContext(Context);
    
    if(user.isAuth){
        
    return (
        <>

            <Container className = {'text-center'} fluid={true}>
                <h1 className={'m-3 basketH1'}>Корзина</h1>
                <Row className={'text-center m-3'}>
                    <BasketList />
                    <BasketForm />
                    
                </Row>
            </Container>
        </>
    );
    }
    if(!user.isAuth){
        
    
        return (
        <>

            <Container className = {'text-center'} fluid={true}>
                <h1 className={'m-3 basketH1'}>Корзина</h1>
                <Row className={'text-center m-3'}>
                    <BasketListNoUser />
                    <BasketFormNoUser />
                    
                </Row>
            </Container>
        </>
    );
    }
});

export default Basket;
