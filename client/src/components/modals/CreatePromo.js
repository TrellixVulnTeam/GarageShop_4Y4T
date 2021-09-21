import React, {useState} from 'react';
import {Button, Form, Modal} from "react-bootstrap";
import {createPromo} from "../../http/WareAPI";
import {observer} from "mobx-react-lite";
import {Shop_Route} from "../../utils/constants";
import {NavLink, useHistory} from "react-router-dom";


const CreatePromo = observer(({show, onHide}) => {
    const [value, setValue] = useState('');
    const [meaning, setMeaning] = useState('');
    const history = useHistory();
    const addPromo = ()=>{
      try {
        createPromo({name: value, value: meaning}).then(()=>{
            setValue('');
            onHide();
        })
      } catch (e) {
        history.push(Shop_Route);
        return
      }

    };
    return (
        <Modal
            show={show}
            onHide={onHide}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header >
                <Modal.Title id="contained-modal-title-vcenter">
                    Добавить новый промокод
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form className={'mb-5'}>
                    <Form.Control placeholder={'Введите новый промокод'} value={value} onChange={(event)=>{setValue(event.target.value)}} />
                </Form>
                <Form>
                    <Form.Control placeholder={'Введите значение промо'} value={meaning} onChange={(event)=>{setMeaning(event.target.value)}} />
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant={'outline-success'} onClick={onHide}>Закрыть</Button>
                <Button variant={'outline-danger'} onClick={addPromo}>Добавить</Button>
            </Modal.Footer>
        </Modal>
    );
});

export default CreatePromo;
