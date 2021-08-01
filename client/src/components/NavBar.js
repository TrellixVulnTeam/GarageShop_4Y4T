import React, {useContext, useEffect} from 'react';
import {Context} from "../index";
import {Button, Container, Nav, Navbar, NavDropdown} from "react-bootstrap";
import {Account_Route, Admin_Route, Login_Route, Shop_Route, Basket_Route} from "../utils/constants";
import {NavLink, useHistory} from "react-router-dom";
import Auth from "../pages/Auth";
import {BsPerson} from 'react-icons/bs';
import {FiLogOut} from 'react-icons/fi';
import {RiShoppingCart2Line} from 'react-icons/ri';
import logo from './images/Garage.png';
import {observer} from "mobx-react-lite";
import WareItem from "./WareItem";



const NavBar = observer( () => {
    const {user, ware} = useContext(Context);

    const history = useHistory();
    const logOut = ()=>{
        user.setIsAuth(false);
        localStorage.removeItem('token');
        user.setUser({})
    };
    console.log(user._user.role);
    return (
        <>
            <Navbar collapseOnSelect expand="lg" className={'mb-2'} bg="light" variant="light">
                <Container>
                    <Navbar.Brand href={Shop_Route} className={'mr-5 '}><img className={'logo'} src={logo}></img></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto navNav" >
                            <NavLink className={'nav-link'} to={Shop_Route}>Главная</NavLink>
                            <NavDropdown title="Каталог" id="dropdown-basic">
                                    {ware.types.map(type =>
                                        <NavDropdown.Item key={type.id} onClick={() => {ware.setSelectedType(type);console.log(ware.selectedType)}}>{type.name}</NavDropdown.Item>
                                    )}
                            </NavDropdown>
                            <NavDropdown  title="Покупателям" >
                                    {ware.brands.map(brand =>
                                        <NavDropdown.Item key={brand.id} onClick={() => {ware.setSelectedBrand(brand);console.log(ware.selectedBrand)}}>{brand.name}</NavDropdown.Item>
                                    )}
                            </NavDropdown>


                        </Nav>
                        {user.isAuth ?
                            <Nav>
                                <Button className={"m-1 p-1 border-0"} variant={'outline-secondary'} onClick={()=>{history.push(Basket_Route);}}><h3 className={'m-0'}><RiShoppingCart2Line /></h3></Button>
                                <Button className={"m-1 p-1 border-0"} variant={'outline-secondary'} onClick={()=>{if(user._user.role == 'ADMIN'){history.push(Admin_Route);return};history.push(Account_Route)}}><h3 className={'m-0'}><BsPerson /></h3></Button>
                                <Button className={"m-1 p-1 border-0"} variant={'outline-secondary'} onClick={()=>{
                                    logOut();
                                    history.push(Shop_Route);
                                }}><h3 className={'m-0'}><FiLogOut /></h3></Button>

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
