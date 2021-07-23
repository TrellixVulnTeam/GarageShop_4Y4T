import React, {useContext} from 'react';
import {Container} from "react-bootstrap";
import {Context} from "../index";
import jwt_decode from "jwt-decode";
import {observer} from "mobx-react-lite";



const Account = observer(() => {
    let token = localStorage.getItem('token');
    console.log(token);
    let userName = jwt_decode(token);
    console.log(userName)
    const {user} = useContext(Context);

    console.log(user.user.login);
    return (
        <Container fluid={true}>
            <div className={'account login'}>
                {user.user.login}
            </div>
            <hr/>
            <div className={'account emailacc'}>
                {user.user.email}
            </div>

        </Container>
    );
});

export default Account;
