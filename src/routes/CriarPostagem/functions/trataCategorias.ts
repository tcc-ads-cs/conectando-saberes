import { getRequest } from "../../../hooks/useRequests";

const comparaCategorias = async (categorias: FormDataEntryValue): Promise<Number[]> => {
    const categoriasArray = (categorias as string).split(',').map(categoria => categoria.trim());
    const categoriasExistentes = await getRequest('/Category/listar-categorias');
    const idsCategorias: Number[] = [];
    
    if (!Array.isArray(categoriasExistentes)) {
        throw new Error('A resposta de /Category/listar-categorias não carregou corretamente');
    }

    for (const categoria of categoriasArray) {
        const categoriaExistente = categoriasExistentes.find((cat: any) => cat.name === categoria);
        if (categoriaExistente) {
            idsCategorias.push(categoriaExistente.id);
        } else {
            const novaCategoria = {
                id: `${Date.now().toString().substring(0, 4)}`,
                nome: categoria,
                descricao: categoria,
            };
            idsCategorias.push(Number(novaCategoria.id));
        }
    }
    return idsCategorias;
};

export default comparaCategorias;