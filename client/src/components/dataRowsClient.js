import React, {useContext, useEffect, useState} from 'react';
import {Context} from "../index";
import {Col, Row, Button} from "react-bootstrap";
import {observer} from "mobx-react-lite";




const DataRowsClient = observer((props) => {
        console.log(props.client)
          return (
            <>
                <Row className={'dataRowsClient  border border-success mt-3'}>
                    <Col md={1} className = {'text-center border border-success'}>
                        {props.client.id}
                    </Col>
                    <Col md={2} className = {'text-center border border-success'}>
                        {props.client.status}
                    </Col>
                    <Col className = {'text-center border border-success'}>
                        {props.client.productId}
                    </Col>
                    <Col className = {'text-center border border-success'}>
                        <p>{props.client.clientName}</p>
                        <p>{props.client.clientPastName}</p>
                        <p>{props.client.clientEmail}</p>
                        <p>{props.client.clientPhone}</p>
                    </Col>
                    <Col className = {'text-center border border-success'}>
                        {props.client.clientAddress}
                    </Col>
                </Row>

            </>
          );
});

export default DataRowsClient;
