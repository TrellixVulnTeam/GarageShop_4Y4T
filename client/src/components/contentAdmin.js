import React, {useContext, useEffect, useState} from 'react';
import {Context} from "../index";
import {useHistory} from 'react-router-dom';
import {Col, Row, Button} from "react-bootstrap";
import {fetchBrands, fetchWares, fetchTypes, fetchBasketWare, fetchByingInfo} from "../http/WareAPI";
import {observer} from "mobx-react-lite";
import CreateWare from "./modals/CreateWare";
import CreateBrand from "./modals/CreateBrand";
import CreateType from "./modals/CreateType";
import CreatePromo from "./modals/CreatePromo";
import DataRowsClient from "./dataRowsClient";


const ContentAdmin = observer((props) => {
    let state = props.state;
    const [brandVisible, setBrandVisible] = useState(false);
    const [typeVisible, setTypeVisible] = useState(false);
    const [wareVisible, setWareVisible] = useState(false);
    const [promoVisible, setPromoVisible] = useState(false);
    const [datas, setDatas] = useState();
    useEffect(()=>{
        fetchByingInfo().then((data) => {console.log(data.data); setDatas(data) })
    }, []);
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
                <Col className = {'text-center'} md={12}>
                    <Button variant={'outline-dark'} className={'mt-2'} onClick={()=>{ setPromoVisible(true)}}>Добавить промокод</Button>
                </Col>
            </Row>
            <CreateWare show={wareVisible} onHide={()=>{ setWareVisible(false)}}/>
            <CreateBrand show={brandVisible} onHide={()=>{ setBrandVisible(false)}}/>
            <CreateType show={typeVisible} onHide={()=>{ setTypeVisible(false)}}/>
            <CreatePromo show={promoVisible} onHide={()=>{ setPromoVisible(false)}}/>
            </>
          );
          break;
      case 'noHome':
          return (
            <Row>
                <Col> 
                    <h1 className = {'courierNew text-center m-auto p-0 w-auto'}>ПОКУПКИ</h1>
                </Col>
                <Row className={'mt-5 ms-auto rowsDataClient position-absolute overflow-hidden right-0 '}>
                <Row className={'dataRowsClient  border border-success mt-3'}>
                    <Col md={1} className = {'text-center border border-success'}>
                        <h2>ID</h2>
                    </Col>
                    <Col md={2} className = {'text-center border border-success'}>
                        <h2>Статус</h2>
                    </Col>
                    <Col className = {'text-center border border-success'}>
                       <h2>ID товаров</h2>
                    </Col>
                    <Col className = {'text-center border border-success'}>
                        
                        <h2>данные пользователя</h2>
                    </Col>
                    <Col className = {'text-center border border-success'}>
                        <h2>Адрес</h2>
                    </Col>
                </Row>
                {datas.data.map(item=>
                     <DataRowsClient key={item.id} client = {item} />
                )}
                   
                </Row>
            </Row>
          );
          break;
      default:

    }

});

export default ContentAdmin;
