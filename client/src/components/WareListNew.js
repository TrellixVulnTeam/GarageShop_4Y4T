import React, {useContext, useState,useEffect} from 'react';
import {Col, Container, Row, Button} from "react-bootstrap";
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import WareItem from "./WareItem";
import {fetchBrands, fetchWares, fetchTypes} from "../http/WareAPI";
import {ShopTypes_Route} from "../utils/constants";
import {useHistory} from 'react-router-dom';



const WareListNew = observer(({wares, title}) => {
        const history = useHistory();
    const {ware} = useContext(Context);
 
    wares.splice(0, wares.length - 3);

    return (
        <Container fluid className={'position-relative overflow-hidden mb-5 mt-3'}>
        <hr className={'mt-3'}/>
        <h3 className = {'m-auto text-center courierNew'}>{title}</h3>
            <Row className={'wareListNew'} id = {'wareListNew'} >
                 {wares.map(ware =>
                    <WareItem key={ware.id} ware={ware}/>
                )}
            </Row>
            <Row className = {'text-align-center courierNew mt-5'}>
                <Button className={'buttonCollections'} onClick= {()=>{history.push(ShopTypes_Route + '/' + wares[1].typeId + '/#')}}><h6>СМОТРЕТЬ КОЛЛЕКЦИЮ</h6></Button>
            </Row>
        </Container>
    );
});

export default WareListNew;


