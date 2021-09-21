import React, {useContext} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import WareItem from "./WareItem";

const WareList = observer(() => {
    const {ware} = useContext(Context)
    return (
        <Container fluid >
        
        <hr className={'mt-3'}/>
            <Row className={'wareList'}>

                {ware.wares.map(ware =>
                    <WareItem key={ware.id} ware={ware}/>
                )}
            </Row>
        </Container>
    );
});

export default WareList;
