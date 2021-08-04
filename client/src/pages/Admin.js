import React, {useState} from 'react';
import {Button, Col, Container,} from "react-bootstrap";

import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import ContentAdmin from '../components/contentAdmin.js'
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import {RiAddCircleFill} from 'react-icons/ri';
import {BsCardList} from 'react-icons/bs';
import {observer} from "mobx-react-lite";

const Admin = observer(() => {
  
    const [button, setButton] = useState('home');
    return (
        <Container style={{position:'relative',height:'100vh', background:'#efefef',zIndex:9}}fluid={true}>
            <SideNav
            onSelect={(selected) => {

            }}
            >
                <SideNav.Toggle />
                <SideNav.Nav defaultSelected="home">
                    <NavItem eventKey="home">
                        <NavIcon onClick = {()=>{setButton('home')}}>
                            <h3 className = {'adminIconsH1'}>
                                <RiAddCircleFill />
                            </h3>
                        </NavIcon>
                        <NavText>
                            Создать
                        </NavText>
                    </NavItem >
                    <NavItem onClick = {()=>{setButton('noHome')}} eventKey="charts">
                        <NavIcon>
                        <h3 className = {'adminIconsH1'}>
                            <BsCardList />
                        </h3>
                        </NavIcon>
                        <NavText>
                            Charts
                        </NavText>
                        <NavItem eventKey="charts/linechart">
                            <NavText>
                                Line Chart
                            </NavText>
                        </NavItem>
                        <NavItem eventKey="charts/barchart">
                            <NavText>
                                Bar Chart
                            </NavText>
                        </NavItem>
                    </NavItem>
                </SideNav.Nav>
            </SideNav>
            <ContentAdmin state = {button}/>



        </Container>
    );
});

export default Admin;
