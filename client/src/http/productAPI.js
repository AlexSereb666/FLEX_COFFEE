import {$authHost, $host} from "./index";
import { jwtDecode } from 'jwt-decode';

export const createType = async (type) => {
    const {data} = await $authHost.post('api/type', type)
    return data
}

export const fetchTypes = async () => {
    const {data} = await $host.get('api/type')
    return data
}

export const createView = async (view) => {
    const {data} = await $authHost.post('api/view', view)
    return data
}

export const fetchViews = async () => {
    const {data} = await $host.get('api/view', )
    return data
}

export const createProduct = async (product) => {
    const {data} = await $authHost.post('api/product', product)
    return data
}

export const fetchProducts = async (ProductTypeId, ProductViewId, page, limit = 8) => {
    const {data} = await $host.get('api/product', {params: {
        ProductTypeId, ProductViewId, page, limit
    }})
    return data
}

export const fetchOneProduct = async (id) => {
    const {data} = await $host.get('api/product/' + id)
    return data
}
