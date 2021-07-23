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


//
// import React, {useContext, useState} from 'react';
// import {Container, Form} from "react-bootstrap";
// import Card from "react-bootstrap/Card";
// import Button from "react-bootstrap/Button";
// import Row from "react-bootstrap/Row";
// import {NavLink, useLocation, useHistory} from "react-router-dom";
// import {Login_Route, Registration_Route, Shop_Route} from "../utils/constants";
// import {login, registration} from "../http/userAPI";
// import {observer} from "mobx-react-lite";
// import {Context} from "../index";
//
// const Auth = observer(() => {
//     const {user} = useContext(Context)
//     const location = useLocation()
//     const history = useHistory()
//     const isLogin = location.pathname === Login_Route
//     const [email, setEmail] = useState('')
//     const [password, setPassword] = useState('')
//
//     const click = async () => {
//         try {
//             let data;
//             if (isLogin) {
//                 data = await login(email, password);
//             } else {
//                 data = await registration(email, password);
//             }
//             user.setUser(user)
//             user.setIsAuth(true)
//             history.push(Shop_Route)
//         } catch (e) {
//             alert(e.response.data.message)
//         }
//
//     }
//
//     return (
//         <Container
//             className="d-flex justify-content-center align-items-center"
//             style={{height: window.innerHeight - 54}}
//         >
//             <Card style={{width: 600}} className="p-5">
//                 <h2 className="m-auto">{isLogin ? 'Авторизация' : "Регистрация"}</h2>
//                 <Form className="d-flex flex-column">
//                     <Form.Control
//                         className="mt-3"
//                         placeholder="Введите ваш email..."
//                         value={email}
//                         onChange={e => setEmail(e.target.value)}
//                     />
//                     <Form.Control
//                         className="mt-3"
//                         placeholder="Введите ваш пароль..."
//                         value={password}
//                         onChange={e => setPassword(e.target.value)}
//                         type="password"
//                     />
//                     <Row className="d-flex justify-content-between mt-3 pl-3 pr-3">
//                         {isLogin ?
//                             <div>
//                                 Нет аккаунта? <NavLink to={Registration_Route}>Зарегистрируйся!</NavLink>
//                             </div>
//                             :
//                             <div>
//                                 Есть аккаунт? <NavLink to={Login_Route}>Войдите!</NavLink>
//                             </div>
//                         }
//                         <Button
//                             variant={"outline-success"}
//                             onClick={click}
//                         >
//                             {isLogin ? 'Войти' : 'Регистрация'}
//                         </Button>
//                     </Row>
//
//                 </Form>
//             </Card>
//         </Container>
//     );
// });
//
// export default Auth;
