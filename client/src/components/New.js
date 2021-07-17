import React, {useState} from 'react';
import {Carousel, Container} from "react-bootstrap";
import img1 from './images/1.jpg';
import img2 from './images/2.jpg';
import img3 from './images/3.jpg';
import img4 from './images/4.jpg';




const New = () => {
    return (
        <div className={'w-100 mb-5'}>
            <Carousel fade controls={false} pause={false}>
                <Carousel.Item>
                    <div className={'h-70vw'}>
                        <img
                            className="d-block w-100"
                            src={img1}
                            alt="Second slide"
                        />
                    </div>
                    <Carousel.Caption>
                        <div className={'brdr'}>
                            GARAGE OF THE DAY
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <div className={'h-70vw'}>
                        <img
                            className="d-block w-100"
                            src={img2}
                            alt="Second slide"
                        />
                    </div>
                    <Carousel.Caption>
                        <div className={'brdr'}>
                            GARAGE OF THE DAY
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <div className={'h-70vw'}>
                        <img
                            className="d-block w-100"
                            src={img3}
                            alt="Second slide"
                        />
                    </div>

                    <Carousel.Caption>
                        <div className={'brdr'}>
                            GARAGE OF THE DAY
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <div className={'h-70vw'}>
                        <img
                            className="d-block w-100"
                            src={img4}
                            alt="Second slide"
                        />
                    </div>

                    <Carousel.Caption>
                        <div className={'brdr'}>
                            GARAGE OF THE DAY
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};


export default New;