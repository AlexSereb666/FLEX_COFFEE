import { makeAutoObservable } from 'mobx'

export default class ProductStore {
    constructor() {
        this._type = [
            {id: 1, name: 'Чай' },
            {id: 2, name: 'Кофе' },
            {id: 3, name: 'Пирожные' },
            {id: 4, name: 'Торты' }
        ]
        this._view = [
            {id: 1, name: 'Напитки' },
            {id: 2, name: 'Десерты' }
        ]
        this._products = [
            {id: 1, name: 'Капучино', price: 100, rating: 5, img: 'https://klike.net/uploads/posts/2023-03/1678856583_3-22.jpg', count: 10},
            {id: 2, name: 'Эспрессо', price: 80, rating: 5, img: 'https://klike.net/uploads/posts/2023-03/1678856583_3-22.jpg', count: 10},
            {id: 3, name: 'Амаретто', price: 120, rating: 5, img: 'https://klike.net/uploads/posts/2023-03/1678856583_3-22.jpg', count: 10},
            {id: 4, name: 'Раф-кофе', price: 220, rating: 5, img: 'https://klike.net/uploads/posts/2023-03/1678856583_3-22.jpg', count: 10},
            {id: 5, name: 'Наполеон', price: 400, rating: 5, img: 'https://klike.net/uploads/posts/2023-03/1678856583_3-22.jpg', count: 10},
            {id: 6, name: 'Картошка', price: 50, rating: 5, img: 'https://klike.net/uploads/posts/2023-03/1678856583_3-22.jpg', count: 10},
            {id: 7, name: 'Эклер', price: 75, rating: 5, img: 'https://klike.net/uploads/posts/2023-03/1678856583_3-22.jpg', count: 10},
        ]
        this._selectedType = {}
        this._selectedView = {}
        makeAutoObservable(this)
    }

    setTypes(types) {
        this._types = types
    }

    setView(views) {
        this._views = views
    }

    setProduct(products) {
        this._products = products
    }

    get types() {
        return this._type
    }

    get views() {
        return this._view
    }

    get products() {
        return this._products
    }

    get selectedType() {
        return this._selectedType
    }

    get selectedView() {
        return this._selectedView
    }

    setSelectedType(type) {
        this._selectedType = type
    }

    setSelectedView(view) {
        this._selectedView = view
    }
}