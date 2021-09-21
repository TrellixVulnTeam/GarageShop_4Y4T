import React, {useState, useEffect, useContext} from 'react';
import {Carousel, Container} from "react-bootstrap";

import WareListNew from './WareListNew.js';
import IncludesNews from './IncludesNews.js';
import IncludesNews1 from './IncludesNews1.js';
import {Context} from "../index";
import {observer} from "mobx-react-lite";
import image from './images/CTAPyXA.jpeg';
import img1 from './images/11.jpeg';
import img2 from './images/12.jpeg';
import img3 from './images/13.jpeg';
import img4 from './images/14.jpeg';

import {fetchBrands, fetchWares, fetchTypes} from "../http/WareAPI";



const New = observer(() => {
    const [wareNew, setWareNew] = useState();
      const {ware} = useContext(Context);

    return (
        <div className={'w-100 mb-5 '}>
            <div className={'position-relative w-100 imgNew'}>
                <div>
                    <img src = {image} className = {' w-100'} />
                </div>
                <div className = {'position-absolute w-100 divNew courierNew'}>
                    <h1 className={'text-center'}>Что-то</h1>
                    <h1 className={'text-center'}>Что-то ещё</h1>
                </div>
            </div>
            <IncludesNews title={'Серёжа'} content = {'Придумай что написать тут'} img={img1} />
            <WareListNew title = {'Платья'}  wares = {ware.waresT1}/>
            <IncludesNews title={'Качество!'} content = {'Наша одежда - из качественной шерсти молодых ягнят'} img={img2} />
            <IncludesNews1 title={'Промокоды!'} content = {'Промокоды дают скидку на покупки!'} img={img3} />
            <WareListNew title = {'Топы и кардиганы'} wares = {ware.waresT2}/>
            <WareListNew title = {'Костюмы'} wares = {ware.waresT3}/>
            <IncludesNews title={'Подпишись на наш инстаграм!'} content = {'Следи за акциями и учавствуй в конкурсах!'} img={img4} />
        </div>
    );
});


export default New;
