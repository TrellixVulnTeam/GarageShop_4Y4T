import React, {useContext, useEffect, useState} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import WareList from "../components/WareList";
import PreFooter from "../components/preFooter";
import New from "../components/New";
import {Context} from "../index";
import {fetchBrands, fetchWares, fetchTypes} from "../http/WareAPI";
import {observer} from "mobx-react-lite";

const Shop = observer(() => {
    const {ware} = useContext(Context);
    const [selectType, setSelectType] = useState('Товары');
    let types1 = [];
    let types2 = [];
    let types3 = [];
    
    
    useEffect(()=>{
      try {

        fetchTypes().then((data) => {ware.setTypes(data);});
        fetchBrands().then((data) => {ware.setBrands(data);});

        fetchWares(null, null).then((data) => {
            ware.setWares(data.rows);
            let type1 = [];
            let type2 = [];
            let type3 = [];
            data.rows.map((wares)=>{
                
                switch(wares.typeId){
                    case 2:
                        type1.push(wares)
                        ware.setWaresT1(type1);
                        break
                    case 3:
                        type2.push(wares)
                        ware.setWaresT2(type2);
                        break
                    case 5:
                        type3.push(wares)
                        ware.setWaresT3(type3);
                        break
                }
                
            })
            
        })

      } catch (e) {
          console.log(e);
        return
      }
        
    },[]);

    useEffect(() => {
      try {
        fetchWares(ware.selectedType.id, ware.selectedBrand.id).then(data => {
            
          console.log(data);
          ware.setWares(data.rows);
          ware.setTotalCount(data.count)
        })
      } catch (e) {
        console.log('2');
        return
      }
      if(ware.selectedType.name){
          console.log(ware.selectedType.name)
                setSelectType(ware.selectedType.name)
        }
        
    }, [ware.selectedType, ware.selectedBrand])

   useEffect(()=>{
       ware.wares.map((ware) =>{
        switch(ware.typeId){
            case 1:
                types1.push(ware);
                break
                
            case 2:
                types2.push(ware);
                break
            case 3:
                types3.push(ware);
                break
        }
        console.log(types1);
        console.log(ware.typeId)
    })
   },[]) 
    
    return (
        <>
            <Container className={'p-0'} fluid={true}>
                <New />
                <PreFooter/>
            </Container>
        </>
    );
});

export default Shop;
