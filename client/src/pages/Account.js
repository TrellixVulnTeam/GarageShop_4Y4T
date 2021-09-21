import React, {useContext} from 'react';
import {Container,Row} from "react-bootstrap";
import {Context} from "../index";
import jwt_decode from "jwt-decode";
import {observer} from "mobx-react-lite";



const Account = observer(() => {
    let token = localStorage.getItem('token');
    console.log(token);
    let userName = jwt_decode(token);
    console.log(userName);
    const {user} = useContext(Context);
    return (
        <Container fluid={true}>
            <Row>
                <h1 className={'text-center courierNew'}>Ваши данные</h1>
            </Row>
            <Row>
                <div className={'account login courierNew'}>
                    {userName.login}
                </div>
                <hr/>
                <div className={'account emailacc courierNew'}>
                    {userName.email}
                </div>
            </Row>

        </Container>
    );
});

export default Account;
