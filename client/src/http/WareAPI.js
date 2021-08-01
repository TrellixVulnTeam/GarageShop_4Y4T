import {$authHost, $host} from "./index";
import jwt_decode from 'jwt-decode';

export const createType = async (type) =>{
    console.log(type);
    const {data} = await $authHost.post('api/type', type);
    console.log(data);
    return data;
};

export const  fetchTypes = async () =>{
    const {data} = await $host.get('api/type');
    console.log(data);
    return data;
};

export const createBrand = async (brand) =>{
    const {data} = await $authHost.post('api/brand', brand);
    return data;
};

export const  fetchBrands = async () =>{
    const {data} = await $host.get('api/brand');
    return data;
};
export const createWare = async (ware)=>{
    const {data} = await $authHost.post('api/ware', ware);
    return data;
};
export const fetchWares = async (typeId, brandId)=>{
  try {
    console.log(typeId);
    console.log(brandId);
    const {data} = await $host.get('api/ware', {params:{typeId, brandId}});
    console.log(data);
    return data;
  } catch (e) {
    console.log(e);
  }

};
export const addToCart = async (wareId, userId)=>{
  try {
    console.log('addToCart');
    console.log(wareId, userId);
    const {data} = await $host.get('api/cart/', {params: {wareId: wareId, userId: userId}});
    return data
  } catch (e) {

    console.log(e);
    return
  }

}
export const fetchBasketWare = async (userId)=>{
  try {
    console.log(userId);
    console.log('dataBasket');
    const {data} = await $host.post('api/cart', {userId: userId});

    console.log(data);
    console.log('dataBasket');
    return data
  } catch (e) {
    console.log(e);
    return
  }

};
export const fetchOneWare = async (id) => {
    console.log('aaaa');
    const {data} = await $host.get('api/ware/' + id)
    console.log(data);
    return data
}
