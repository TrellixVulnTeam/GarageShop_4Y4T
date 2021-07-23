import React, {useState} from 'react';
import {Button, Form, Modal} from "react-bootstrap";
import {createType} from "../../http/WareAPI";
import {observer} from "mobx-react-lite";

const CreateType = observer(({show, onHide}) => {
    const [value, setValue] = useState('');
    const addType = ()=>{
        createType({name: value}).then(()=>{
            setValue('');
            onHide();
        })
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
                    Добавить новый тип
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Control placeholder={'Введите название типа'} value={value} onChange={(event)=>{setValue(event.target.value)}} />
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant={'outline-success'} onClick={onHide}>Закрыть</Button>
                <Button variant={'outline-danger'} onClick={addType}>Добавить</Button>
            </Modal.Footer>
        </Modal>
    );
});

export default CreateType;
