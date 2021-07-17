import React, {useContext} from 'react';
import {Context} from "../index";
import {Button, Container, Nav, Navbar, NavDropdown} from "react-bootstrap";
import {Account_Route, Admin_Route, Login_Route, Shop_Route} from "../utils/constants";
import {NavLink, useHistory} from "react-router-dom";
import Auth from "../pages/Auth";
import {BsPerson} from 'react-icons/bs';
import {RiShoppingCart2Line} from 'react-icons/ri';

import {observer} from "mobx-react-lite";



const NavBar = observer( () => {
    const {user} = useContext(Context);
    const history = useHistory();
    return (
        <>
            <Navbar collapseOnSelect expand="lg" className={'mb-2'} bg="light" variant="light">
                <Container>
                    <Navbar.Brand href={Shop_Route} className={'mr-5 '}>Garage Of The Day</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto navNav" >
                            <NavLink className={'nav-link'} to={Shop_Route}>Главная</NavLink>
                            <NavDropdown title="Каталог" id="collasible-nav-dropdown">
                                <NavDropdown title="Штаны" id="collasible-nav-dropdown">
                                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                                </NavDropdown>
                                <NavDropdown title="Футболки" id="collasible-nav-dropdown">
                                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                                </NavDropdown>
                                <NavDropdown title="Шорты" id="collasible-nav-dropdown">
                                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                                </NavDropdown>
                            </NavDropdown>
                            <NavDropdown  title="Покупателям" id="collasible-nav-dropdown">
                                <NavDropdown title="О нас" id="collasible-nav-dropdown">
                                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                                </NavDropdown>
                                <NavDropdown title="Заказ" id="collasible-nav-dropdown">
                                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                                </NavDropdown>
                                <NavDropdown title="Связь" id="collasible-nav-dropdown">
                                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                                </NavDropdown>
                            </NavDropdown>


                        </Nav>
                        {user.isAuth ?
                            <Nav>
                                <Button className={"m-1 p-1 border-0"} variant={'outline-secondary'} onClick={()=>{history.push(Admin_Route)}}><h3 className={'m-0'}><RiShoppingCart2Line /></h3></Button>
                                <Button className={"m-1 p-1 border-0"} variant={'outline-secondary'} onClick={()=>{history.push(Account_Route)}}><h3 className={'m-0'}><BsPerson /></h3></Button>
                            </Nav>
                            :

                            <Nav>
                        {/*<Button className={"ml-lg-5"} variant={'outline-secondary'} to={Auth}>Корзина</Button>*/}
                            <Button className={"m-1 p-1 border-0"} variant={'outline-secondary'} href={'/login'} ><h3 className={'m-0'}><BsPerson /></h3></Button>
                            </Nav>
                        }

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
});

export default NavBar;