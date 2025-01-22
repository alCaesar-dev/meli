import useApi from "./useApi.jsx";

const useItems = () => {
    const api = useApi();

    const get = async (id) => {
        return await api.get(`/items/${id}`);
    }

    const getAll = async (search, limit = 4) => {
        if (search === "") search = undefined;
        return await api.get("/items", {q: search, limit});
    }

    return {get, getAll, isLoading: api.isLoading};
}

export default useItems;