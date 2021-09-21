import {$authHost, $host} from "./index";
import jwt_decode from 'jwt-decode';

export const createType = async (type) =>{
    console.log(type);
    const {data} = await $authHost.post('api/type', type);
    console.log(data);
    return data;
};
export const createPromo = async (promo) =>{
    console.log(promo);
    const {data} = await $authHost.post('api/promo', promo);
    console.log(data);
    return data;
};

export const  fetchTypes = async () =>{
    const {data, value} = await $host.get('api/type');
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

    const {data} = await $host.get('api/ware', {params:{typeId, brandId}});

    return data;
  } catch (e) {
    console.log(e);
  }

};
export const addToCart = async (wareId,counts, userId)=>{
  try {
    console.log('addToCart');
    console.log(wareId, userId);
    console.log(counts + '/' + wareId + '/' + userId)
    const {data} = await $authHost.get('api/cart/', {params: {wareId: wareId, counts:counts, userId: userId}});
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
    let t = [];
    data.map((item)=>{ item.count = 1;})
    data.map((item, index)=>{
      for (let i = index + 1; i < data.length; i++) {
          if (item.id == data[i].id) {
              item.count++;
              data.splice(i ,1)
              i--;
          }

      }
    })

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

    return data
}
export const purchase = async (formData) => {
    const {data} = await $host.post('api/purchase', formData);
    return data
}
export const fetchByingInfo = async () => {
    console.log('purr')
    const data = await $authHost.post('api/purchase/admin' );
    console.log(data);
    return data
}
export const testPromo = async (promo) => {
    console.log('promopromopromopromopromopromopromopromopromopromopromopromopromopromo')
    const {data} = await $host.get('api/promo', {params: promo});
    console.log(data)
    return data
}
