import React from 'react';
import {Button, Card, Col, Container, Form, Row} from "react-bootstrap";
import {useLocation, NavLink} from 'react-router-dom';
import {Login_Route, Registration_Route} from "../utils/constants";
import FormReg from "../components/formReg";
import FormAuth from "../components/formAuth";
import {registration} from "../http/userAPI";

const Auth = () => {
    const location = useLocation();

    let isLogin = location.pathname === Login_Route;

    const signIn = async ()=>{
        const response = await registration();
        console.log(response)
    }


    return (
        <Container className={'d-flex justify-content-center align-items-center'} style={{height: window.innerHeight - 54}}>
            {isLogin ?
                <FormAuth />
            :
                <FormReg onClick={signIn} />
            }

        </Container>
    );
}

export default Auth;