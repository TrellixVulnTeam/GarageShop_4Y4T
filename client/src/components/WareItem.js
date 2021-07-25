import React from 'react';
import {useHistory} from 'react-router-dom';
import {Col} from "react-bootstrap";
import {Ware_Route} from "../utils/constants";
const WareItem = ({ware}) => {
    const history = useHistory();
    console.log(ware.typeId);
    return (
        <Col md={3} className={"border border-success wareItem pt-3 "} onClick={()=>{history.push(Ware_Route + '/' + ware.id)}}>
            <div>
                <img src={process.env.REACT_APP_API_URL + ware.img}/>
            </div>
            <div className={'navNav'}>
                {ware.name}
            </div>
            <div className={'navNav'}>
                {ware.price}
                <div>
                {ware.id}
                </div>
            </div>
        </Col>
    );
};

export default WareItem;
