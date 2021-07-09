import React from 'react';
import {Button, Card, Container, Form, Row} from "react-bootstrap";
import {NavLink} from "react-router-dom";
import {Registration_Route} from "../utils/constants";

const FormAuth = () => {
    return (
            <Card style={{minWidth: 600, maxWidth: '100%', minHeight: 300, textAlign: 'center'}} className={'p-5'}>
                <h1>Авторизация</h1>

                <Form className={'d-flex flex-column p-2'}>
                    <Form.Control className={'mt-5'} placeholder={'Введите логин или e-mail'} type={'email'} />
                    <Form.Control className={'mt-5'} placeholder={'Введите пароль'} type={'password'} />

                    <Row className={'d-flex justify-content-between pl-5 pr-5 mt-3 flex-row'}>
                        <div>
                            Нет аккаунта? <NavLink to={Registration_Route}>Зарегистрируйся!</NavLink>
                        </div>
                        <Button variant={'outline-success'} className={'mt-3'}> Войти</Button>
                    </Row>
                </Form>
            </Card>
    );
}

export default FormAuth;