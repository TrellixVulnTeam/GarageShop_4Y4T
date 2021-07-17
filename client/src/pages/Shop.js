import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import WareList from "../components/WareList";
import New from "../components/New";

const Shop = () => {
    return (
        <>
            <New/>
            <Container fluid={true}>

                <Row>
                        <WareList/>
                </Row>
            </Container>
        </>
    );
};

export default Shop;