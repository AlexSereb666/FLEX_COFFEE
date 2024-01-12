import { $authHost } from "./index";

export const addToOrder = async (userId, productId, status) => {
    const {data} = await $authHost.post('api/order', { userId, productId, status });
    return data;
}

export const updateOrderStatus = async (id, status) => {
    const {data} = await $authHost.put('api/order/' + id, { status });
    return data;
}

export const getAllOrders = async () => {
    const {data} = await $authHost.get('api/order');
    return data;
}
