import React from 'react';
import {useHistory} from 'react-router-dom';
import {Col, Button} from "react-bootstrap";
import {Ware_Route} from "../utils/constants";
const WareItem = ({ware}) => {
    const history = useHistory();
    
    return (
        <Col md={3} className={"wareItem p-0 "} onClick={()=>{history.push(Ware_Route + '/' + ware.id)}}>
            <div>
                <img src={process.env.REACT_APP_API_URL + ware.img}/>
            </div>
            <div className={'navNav text-start'}>
                <p>{ware.name}</p>
            </div>
            <div className={'navNav '}>
                {ware.price}

            </div>

        </Col>
    );
};

export default WareItem;
