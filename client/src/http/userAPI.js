import { $host, $authHost } from "./index";
import { jwtDecode } from 'jwt-decode';

export const userRegistration = async (login, password, email, phone, role) => {
    try {
        const { data } = await $host.post('api/user/registration', { login, password, email, phone, role });
        return jwtDecode(data.token);
    } catch (error) {
        if (error.response) {
            return error.response.status
        } else {
            return 500; // внутренняя ошибка сервера
        }
    }
};

export const loginFunc = async (login, password) => {
    const { data } = await $host.post('api/user/login', {login, password})
    localStorage.setItem('token', data.token)
    return jwtDecode(data.token)
}

export const check = async () => {
    try {
        const { data } = await $authHost.post('api/user/auth')
        localStorage.setItem('token', data.token)
        return jwtDecode(data.token)
    } catch (e) {
        console.log(e)
    }
    
}
