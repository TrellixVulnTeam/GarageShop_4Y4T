import React, {useContext, useState, useEffect} from 'react';
import {Button, Card, Container, Form, Row, Col} from "react-bootstrap";
import {NavLink, useHistory, useLocation} from "react-router-dom";
import {Registration_Route, Shop_Route} from "../utils/constants";
import {purchase} from "../http/WareAPI";

import {observer} from "mobx-react-lite";
import {Context} from "../index";

const BasketFormNoUser = observer( () => {
    const {user, ware} = useContext(Context);
    const location = useLocation();
    const history = useHistory();
    
    

    const buy = async ()=>{
        let formData = {
            email: email,
            phone: phone,
            name: name,
            pastname: pastname,
            country: country,
            city: city,
            street: street,
            home: home,
            comment: comment,
            cast: cast,
            waresInBasketId: waresInBasketId,

            
        };
        try{
            await purchase(formData).then(data =>{
            window.location = data; 
            return null;
        });
        
        } catch (e) {
            setInclude(e.response.data.message);
        }
        delete localStorage.waresInLocalstorage;
    }
    
   
   
    
    let cast = 0;
    let waresInBasketId = [];
    let userId;
    let array = JSON.parse(localStorage.getItem('waresInLocalstorage'));
    if(array){
            array.map((item)=>{cast = item.count * item.price + cast;let warez = {count: item.count, id: item.id}; waresInBasketId.push(warez)})

    }
    

    const [email, setEmail] = useState();
    const [phone, setPhone] = useState();
    const [name, setName] = useState();
    const [pastname, setPastname] = useState();
    const [country, setCountry] = useState();
    const [city, setCity] = useState();
    const [street, setStreet] = useState();
    const [home, setHome] = useState();
    const [comment, setComment] = useState();
    const [include, setInclude] = useState();
    const [casts, setCasts] = useState();
    
    

    // const signIn = async ()=>{
    //     try {
    //       let data;
    //
    //       data = await login(loginOrEmail,password);
    //
    //       user.setUser(data.user);
    //       console.log(user)
    //       user.setIsAuth(true);
    //       history.push(Shop_Route);
    //     } catch (e) {
    //       setInclude(e.response.data.message);
    //     }
    //
    // }



    return (
            <Card style={{ maxWidth: '100%', minHeight: 300, textAlign: 'center'}} className={'p-5 FormToSale'}>
                <h2>Оформление заказа!</h2>

                <Row className = {'w-100'}>
                    <Col md={9}>
                        <Form >
                            <Row className={'mt-3'}>
                                <Col md={3}>
                                    <h4>Email</h4>
                                </Col>
                               
                                <Col>
                                    <Form.Control name={'email'} value={email} onChange={(event)=> {setEmail(event.target.value);setInclude(null)}} placeholder={'Введите логин или e-mail'} type={'email'} />
                                </Col>
                            </Row>
                            <Row className={'mt-3'}>
                                <Col md={3}>
                                    <h4>Телефон</h4>
                                </Col>
                                <Col>
                                    <Form.Control name={'phone'} value={phone} onChange={(event)=> {setPhone(event.target.value);setInclude(null)}} placeholder={'Введите пароль'} type={'tel'} />
                                </Col>
                            </Row>
                            <Row className={'mt-3'}>
                                <Col md={3}>
                                    <h4>Ваше имя</h4>
                                </Col>
                                <Col>
                                    <Form.Control name={'name'} value={name} onChange={(event)=> {setName(event.target.value);setInclude(null)}} placeholder={'Введите логин или e-mail'} type={'text'} />
                                </Col>
                            </Row>
                            <Row className={'mt-3'}>
                                <Col md={3}>
                                    <h4>Ваша фамилия</h4>
                                </Col>
                                <Col>
                                    <Form.Control name={'pastname'} value={pastname} onChange={(event)=> {setPastname(event.target.value);setInclude(null)}} placeholder={'Введите логин или e-mail'} type={'text'} />
                                </Col>
                            </Row>
                            <Row className={'mt-3'}>
                                <Col md={3}>
                                    <h4>Страна</h4>
                                </Col>
                                <Col>
                                    <Form.Control name={'country'} value={country} onChange={(event)=> {setCountry(event.target.value);setInclude(null)}} placeholder={'Введите логин или e-mail'} type={'text'} />
                                </Col>
                            </Row>
                            <Row className={'mt-3'}>
                                <Col md={3}>
                                    <h4>Город</h4>
                                </Col>
                                <Col>
                                    <Form.Control name={'city'} value={city} onChange={(event)=> {setCity(event.target.value);setInclude(null)}} placeholder={'Введите логин или e-mail'} type={'text'} />
                                </Col>
                            </Row>
                            <Row className={'mt-3'}>
                                <Col md={3}>
                                    <h4>Улица</h4>
                                </Col>
                                <Col>
                                    <Form.Control name={'street'} value={street} onChange={(event)=> {setStreet(event.target.value);setInclude(null)}} placeholder={'Введите логин или e-mail'} type={'text'} />
                                </Col>
                            </Row>
                            <Row className={'mt-3'}>
                                <Col md={3}>
                                    <h4>Дом</h4>
                                </Col>
                                <Col>
                                    <Form.Control name={'home'} value={home} onChange={(event)=> {setHome(event.target.value);setInclude(null)}} placeholder={'Введите логин или e-mail'} type={'text'} />
                                </Col>
                            </Row>
                            <Row className={'mt-3'}>
                                <Col md={3}>
                                    <h4>Комментарий</h4>
                                </Col>
                                <Col>
                                    <Form.Control name={'comment'} value={comment} onChange={(event)=> {setComment(event.target.value);setInclude(null)}} placeholder={'Введите логин или e-mail'} type={'text'} />
                                </Col>
                            </Row>
                            
                            <div style={{color: 'red'}}>{include}</div>

                        </Form>
                        
                    </Col>
                    <Col md={3} className = {'align-items-center justify-content-center d-flex'}>
                        <div className = {'align-items-center justify-content-center d-flex flex-column'}>
                            <div>
                                <h4>И того:</h4>
                                <div class = {'position-relative'}>
                                <h4>{cast}</h4>
                                <h4 class = {'position-absolute casts'}>{casts}</h4>
                                </div>
                                
                            </div>
                            
                            <Button onClick={()=>{buy();}} variant={'outline-success'}><h4>Оплатить</h4></Button>
                        </div>
                    </Col>
                </Row>
            </Card>
    );
});

export default BasketFormNoUser;
