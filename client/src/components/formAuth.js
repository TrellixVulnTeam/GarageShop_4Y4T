import React, {useContext, useState} from 'react';
import {Button, Card, Container, Form, Row} from "react-bootstrap";
import {NavLink, useHistory, useLocation} from "react-router-dom";
import {Registration_Route, Shop_Route} from "../utils/constants";
import {login} from "../http/userAPI";
import {observer} from "mobx-react-lite";
import {Context} from "../index";

const FormAuth = observer( () => {
    const {user} = useContext(Context);
    const location = useLocation();
    const history = useHistory();

    const [loginOrEmail, setLoginOrEmail] = useState();
    const [password, setPassword] = useState();
    const [include, setInclude] = useState();


    const signIn = async ()=>{
        let data;

        data = await login(loginOrEmail,password);
        console.log(data);
        switch (data){
            case 400.1:
                setInclude(<div style={{color: '#ff5d00'}}>Введите логин или email</div>);
                break;
            case 400.2:
                setInclude(<div style={{color: '#ff5d00'}}>Введите пароль</div>);
                break;
            case 400.3:
                setInclude(<div style={{color: '#ff5d00'}}>Такой пароль не подходит</div>);
                break;
            case 409:
                setInclude(<div style={{color: '#ff5d00'}}><p>Такой аккаунт не найден</p><p>Зарегистрируйтесь!</p></div>);
                break;
        };
        user.setUser(user);
        console.log(user)
        user.setIsAuth(true);
        history.push(Shop_Route);
    }



    return (
            <Card style={{minWidth: 600, maxWidth: '100%', minHeight: 300, textAlign: 'center'}} className={'p-5'}>
                <h1>Авторизация</h1>

                <Form className={'d-flex flex-column p-2'}>
                    <Form.Control className={'mt-5'} name={'loginOrEmail'} value={loginOrEmail} onChange={(event)=> {setLoginOrEmail(event.target.value);setInclude(null)}} placeholder={'Введите логин или e-mail'} type={'email'} />
                    <Form.Control className={'mt-5'} name={'password'} value={password} onChange={(event)=> {setPassword(event.target.value);setInclude(null)}} placeholder={'Введите пароль'} type={'password'} />
                    <div className={'mt-2'}>{include}</div>
                    <Row className={'d-flex justify-content-between pl-5 pr-5 m-auto mt-3 flex-row'}>
                        <div>
                            Нет аккаунта? <NavLink to={Registration_Route}>Зарегистрируйся!</NavLink>
                        </div>
                        <Button onClick={signIn} variant={'outline-success'} className={'mt-3'}> Войти</Button>
                    </Row>
                </Form>
            </Card>
    );
});

export default FormAuth;