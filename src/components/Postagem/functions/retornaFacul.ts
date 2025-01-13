import { getRequest } from "../../../hooks/useRequests";

const retornaFacul = async (idCampus: number) => {
    let infoCampus: string = '';
    
    try {
        let response = await getRequest(`/Location/campus/${idCampus}`);

        if (response) {
            infoCampus = response.sgCampus + " - " + response.campusName;
        }
    } catch (e) {
        console.log(e);
    }

    return infoCampus;
}

export default retornaFacul;