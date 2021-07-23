import React, {useContext} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import WareItem from "./WareItem";

const WareList = observer(() => {
    const {ware} = useContext(Context)
    return (
        <Container fluid >
        <h1 className={'mt-3'}>Новинки!</h1>
        <hr className={'mt-3'}/>
            <Row className={'justify-content-center'}>

                {ware.wares.map(ware =>
                    <WareItem key={ware.id} ware={ware}/>
                )}
            </Row>
        </Container>
    );
});

export default WareList;
