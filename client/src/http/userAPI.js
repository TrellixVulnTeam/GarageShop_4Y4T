import {$authHost, $host} from "./index";
import jwt_decode from 'jwt-decode';

export const registration = async (login, email, password) =>{
    const {data} = await $host.post('api/user/registration', {login: login, email: email, password: password, role:'ADMIN'});
    if (data.code == 500){
        localStorage.setItem('token', data.token);
        return jwt_decode(data.token);
    };
    return (data.code);
};

export const login = async (loginOrEmail, password) =>{
    const {data} = await $host.post('api/user/login', {loginOrEmail: loginOrEmail, password: password});
    if (data.code == 500){
        localStorage.setItem('token', data.token);
        return jwt_decode(data.token);
    };
    return (data.code);


};

export const check = async () =>{
    const {data} = await  $authHost.get('api/user/auth');
    localStorage.setItem('token', data.token);
    return jwt_decode(data.token);
};