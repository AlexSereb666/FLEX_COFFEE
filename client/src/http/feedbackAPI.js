import { $host } from "./index";

export const feedbackReq = async (name, email, message) => {
    const response = await $host.post('api/feedback', {name, email, message})
    return response
}
