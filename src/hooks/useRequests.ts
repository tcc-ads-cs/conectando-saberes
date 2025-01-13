import api from "../api";

export const getRequest = async (url: string, headers: any = {}) => {
    return await api.get(url, { headers }).then(result => result.data).catch((e => e));
};

export const postRequest = async (url: string, body: any, headers: any = {}) => {
    return await api.post(url, body, { headers }).then(result => result.data).catch((e => e));
};

export const deleteRequest = async (url: string, headers: any = {}) => {
    return await api.delete(url, { headers }).then(result => result.data).catch((e => e));
};