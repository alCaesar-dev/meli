import {get} from "../client.js";
import {make, collection} from "../Resources/itemResource.js";
import {errorResponse, successResponse} from "../../../responses/response.js";

const getAllItems = async (req, res) => {
    try {
        const {q, limit = 4} = req.query;

        const data = await get(`/sites/MLA/search`, {q, limit});

        //Armo el resource para la respuesta
        const resource = collection(data);

        successResponse(res, resource);
    } catch (error) {
        console.log(error);
        errorResponse(res, error.message, error.code);
    }
};


const getItem = async (req, res) => {
    try {
        const id = req.params.id;
        if (!id) throw new Error("El ID es requerido");

        const item = await get(`items/${id}`);
        const description = await get(`items/${id}/description`);

        //Armo el resource para la respuesta
        const resource = make({item, description});
        successResponse(res, resource);
    } catch (error) {
        console.log(error);
        errorResponse(res, error.message, error.code);
    }
};

export {getItem, getAllItems};