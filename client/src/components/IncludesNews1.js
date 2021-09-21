import React, {useState, useEffect, useContext} from 'react';
import {Container, Row, Col} from "react-bootstrap";

import WareListNew from './WareListNew.js';
import {Context} from "../index";
import {observer} from "mobx-react-lite";

import {fetchBrands, fetchWares, fetchTypes} from "../http/WareAPI";



const New = observer((props) => {


    return (
       <Container fluid={true} className = {'p-0 mt-1'}>
            <Row className={'IncludesNewsRow'}>
                <Col md={6} className = {'p-0 h-100 d-flex justify-content-center flex-column'}>
                    <h3 className={'courierNew text-center'}>{props.title}</h3>
                    <p className={'courierNew text-center'}>{props.content}</p>
                </Col>
                <Col md={6} className = {'p-0'}>
                    <img className = {'w-100'} src={props.img}/>
                </Col>
                
            </Row>
       </Container>
    );
});


export default New;
