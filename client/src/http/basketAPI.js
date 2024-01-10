import { $authHost } from "./index";

export const addToBasket = async (userId, productId) => {
    const {data} = await $authHost.post('api/basket', { userId, productId });
    return data;
}

export const getBasket = async (userId) => {
    const {data} = await $authHost.get(`api/basket/` + userId );
    return data;
}

export const removeFromBasket = async (userId, basketProductId) => {
    const { data } = await $authHost.delete(`api/basket/${basketProductId}`, { data: { userId } });
    return data;
}
