import React, {useState} from 'react';
import {Button, Col, Container} from "react-bootstrap";
import CreateWare from "../components/modals/CreateWare";
import CreateBrand from "../components/modals/CreateBrand";
import CreateType from "../components/modals/CreateType";

const Admin = () => {
    const [brandVisible, setBrandVisible] = useState(false)
    const [typeVisible, setTypeVisible] = useState(false)
    const [wareVisible, setWareVisible] = useState(false)
    return (
        <Container className={'d-flex flex-column text-center'} fluid={true}>
            <Col md={12}>
                <Button variant={'outline-dark'} className={'mt-2'} onClick={()=>{ setTypeVisible(true)}}>Добавить тип</Button>
            </Col>
            <Col md={12}>
                <Button variant={'outline-dark'} className={'mt-2'} onClick={()=>{ setBrandVisible(true)}}>Добавить бренд</Button>
            </Col>
            <Col md={12}>
                <Button variant={'outline-dark'} className={'mt-2'} onClick={()=>{ setWareVisible(true)}}>Добавить товар</Button>
            </Col>


            <CreateWare show={wareVisible} onHide={()=>{ setWareVisible(false)}}/>
            <CreateBrand show={brandVisible} onHide={()=>{ setBrandVisible(false)}}/>
            <CreateType show={typeVisible} onHide={()=>{ setTypeVisible(false)}}/>
        </Container>
    );
};

export default Admin;