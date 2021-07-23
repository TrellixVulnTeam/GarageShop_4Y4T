import React, {useState} from 'react';
import {Button, Form, Modal} from "react-bootstrap";
import {createBrand} from "../../http/WareAPI";
import {observer} from "mobx-react-lite";



const CreateBrand = observer(({show, onHide}) => {

      const [value, setValue] = useState('');
      const addBrand = ()=>{
          createBrand({name: value}).then(()=>{
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
            <Modal.Header>
                <Modal.Title id="contained-modal-title-vcenter">
                    Добавить новый бренд
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Control placeholder={'Введите название бренда'} onChange={(event)=>{setValue(event.target.value)}}/>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant={'outline-success'} onClick={onHide}>Закрыть</Button>
                <Button variant={'outline-danger'} onClick={addBrand}>Добавить</Button>
            </Modal.Footer>
        </Modal>
    );
});

export default CreateBrand;
