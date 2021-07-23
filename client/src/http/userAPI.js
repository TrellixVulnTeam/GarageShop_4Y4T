import {$authHost, $host} from "./index";
import jwt_decode from 'jwt-decode';

export const registration = async (login, email, password) =>{
    const {data} = await $host.post('api/user/registration', {login, email,password});
    if (data.code == 500){
        localStorage.setItem('token', data.token);
        return jwt_decode(data.token);
    };
    return (data.code);
};

export const login = async (loginOrEmail, password) =>{

    const {data} = await $host.post('api/user/login', {loginOrEmail, password});
    console.log(data);
    if (data.code == 500){
      localStorage.setItem('token', data.token);
      let decodeToken = jwt_decode(data.token);
      console.log(localStorage.getItem('token'));

      return ({user: decodeToken.id, code: data.code});
    };
    console.log(data.token);
    return (data.code);


};

export const check = async () => {
    try {

        const {data} = await $authHost.get('api/user/auth' );
        localStorage.setItem('token', data.token)
        return jwt_decode(data.token)

    }catch (e){
        console.log(e);
        console.log('error in userApi.Check')
    }
}

//
// import {$authHost, $host} from "./index";
// import jwt_decode from "jwt-decode";
//
// export const registration = async (email, password) => {
//     const {data} = await $host.post('api/user/registration', {email, password, role: 'ADMIN'})
//     localStorage.setItem('token', data.token)
//     return jwt_decode(data.token)
// }
//
// export const login = async (email, password) => {
//     const {data} = await $host.post('api/user/login', {email, password})
//     localStorage.setItem('token', data.token)
//     return jwt_decode(data.token)
// }
//
// export const check = async () => {
//     const {data} = await $authHost.get('api/user/auth' )
//     localStorage.setItem('token', data.token)
//     return jwt_decode(data.token)
// }
