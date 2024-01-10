import { $authHost } from "./index";

export const addToOrder = async (userId, productId) => {
    const {data} = await $authHost.post('api/order', { userId, productId });
    return data;
}
