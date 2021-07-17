import React from 'react';
import ll from './11.jpeg'
import {useHistory} from 'react-router-dom';
import {Col} from "react-bootstrap";
import {Ware_Route} from "../utils/constants";
const WareItem = (props) => {
    const history = useHistory();

    return (
        <Col md={3} className={"border border-success wareItem pt-3 "} onClick={()=>{history.push(Ware_Route + '/' + props.id)}}>
            <div>
                <img src={ll}/>
            </div>
            <div className={'navNav'}>
                {props.name}
            </div>
            <div className={'navNav'}>
                {props.price}
                <div>
                {props.id}
                </div>
            </div>
        </Col>
    );
};

export default WareItem;