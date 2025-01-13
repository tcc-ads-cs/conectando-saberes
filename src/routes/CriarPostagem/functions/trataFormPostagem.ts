import { postRequest } from "../../../hooks/useRequests";
import comparaCategorias from "./trataCategorias";

const getCurrentDateInISO = (): string => {
    const currentDate = new Date();
    return currentDate.toISOString();
};

const trataFormPostagem = async (data: FormData) => {    
    const bodyPost = async (data: FormData): Promise<Object> => {
        let categories = data.get('dcCategorias') ? await comparaCategorias(data.get('dcCategorias') as FormDataEntryValue) : [];

        switch (data.get('type')?.toString()) {
            case '0':
                return {
                    "post": {
                        "guid": "string",
                        "postDate": getCurrentDateInISO(),
                        "textPost": data.get('textPost'),
                        "quantityLikes": 0,
                        "type": 0,
                        "dcTitulo": null,
                        "userId": Number(localStorage.getItem('idUsuario')),
                        "areaId": 0,
                        "ExternalLink": null
                    },
                    "categories": [1]
                };
            case '1':
            return {
                    "post": {
                        "guid": "string",
                        "postDate": getCurrentDateInISO(),
                        "textPost": data.get('textPost'),
                        "quantityLikes": 0,
                        "type": 1,
                        "dcTitulo": data.get('dcTitulo'),
                        "userId": Number(localStorage.getItem('idUsuario')),
                        "areaId": 0,
                        "ExternalLink": null
                    },
                    "categories": categories.concat(2),
            };
            case '2':
            return {
                    "post": {
                        "guid": "string",
                        "postDate": getCurrentDateInISO(),
                        "textPost": data.get('textPost'),
                        "quantityLikes": 0,
                        "type": 2,
                        "dcTitulo": data.get('dcTitulo'),
                        "userId": Number(localStorage.getItem('idUsuario')),
                        "areaId": 0,
                        "ExternalLink": null
                    },
                    "categories": categories.concat(3),
            };
            case '3':
            return {
                    "post": {
                        "guid": "string",
                        "postDate": getCurrentDateInISO(),
                        "textPost": data.get('textPost'),
                        "quantityLikes": 0,
                        "type": 3,
                        "dcTitulo": data.get('dcTitulo'),
                        "userId": Number(localStorage.getItem('idUsuario')),
                        "areaId": 0,
                        "ExternalLink": data.get('lkPost') || null
                    },
                    "categories": categories.concat(4),
            };
            default: return {};
        }
    }

    try {
        const postPublicado = JSON.stringify(await bodyPost(data));
        const response = await postRequest('/Post/criar-post', postPublicado, {
            'Content-Type': 'application/json',
            'token': localStorage.getItem('token') || ''
        });

        if (typeof response === 'object' && 'status' in response) {
            return `Erro: ${response.status}`;
        } else {
            return "OK";
        }
        } catch (error) {
            return `Erro ao fazer a postagem: ${error}`;
        }
}

export default trataFormPostagem;