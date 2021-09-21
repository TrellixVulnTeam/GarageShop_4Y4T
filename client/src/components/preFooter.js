import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import img1 from './images/globe.png';
import img2 from './images/lock.png';
import img3 from './images/quality.png';
import img4 from './images/tag.png';

const PreFooter =  () => {
    

    return (
            <>
                <Row className = {'mt-5 m-5'}>
                    <Col md={3}>
                        <div>
                             <img className={'w-25'} src={img1} alt="Globe"/>
                        </div>
                        <div className = {'text-center mt-4'}>
                            <h4 className = {'courierNew m-auto  text-center'}>ДОСТАВКА ПО ВСЕМУ МИРУ</h4>
                        </div>
                        <div className = {'mt-5'}>
                            Наш бренд отправляет заказ по всему миру по самым выгодным ценам
                        </div>
                    </Col>
                    <Col md={3}>
                        <div>
                             <img className={'w-25'} src={img2} alt="Globe"/>
                        </div>
                        <div className = {'text-center mt-4'}>
                            <h4 className = {'courierNew m-auto  text-center'}>Безопасный платеж</h4>
                        </div>
                        <div className = {'mt-5'}>
                            Сайт защищен SSL - сертификатом, что означает, что Ваши данные защищены
                        </div>
                    </Col>
                    <Col md={3}>
                        <div>
                             <img className={'w-25'} src={img3} alt="Globe"/>
                        </div>
                        <div className = {'text-center mt-4'}>
                            <h4 className = {'courierNew m-auto  text-center'}>Приемлемые цены</h4>
                        </div>
                        <div className = {'mt-5'}>
                            У нас собственная фабрика в южном регионе Российской Федерации, что позволяет нам создавать выгодные предложения для наших клиентов
                        </div>
                    </Col>
                    <Col md={3}>
                        <div>
                             <img className={'w-25'} src={img4} alt="Globe"/>
                        </div>
                        <div className = {'text-center mt-4'}>
                            <h4 className = {'courierNew m-auto  text-center'}>Большие скидки</h4>
                        </div>
                        <div className = {'mt-5'}>
                            Мы любим наших клиентов поэтому радуем их скидками
                        </div>
                    </Col>
                </Row>
            </>
    );
};

export default PreFooter;
