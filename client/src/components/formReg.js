import React, {useState, } from 'react';
import {Button, Card, Form, Row} from "react-bootstrap";
import {NavLink} from "react-router-dom";
import {Login_Route} from "../utils/constants";

const FormReg = (props) => {
    let login;
    let email;
    let password;

    const change = (event)=>{

        switch (event.target.name){
            case 'login':
                login = event.target.value;
                console.log(login);
                break;
            case 'email':
                email = event.target.value;
                console.log(email);
                break;
            case 'password':
                password = event.target.value;
                console.log(password);
                break;
        };



    };

    return (
        <Card style={{minWidth: 600, maxWidth: '100%', minHeight: 300, textAlign: 'center'}} className={'p-5'}>
            <h1>Регистрация</h1>

            <Form className={'d-flex flex-column p-2'}>
                <Form.Control className={'mt-3'} name={'login'} value={login} onChange={change} placeholder={'Придумайте логин'}>

                </Form.Control>
                <Form.Control className={'mt-3'} name={'email'} value={email} onChange={change} placeholder={'Введите email'}>

                </Form.Control>
                <Form.Control className={'mt-3'} name={'password'} value={password} onChange={change} placeholder={'Придумайте пароль'} type={'password'}>

                </Form.Control>

                <Row className={'d-flex justify-content-between pl-5 pr-5 mt-3 flex-row'}>
                    <div>
                        Есть аккаунт? <NavLink to={Login_Route}>Авторизуйся!</NavLink>
                    </div>
                    <Button onClick={props.onClick} variant={'outline-success'} className={'mt-3'}> Зарегистрироваться</Button>
                </Row>
            </Form>
        </Card>
    );
};

export default FormReg;