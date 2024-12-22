import api from "../api";

export const getRequest = async (url: string) => {
    return await api.get(url).then(result => result.data).catch((e => e));
};

export const postRequest = async (url: string, body: any) => {
    return await api.post(url, body).then(result => result.data).catch((e => e));
};