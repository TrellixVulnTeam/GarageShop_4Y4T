import React, {useContext, useEffect} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import WareList from "../components/WareList";
import New from "../components/New";
import {Context} from "../index";
import {fetchBrands, fetchWares, fetchTypes} from "../http/WareAPI";
import {observer} from "mobx-react-lite";

const Shop = observer(() => {
    const {ware} = useContext(Context);
    useEffect(()=>{
        fetchTypes().then((data) => {ware.setTypes(data);});
        fetchBrands().then((data) => {ware.setBrands(data);});
        console.log('setWares');
        fetchWares(null, null).then((data) => {console.log(data);ware.setWares(data.rows)})
    },[]);
    return (
        <>
            <New/>
            <Container fluid={true}>

                <Row className={'text-center'}>
                        
                        <WareList/>
                </Row>
            </Container>
        </>
    );
});

export default Shop;
