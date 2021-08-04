import React, {useContext, useEffect, useState} from 'react';
import {Context} from "../index";
import {useHistory} from 'react-router-dom';
import {Col, Row, Button} from "react-bootstrap";
import {fetchBrands, fetchWares, fetchTypes, fetchBasketWare} from "../http/WareAPI";
import {observer} from "mobx-react-lite";
import CreateWare from "./modals/CreateWare";
import CreateBrand from "./modals/CreateBrand";
import CreateType from "./modals/CreateType";



const ContentAdmin = observer((props) => {
  let state = props.state;
  const [brandVisible, setBrandVisible] = useState(false);
  const [typeVisible, setTypeVisible] = useState(false);
  const [wareVisible, setWareVisible] = useState(false);

    switch (state) {
      case 'home':
          return (
            <>
            <Row >
                <Col className = {'text-center'} md={12}>
                    <Button variant={'outline-dark'} className={'mt-2'} onClick={()=>{ setTypeVisible(true)}}>Добавить тип</Button>
                </Col>
                <Col className = {'text-center'} md={12}>
                    <Button variant={'outline-dark'} className={'mt-2'} onClick={()=>{ setBrandVisible(true)}}>Добавить бренд</Button>
                </Col>
                <Col className = {'text-center'} md={12}>
                    <Button variant={'outline-dark'} className={'mt-2'} onClick={()=>{ setWareVisible(true)}}>Добавить товар</Button>
                </Col>
            </Row>
            <CreateWare show={wareVisible} onHide={()=>{ setWareVisible(false)}}/>
            <CreateBrand show={brandVisible} onHide={()=>{ setBrandVisible(false)}}/>
            <CreateType show={typeVisible} onHide={()=>{ setTypeVisible(false)}}/>
            </>
          );
          break;
      case 'noHome':
          return (
            <Row>
            </Row>
          );
          break;
      default:

    }

});

export default ContentAdmin;
