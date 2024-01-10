import { makeAutoObservable } from 'mobx';

export default class BasketStore {
    constructor() {
        this._basket = [];
        this._selectedProducts = [];
        makeAutoObservable(this);
    }

    setBasket(basket) {
        this._basket = basket;
    }

    get basket() {
        return this._basket;
    }

    get selectedProducts() {
        return this._selectedProducts;
    }

    addToSelectedProducts(product) {
        this._selectedProducts.push(product);
    }

    removeFromSelectedProducts(productId) {
        this._selectedProducts = this._selectedProducts.filter(product => product.id !== productId);
    }

    clearSelectedProducts() {
        this._selectedProducts = [];
    }
}
