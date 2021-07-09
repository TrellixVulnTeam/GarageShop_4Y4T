import React, {useContext} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import WareItem from "./WareItem";

const WareList = observer(() => {
    const {ware} = useContext(Context)
    return (
        <Container fluid >
            <Row className={'d-flex align-items-center justify-content-center'} style={{width:'100%'}}>
                {ware.wares.map(ware =>
                    <WareItem key={ware.id} id={ware.id} name={ware.name} price={ware.price} ware={ware}/>
                )}
            </Row>
        </Container>
    );
});

export default WareList;