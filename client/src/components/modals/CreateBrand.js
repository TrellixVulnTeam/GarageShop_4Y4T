import React, {useState} from 'react';
import {Button, Form, Modal} from "react-bootstrap";
import {createBrand} from "../../http/WareAPI";
import {observer} from "mobx-react-lite";
import {Shop_Route} from "../../utils/constants";
import {NavLink, useHistory} from "react-router-dom";


const CreateBrand = observer(({show, onHide}) => {

      const [value, setValue] = useState('');
      const history = useHistory();
      const addBrand = ()=>{
          try {
            createBrand({name: value}).then(()=>{
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
