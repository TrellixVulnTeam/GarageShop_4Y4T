import React from 'react';
import {Button, Card, Col, Container, Form, Row} from "react-bootstrap";
import {useLocation, NavLink} from 'react-router-dom';
import {Login_Route, Registration_Route} from "../utils/constants";

const Auth = () => {
    const location = useLocation();
    console.log(location)
    let isLogin = location.pathname === Login_Route;
    return (
        <Container className={'d-flex justify-content-center align-items-center'} style={{height: window.innerHeight - 54}}>
            {isLogin ?
            <Card style={{minWidth: 600, maxWidth: '100%', minHeight: 300, textAlign: 'center'}} className={'p-5'}>
                <h1>Авторизация</h1>

                <Form className={'d-flex flex-column p-2'}>
                    <Form.Control className={'mt-5'} placeholder={'Введите логин или e-mail'}>

                    </Form.Control>
                    <Form.Control className={'mt-5'} placeholder={'Введите пароль'}>

                    </Form.Control>

                        <Row className={'d-flex justify-content-between pl-5 pr-5 mt-3 flex-row'}>
                            <div>
                                Нет аккаунта? <NavLink to={Registration_Route}>Зарегистрируйся!</NavLink>
                            </div>
                            <Button variant={'outline-success'} className={'mt-3'}> Войти</Button>
                        </Row>
                </Form>
            </Card>
            :
            <Card style={{minWidth: 600, maxWidth: '100%', minHeight: 300, textAlign: 'center'}} className={'p-5'}>
                <h1>Регистрация</h1>

                <Form className={'d-flex flex-column p-2'}>
                    <Form.Control className={'mt-3'} placeholder={'Придумайте логин'}>

                    </Form.Control>
                    <Form.Control className={'mt-3'} placeholder={'Введите свой e-mail'}>

                    </Form.Control>
                    <Form.Control className={'mt-3'} placeholder={'Введите пароль'}>

                    </Form.Control>

                    <Row className={'d-flex justify-content-between pl-5 pr-5 mt-3 flex-row'}>
                        <div>
                            Есть аккаунт? <NavLink to={Login_Route}>Авторизуйся!</NavLink>
                        </div>
                        <Button variant={'outline-success'} className={'mt-3'}> Зарегистрироваться</Button>
                    </Row>
                </Form>
            </Card>
            }
        </Container>
    );
}

export default Auth;