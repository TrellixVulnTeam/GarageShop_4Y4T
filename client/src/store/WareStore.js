import {makeAutoObservable} from "mobx";

export default class WareStore {
    constructor() {
        this._types = [];
        this._brands = [];
        this._wares = [];
        this._waresNew = [];
        this._waresT1 = [];
        this._waresT2 = [];
        this._waresT3 = [];
        this._waresInBasket = [];
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
    setWaresNew(wares){
        this._waresNew = wares;
    };
    setWaresT1(wares){
        this._waresT1 = wares;
    };
    setWaresT2(wares){
        this._waresT2 = wares;
    };
    setWaresT3(wares){
        this._waresT3 = wares;
    };
    setWaresInBasket(waresInBasket){
      this._waresInBasket = waresInBasket
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
    get waresNew(){
        return this._waresNew
    };
    get waresT1(){
        return this._waresT1
    };
    get waresT2(){
        return this._waresT2
    };
    get waresT3(){
        return this._waresT3
    };
    
    get waresInBasket (){
      return this._waresInBasket
    }
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
