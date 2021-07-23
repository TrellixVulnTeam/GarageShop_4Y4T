import React, {useContext, useState} from 'react';
import {Button, Col, Dropdown, Form, Modal, Row} from "react-bootstrap";
import {Context} from "../../index";
import {observer} from "mobx-react-lite";
import {createWare} from '../../http/WareAPI.js';

const CreateWare = observer(({show, onHide}) => {
    const {ware} = useContext(Context);
    const [info, setInfo]= useState([]);
    const [name, setName] = useState();
    const [price, setPrice] = useState();
    const [file, setFile] = useState(null)
    const addInfo = ()=>{
        setInfo([...info, {title: '', description:'',number: Date.now()}])
    };
    const removeInfo = (number)=>{
        setInfo(info.filter(i => i.number !== number))
    }
    const selectFile = e => {
        setFile(e.target.files[0])
    }
    const addWare = () => {
        let formData = new FormData()
        formData.append('name', name);
        formData.append('price', `${price}`);
        formData.append('img', file);
        formData.append('brandId', ware.selectedBrand.id);
        formData.append('typeId', ware.selectedType.id);
        console.log(formData);
        createWare(formData).then(data => onHide());

    }
    return (
        <Modal
            show={show}
            onHide={onHide}
            size="xl"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header >
                <Modal.Title id="contained-modal-title-vcenter">
                   Добавить новый товар
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form className={'text-center'}>
                    <Dropdown className={'mt-2'}>
                        <Dropdown.Toggle>{ware.selectedType.name || "Выберите тип"}</Dropdown.Toggle>
                            <Dropdown.Menu>
                                {ware.types.map(type =>
                                    <Dropdown.Item key={type.id} onClick={() => ware.setSelectedType(type)}>{type.name}</Dropdown.Item>

                                )}
                            </Dropdown.Menu>
                        </Dropdown>
                        <Dropdown className={'mt-2'}>
                            <Dropdown.Toggle>{ware.selectedBrand.name || "Выберите бренд"}</Dropdown.Toggle>
                            <Dropdown.Menu>
                                {ware.brands.map(brand =>
                                    <Dropdown.Item key={brand.id} onClick={() => ware.setSelectedBrand(brand)}>{brand.name}</Dropdown.Item>
                                )}
                            </Dropdown.Menu>
                    </Dropdown>
                    <Form.Control className={'mt-2'} placeholder={'Введите название шмотки'} type={'text'} value={name} onChange = {(event)=>{setName(event.target.value)}} />

                    <Form.Control className={'mt-2'} placeholder={'Введите стоимость шмотки'} type={'number'} value={price} onChange = {(event)=>{setPrice(event.target.value)}} />

                    <Form.Control className={'mt-2 '} title={'Добавьте изображение'} onChange={selectFile} type={'file'}>

                    </Form.Control>
                    <hr/>
                    <Button variant={"outline-danger"} onClick={addInfo}>Добавить новое свойство</Button>
                    {info.map(i =>
                        <Row className={'mt-3'} key={i.number}>
                            <Col md={4}>
                                <Form.Control placeholder={'Введите название для характеристики'}/>
                            </Col>
                            <Col md={4}>
                                <Form.Control placeholder={'Введите описание для характеристики'}/>
                            </Col>
                            <Col md={4}>
                                <Button onClick={()=>removeInfo(i.number)} variant={'outline-danger'}>Удалить</Button>
                            </Col>
                        </Row>
                    )}
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant={'outline-success'} onClick={onHide}>Закрыть</Button>
                <Button variant={'outline-danger'} onClick={addWare}>Добавить</Button>
            </Modal.Footer>
        </Modal>
    );
});

export default CreateWare;
