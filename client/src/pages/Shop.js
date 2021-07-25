import React, {useContext, useEffect} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import WareList from "../components/WareList";
import New from "../components/New";
import {Context} from "../index";
import {fetchBrands, fetchWares, fetchTypes} from "../http/WareAPI";
import {observer} from "mobx-react-lite";

const Shop = observer(() => {
    const {ware} = useContext(Context);
    useEffect(()=>{
      console.log(ware);
        fetchTypes().then((data) => {ware.setTypes(data);});
        fetchBrands().then((data) => {ware.setBrands(data);});
        console.log(ware.selectedType);
        fetchWares(1,1).then((data) => {console.log(data);ware.setWares(data.rows)})
    },[]);

    useEffect(() => {
        fetchWares(ware.selectedType.id, ware.selectedBrand.id).then(data => {
          console.log(data);
          ware.setWares(data.rows);
          ware.setTotalCount(data.count)

        })
    }, [ware.selectedType, ware.selectedBrand])
    return (
        <>
            <New/>
            <Container fluid={true}>

                <Row className={'text-center'}>

                        <WareList/>
                </Row>
            </Container>
        </>
    );
});

export default Shop;
