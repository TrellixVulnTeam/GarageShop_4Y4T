import React, {useContext, useEffect, useState} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import WareList from "../components/WareList";
import PreFooter from "../components/preFooter";
import New from "../components/New";
import {Context} from "../index";
import {fetchBrands, fetchWares, fetchTypes} from "../http/WareAPI";
import {observer} from "mobx-react-lite";

import {useParams} from 'react-router-dom';
import {useHistory} from "react-router-dom";

const ShopTypes = observer(() => {
    const {ware} = useContext(Context);
    const [selectType, setSelectType] = useState('Товары');
    const {id} = useParams();
    
    useEffect(()=>{
      try {
        fetchTypes().then((data) => {ware.setTypes(data);});
        fetchBrands().then((data) => {ware.setBrands(data);});

        fetchWares(id, null).then((data) => {
            ware.setWares(data.rows);
            console.log(ware.selectedType)
        })
        fetchWares(1, null).then((data) => {console.log(data);ware.setWaresNew(data.rows)})
        
      } catch (e) {
          console.log(e);
        return
      }
        
    },[]);

   

   
    return (
        
        <>
            
            <Container fluid={true} className={'navMargin'}>

                <h1 className={'mt-3 w-100 text-center courierNew'}>{selectType}</h1>
                <Row className={'text-center'}>
                        <WareList/>
                        <PreFooter/>
                </Row>
            </Container>
        </>
    );
    
});

export default ShopTypes;
