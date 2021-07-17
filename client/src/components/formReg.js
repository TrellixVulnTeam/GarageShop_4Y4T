import React, {useContext, useState} from 'react';
import {Button, Card, Form, Row} from "react-bootstrap";
import {NavLink, useHistory, useLocation} from "react-router-dom";
import {Login_Route, Shop_Route} from "../utils/constants";
import {registration} from "../http/userAPI";
import {Context} from "../index";
import {observer} from "mobx-react-lite";

const FormReg = observer(() => {
    const {user} = useContext(Context);
    const location = useLocation();
    const history = useHistory();


    const [login, setLogin] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [passwordDuplicate, setPasswordDuplicate] = useState();
    const [include, setInclude] = useState();

    const signUp = async ()=>{

        let data;
        if (password !== passwordDuplicate){
            setInclude(<div style={{color: 'red'}}>Пароли не совпадают</div>)
            return
        }
            data = await registration(login,email,password);
        console.log(data);
        switch (data){
            case 400:
                setInclude(<div style={{color: '#ff5d00'}}>Заполните все поля</div>);
                break;
            case 409.1:
                setInclude(<div style={{color: '#ff5d00'}}><p>Аккаунт с таким логином уже существует</p><p>Придумайте новый!</p></div>);
                break;
            case 409.2:
                setInclude(<div style={{color: '#ff5d00'}}><p>Аккаунт с таким email уже существует</p></div>);
                break;
        };
        user.setUser(user);
        console.log(user)
        user.setIsAuth(true);
        history.push(Shop_Route);

    };

    return (
        <Card style={{minWidth: 600, maxWidth: '100%', minHeight: 300, textAlign: 'center'}} className={'p-5'}>
            <h1>Регистрация</h1>

            <Form className={'d-flex flex-column p-2'}>
                <Form.Control className={'mt-3'} name={'login'} value={login} onChange={(event)=>{setLogin(event.target.value);setInclude(null)}} placeholder={'Придумайте логин'} />
                <Form.Control className={'mt-3'} name={'email'} value={email} onChange={(event)=>{setEmail(event.target.value);setInclude(null)}} placeholder={'Введите email'} type={'email'} />
                <Form.Control className={'mt-3'} name={'password'} value={password} onChange={(event)=>{setPassword(event.target.value); setInclude(null)}} placeholder={'Придумайте пароль'} type={'password'} />
                <Form.Control className={'mt-3'} name={'passwordDuplicate'} value={passwordDuplicate} onChange={(event)=>{setPasswordDuplicate(event.target.value); setInclude(null)}} placeholder={'Повторите пароль'} type={'password'} />

                <div>{include}</div>

                <Row className={'d-flex justify-content-between pl-5 pr-5 m-auto mt-3 flex-row'}>
                    <div>
                        Есть аккаунт? <NavLink to={Login_Route}>Авторизуйся!</NavLink>
                    </div>
                    <Button onClick={signUp} variant={'outline-success'} className={'mt-3'}> Зарегистрироваться</Button>
                </Row>
            </Form>
        </Card>
    );
});

export default FormReg;