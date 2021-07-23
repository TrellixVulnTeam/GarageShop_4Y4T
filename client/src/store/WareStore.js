import {makeAutoObservable} from "mobx";

export default class WareStore {
    constructor() {
        this._types = [];
        this._brands = [];
        this._wares = [];
        this._selectedType = {};
        this._selectedBrand = {};
        this._page = 1;
        this._totalCount = 0;
        this._limit = 3;
        makeAutoObservable(this);
    };
    setTypes(types){
        this._types = types;
    };
    setBrands(brands){
        this._brands = brands;
    };
    setWares(wares){
        this._wares = wares;
    };
    setSelectedType(type) {
        this.setPage(1)
        this._selectedType = type
    };
    setSelectedBrand(brand) {
        this.setPage(1)
        this._selectedBrand = brand
    };
    setPage(page) {
        this._page = page
    }
    setTotalCount(count) {
        this._totalCount = count
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
    get selectedType() {
        return this._selectedType
    };
    get selectedBrand() {
        return this._selectedBrand
    };
    get totalCount() {
        return this._totalCount
    };
    get page() {
        return this._page
    };
    get limit() {
        return this._limit
    };
}
