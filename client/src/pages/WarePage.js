import React, {useContext, useState, useEffect} from 'react';
import {Button, Col, Container, Row, Tab, Table, Tabs, Form} from "react-bootstrap";
import WareStore from "../store/WareStore";
import {fetchOneWare} from '../http/WareAPI.js';
import {Context} from "../index";
import {useParams} from 'react-router-dom';
import {useHistory} from "react-router-dom";

import image from '../components/11.jpeg';
import {observer} from "mobx-react-lite";
import {fetchBrands, fetchWares, fetchTypes, addToCart} from "../http/WareAPI";
import jwt_decode from "jwt-decode";
import {Ware_Route} from '../utils/constants.js';



const WarePage = observer((props) => {
  const {user} = useContext(Context);
    let token = localStorage.getItem('token');
    let history = useHistory();



    const [ware, setWare] = useState({info: []})
    const [counts, setCounts] = useState(1);
    const {id} = useParams();
    useEffect(() => {
        
        fetchOneWare(id).then((data) => {setWare(data);console.log(data);})
    }, []);

    const addToCartbtn = ()=>{

      if (token) {
        let userName = jwt_decode(token);
        console.log(userName.id.id);
        addToCart(id, counts, userName.id.id);
      }else{
            
            let wares = ware;
            wares.count = counts;
          
            let waresInLocalstorage = localStorage.getItem('waresInLocalstorage');
            if(waresInLocalstorage){
                let array = JSON.parse(localStorage.getItem('waresInLocalstorage'));
                array.push(wares)
                array.map((item, index) =>{
                    for(let i = index + 1;i < array.length; i++){
                        if(item.id == array[i].id){
                            item.count++;
                            array.splice(i, 1);
                            i--;
                        }
                    }
                })
                localStorage.waresInLocalstorage = JSON.stringify(array)
            }else{
                let waresInLocalstorage = [wares];
                localStorage.setItem('waresInLocalstorage', JSON.stringify(waresInLocalstorage));
            }
          
      }
    window.location = Ware_Route +'/' + id;
    }

    return (
        <Container >
            <Row>
                <Col md={6}>
                    <img className={'w-100'} src={process.env.REACT_APP_API_URL + ware.img} />
                </Col>
                <Col md={6} className={'text-center'}>
                    <div className={'text-start'}>
                        <h1 className={'mb-4 headWare courierNew'}>{ware.name}</h1>

                        <h3 className={'headWare fontPrice'}>{ware.price}₽ </h3>
                    </div>
                    <form className={'w-75 headWare'}>
                        <div className={'mt-5'}>
                            <h3 className = {'courierNew'}>Размер</h3>
                            <select style={{color:'#474747',height:'30px'}} className={'w-100 text-center border-success'}>
                                <option value="XS">XS</option>
                                <option value="S">S</option>
                                <option value="M">M</option>
                                <option value="L">L</option>
                                <option value="XL">XL</option>
                                <option value="XXL">XXL</option>
                                <option value="XXXL">XXXL</option>
                            </select>
                        </div>

                        <hr />
                        <div className={'d-flex'}>
                            <div className={'d-flex m-auto plusMinus'}>
                                <div className={'minus'} onClick={()=>{setCounts(counts-1)}}>-</div>
                                    <Form.Control name={'count'} className={'plusMinusInput p-0 text-center'} value={counts} size={'2'} onChange={(event)=> {setCounts(event.target.value);}} type={'number'} min={'0'} inputmode={"numeric"} />
                                <div className={'plus'} onClick={()=>{setCounts(counts-1+2); console.log(counts)}}>+</div>
                            </div>
                            <Button className={'btn btn-primary btnAddToBasket m-auto'}  onClick={addToCartbtn}>В корзину</Button>
                            
                        </div>
                    </form>
                    <div className = {'mt-5 '}>
                        <h2 className = {'headDiscript text-center'}>Описание</h2>
                        <div className = {"discript m-auto"}>
                             <h4 className = {'m-auto font-weight-light'}>{ware.discription}</h4>
                        </div>
                    </div>
                </Col>
            </Row>
            <Row className={'mt-5 mb-5 '}>
                <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
                    <Tab eventKey="home" title="Описание">
                        <Col md={9} className={'border-primary w-100 text-lg-start des'}>
                            <p>

                            </p>
                        </Col>
                    </Tab>
                    <Tab eventKey="profile" title="Детали">
                        <Col md={9} className={'border-primary w-100 text-lg-start des'}>
                                <Table className="woocommerce-product-attributes shop_attributes">
                                    <tbody>
                                    <tr className="woocommerce-product-attributes-item woocommerce-product-attributes-item--weight">
                                        <th className="woocommerce-product-attributes-item__label">Вес</th>
                                        <td className="woocommerce-product-attributes-item__value">1.5 kg</td>
                                    </tr>
                                    <tr className="woocommerce-product-attributes-item woocommerce-product-attributes-item--dimensions">
                                        <th className="woocommerce-product-attributes-item__label">Габариты</th>
                                        <td className="woocommerce-product-attributes-item__value">35 × 35 × 15 cm</td>
                                    </tr>
                                    <tr className="woocommerce-product-attributes-item woocommerce-product-attributes-item--attribute_%d1%80%d0%b0%d0%b7%d0%bc%d0%b5%d1%80-%d0%b2%d0%b5%d1%80%d1%85%d0%b0">
                                        <th className="woocommerce-product-attributes-item__label">Размер Верха</th>
                                        <td className="woocommerce-product-attributes-item__value"><p>XS, S, M, L, XL,
                                            XXL, XXXL</p>
                                        </td>
                                    </tr>
                                    <tr className="woocommerce-product-attributes-item woocommerce-product-attributes-item--attribute_%d1%80%d0%b0%d0%b7%d0%bc%d0%b5%d1%80-%d0%bd%d0%b8%d0%b7%d0%b0">
                                        <th className="woocommerce-product-attributes-item__label">Размер Низа</th>
                                        <td className="woocommerce-product-attributes-item__value"><p>XS, S, M, L, XL,
                                            XXL, XXXL</p>
                                        </td>
                                    </tr>
                                    <tr className="woocommerce-product-attributes-item woocommerce-product-attributes-item--attribute_%d1%80%d0%be%d1%81%d1%82">
                                        <th className="woocommerce-product-attributes-item__label">Рост</th>
                                        <td className="woocommerce-product-attributes-item__value"><p>155, 156, 157,
                                            158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172,
                                            173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187,
                                            188, 189, 190</p>
                                        </td>
                                    </tr>
                                    </tbody>
                                </Table>
                        </Col>
                    </Tab>
                    <Tab eventKey="contact" title="Отзывы">
                        <Col md={9} className={'border-primary w-100 text-lg-start des'}>
                            <p>

                            </p>
                        </Col>
                    </Tab>
                </Tabs>
            </Row>
        </Container>
    );
});

export default WarePage;
