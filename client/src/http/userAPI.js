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
            return 500;
        }
    }
}

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

export const changePassword = async (oldPassword, newPassword, userId) => {
    try {
        const { data } = await $authHost.post('api/user/change-password', { oldPassword, newPassword, userId });
        return data.message;
    } catch (error) {
        if (error.response) {
            return error.response.data.message;
        } else {
            return 'Внутренняя ошибка сервера';
        }
    }
}

export const changeProfile = async (newLogin, newEmail, newPhone, userId) => {
    try {
        const { data } = await $authHost.post('api/user/change-profile', { newLogin, newEmail, newPhone, userId });
        localStorage.setItem('token', data.token);
        return jwtDecode(data.token)
    } catch (error) {
        if (error.response) {
            return error.response.data.message;
        } else {
            return 'Внутренняя ошибка сервера';
        }
    }
}

export const getUserById = async (userId) => {
    try {
        const { data } = await $authHost.get(`api/user/${userId}`);
        return data;
    } catch (error) {
        if (error.response) {
            return error.response.data.message;
        } else {
            return 'Внутренняя ошибка сервера';
        }
    }
}
