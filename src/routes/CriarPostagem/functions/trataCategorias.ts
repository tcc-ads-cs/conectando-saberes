import { getRequest } from "../../../hooks/useRequests";

const comparaCategorias = async (categorias: string[]): Promise<string[]> => {
    const categoriasExistentes = await getRequest('/Category/listar-categorias');
    const dcCategorias: string[] = [];
    
    if (!Array.isArray(categoriasExistentes)) {
        throw new Error('A resposta de /Category/listar-categorias não carregou corretamente');
    }

    for (const categoria of categorias) {
        const categoriaExistente = categoriasExistentes.find((cat: any) => cat.name === categoria);
        if (categoriaExistente) {
            dcCategorias.push(categoriaExistente.description);
        } else {
            const novaCategoria = {
                descricao: categoria
                    .toLowerCase()
                    .normalize('NFD')
                    .replace(/[\u0300-\u036f]/g, '')
                    .replace(/\s+/g, '-'),
            };
            dcCategorias.push(novaCategoria.descricao);
        }
    }
    return dcCategorias;
};

export default comparaCategorias;