import React from 'react';
import {Button, Card, Col, Container, Form, Row} from "react-bootstrap";
import {useLocation, NavLink} from 'react-router-dom';
import {Login_Route, Registration_Route} from "../utils/constants";
import FormReg from "../components/formReg";
import FormAuth from "../components/formAuth";
import {observer} from "mobx-react-lite";


const Auth = observer(() => {
    const location = useLocation();

    let isLogin = location.pathname === Login_Route;


    return (
        <Container className={'d-flex justify-content-center align-items-center'} style={{height: window.innerHeight - 54}}>
            {isLogin ?
                <FormAuth />
            :
                <FormReg />
            }

        </Container>
    );
});

export default Auth;



// import React, {useContext, useState} from 'react';
// import {Button, Card, Col, Container, Form, Row} from "react-bootstrap";
// import {useLocation, NavLink} from 'react-router-dom';
// import {Login_Route, Registration_Route} from "../utils/constants";
// import FormReg from "../components/formReg";
// import FormAuth from "../components/formAuth";
// import {observer} from "mobx-react-lite";
// import {login, registration} from "../http/userAPI";
// import {Context} from "../index";
//
//
// const Auth = observer(() => {
//     let {user} = useContext(Context);
//     const location = useLocation();
//
//     let isLogin = location.pathname === Login_Route;
//
// //Все для окна регистрации
//     const [login, setLogin] = useState();
//     const [email, setEmail] = useState();
//     const [password2, setPassword2] = useState();
//     const [passwordDuplicate, setPasswordDuplicate] = useState();
//     const [include2, setInclude2] = useState();
//
//     const signUp = async ()=>{
//         if (password !== passwordDuplicate){
//             setInclude2(<div style={{color: 'red'}}>Пароли не совпадают</div>)
//             return
//         }
//         const response = await registration(login,email,password2);
//         console.log(response);
//         switch (response.data){
//             case 400:
//                 setInclude(<div style={{color: '#ff5d00'}}>Заполните все поля</div>);
//                 break;
//             case 409.1:
//                 setInclude(<div style={{color: '#ff5d00'}}><p>Аккаунт с таким логином уже существует</p><p>Придумайте новый!</p></div>);
//                 break;
//             case 409.2:
//                 setInclude(<div style={{color: '#ff5d00'}}><p>Аккаунт с таким email уже существует</p></div>);
//                 break;
//         };
//
//     };
// //Все для окна регистрации
//     //////////////////////////
// //Все для окна авторизации
//     const signIn = async ()=>{
//         const response = await login(loginOrEmail,password);
//         console.log(response);
//         switch (response.data){
//             case 400.1:
//                 setInclude(<div style={{color: '#ff5d00'}}>Введите логин или email</div>);
//                 break;
//             case 400.2:
//                 setInclude(<div style={{color: '#ff5d00'}}>Введите пароль</div>);
//                 break;
//             case 409:
//                 setInclude(<div style={{color: '#ff5d00'}}><p>Такой аккаунт не найден</p><p>Зарегистрируйтесь!</p></div>);
//                 break;
//         }
//     }
//
//     const [loginOrEmail, setLoginOrEmail] = useState();
//     const [password, setPassword] = useState();
//     const [include, setInclude] = useState();
//
//
//
// //Все для окна авторизации
//     return (
//         <Container className={'d-flex justify-content-center align-items-center'} style={{height: window.innerHeight - 54}}>
//             {isLogin ?
//                 <Card style={{minWidth: 600, maxWidth: '100%', minHeight: 300, textAlign: 'center'}} className={'p-5'}>
//                     <h1>Авторизация</h1>
//
//                     <Form className={'d-flex flex-column p-2'}>
//                         <Form.Control className={'mt-5'} name={'loginOrEmail'} value={loginOrEmail} onChange={(event)=> {setLoginOrEmail(event.target.value);setInclude(null)}} placeholder={'Введите логин или e-mail'} type={'email'} />
//                         <Form.Control className={'mt-5'} name={'password'} value={password} onChange={(event)=> {setPassword(event.target.value);setInclude(null)}} placeholder={'Введите пароль'} type={'password'} />
//                         <div className={'mt-2'}>{include}</div>
//                         <Row className={'d-flex justify-content-between pl-5 pr-5 mt-3 flex-row'}>
//                             <div>
//                                 Нет аккаунта? <NavLink to={Registration_Route}>Зарегистрируйся!</NavLink>
//                             </div>
//                             <Button onClick={signIn} variant={'outline-success'} className={'mt-3'}> Войти</Button>
//                         </Row>
//                     </Form>
//                 </Card>
//                 :
//                 <Card style={{minWidth: 600, maxWidth: '100%', minHeight: 300, textAlign: 'center'}} className={'p-5'}>
//                     <h1>Регистрация</h1>
//
//                     <Form className={'d-flex flex-column p-2'}>
//                         <Form.Control className={'mt-3'} name={'login'} value={login} onChange={(event)=>{setLogin(event.target.value);setInclude(null)}} placeholder={'Придумайте логин'} />
//                         <Form.Control className={'mt-3'} name={'email'} value={email} onChange={(event)=>{setEmail(event.target.value);setInclude(null)}} placeholder={'Введите email'} type={'email'} />
//                         <Form.Control className={'mt-3'} name={'password'} value={password2} onChange={(event)=>{setPassword2(event.target.value); setInclude2(null)}} placeholder={'Придумайте пароль'} type={'password'} />
//                         <Form.Control className={'mt-3'} name={'passwordDuplicate'} value={passwordDuplicate} onChange={(event)=>{setPasswordDuplicate(event.target.value); setInclude2(null)}} placeholder={'Повторите пароль'} type={'password'} />
//
//                         <div>{include2}</div>
//
//                         <Row className={'d-flex justify-content-between pl-5 pr-5 mt-3 flex-row'}>
//                             <div>
//                                 Есть аккаунт? <NavLink to={Login_Route}>Авторизуйся!</NavLink>
//                             </div>
//                             <Button onClick={signUp} variant={'outline-success'} className={'mt-3'}> Зарегистрироваться</Button>
//                         </Row>
//                     </Form>
//                 </Card>
//             }
//
//         </Container>
//     );
// });
//
// export default Auth;