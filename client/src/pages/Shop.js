import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import WareList from "../components/WareList";

const Shop = () => {
    return (
        <Container fluid={true}>
            <Row>
                <Col md={12}>
                    <WareList/>
                </Col>
            </Row>
        </Container>
    );
};

export default Shop;