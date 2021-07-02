import {makeAutoObservable} from "mobx";

export default class DeviceStore{
    constructor() {
        this._types = [
            {id: 1, name: 'Платье'},
            {id: 2, name: 'Шорты'}
        ];
        this._brands = [
            {id: 1, name: 'VI'},
            {id: 2, name: 'Dan'}
        ];
        this._devices = [
            {id: 1, name: 'Skyyy pro', price: 25000, rating: 5},
            {id: 2, name: 'Skyyy 222222pro', price: 25000, rating: 5},
            {id: 3, name: 'Skyyy 2pro', price: 25000, rating: 5},
            {id: 4, name: 'Skyyy 221pro', price: 25000, rating: 5},
            {id: 5, name: 'Skyyy 3pro', price: 25000, rating: 5},
            {id: 6, name: 'Skyyy 2pro', price: 25000, rating: 5},

        ];



        makeAutoObservable(this);
    };
    setTypes(types){
        this._types = types;
    };
    setBrands(brands){
        this._brands = brands;
    };
    setDevices(devices){
        this._devices = devices;
    };
    get types(){
        return this._types
    };
    get brands(){
        return this._brands
    };
    get devices(){
        return this._devices
    };
}