import {makeAutoObservable} from "mobx";

export default class WareStore {
    constructor() {
        this._types = [
            {id: 1, name: 'Платье'},
            {id: 2, name: 'Шорты'}
        ];
        this._brands = [
            {id: 1, name: 'VI'},
            {id: 2, name: 'Dan'}
        ];
        this._wares = [
            {id: 1, name: 'Skyyy pro', price: 25000, rating: 5},
            {id: 2, name: 'Skyyy 222222pro', price: 25000, rating: 5},
            {id: 3, name: 'Skyyy 2pro', price: 25000, rating: 5},
            {id: 4, name: 'Skyyy 221pro', price: 25000, rating: 5},
            {id: 5, name: 'Skyyy 3pro', price: 25000, rating: 5},
            {id: 6, name: 'Skyyy 2pro', price: 25000, rating: 5},
            {id: 7, name: 'Skyyy pro', price: 25000, rating: 5},
            {id: 8, name: 'Skyyy 222222pro', price: 25000, rating: 5},
            {id: 9, name: 'Skyyy 2pro', price: 25000, rating: 5},
            {id: 10, name: 'Skyyy 221pro', price: 25000, rating: 5},
            {id: 11, name: 'Skyyy 3pro', price: 25000, rating: 5},
            {id: 12, name: 'Skyyy 2pro', price: 25000, rating: 5},
            {id: 13, name: 'Skyyy pro', price: 25000, rating: 5},
            {id: 14, name: 'Skyyy 222222pro', price: 25000, rating: 5},
            {id: 15, name: 'Skyyy 2pro', price: 25000, rating: 5},
            {id: 16, name: 'Skyyy 221pro', price: 25000, rating: 5},
            {id: 17, name: 'Skyyy 3pro', price: 25000, rating: 5},
            {id: 18, name: 'Skyyy 2pro', price: 25000, rating: 5},
            {id: 19, name: 'Skyyy pro', price: 25000, rating: 5},
            {id: 20, name: 'Skyyy 222222pro', price: 25000, rating: 5},
            {id: 21, name: 'Skyyy 2pro', price: 25000, rating: 5},
            {id: 22, name: 'Skyyy 221pro', price: 25000, rating: 5},
            {id: 23, name: 'Skyyy 3pro', price: 25000, rating: 5},
            {id: 24, name: 'Skyyy 2pro', price: 25000, rating: 5},

        ];



        makeAutoObservable(this);
    };
    setTypes(types){
        this._types = types;
    };
    setBrands(brands){
        this._brands = brands;
    };
    setWares(devices){
        this._wares = devices;
    };
    get types(){
        return this._types
    };
    get brands(){
        return this._brands
    };
    get wares(){
        return this._wares
    };
}