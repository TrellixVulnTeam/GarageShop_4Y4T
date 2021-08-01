import React, {useContext, useEffect} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import BasketList from "../components/basketList.js";
import New from "../components/New";
import {Context} from "../index";
import {fetchBrands, fetchWares, fetchTypes} from "../http/WareAPI";
import {observer} from "mobx-react-lite";

const Basket = observer(() => {


    return (
        <>

            <Container className = {'text-center'} fluid={true}>
                <h1 className={'m-3 basketH1'}>Корзина ебучая</h1>
                <Row className={'text-center m-3'}>
                    <BasketList />
                </Row>
            </Container>
        </>
    );
});

export default Basket;
