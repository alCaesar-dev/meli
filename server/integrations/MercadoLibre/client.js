/**
 * Funcion para comunicarse con la api de MELI
 */
const fetchApi = async (uri, body = {}, method = "GET") => {
    if (uri.startsWith("/")) {
        uri = uri.slice(1);
    }

    //Hardcodeo la url SOLO por si no levantaron el env, en un caso real esto NO se hace
    let url = `${process.env.API_URL ?? "https://api.mercadolibre.com"}/${uri}`;
    const options = {
        method,
        headers: {
            'Content-Type': 'application/json',
        },
    };

    if (method.toUpperCase() === "GET" && body) {
        const queryParams = new URLSearchParams(body).toString();
        url += `?${queryParams}`;
    } else if (method.toUpperCase() === "POST") {
        options.body = JSON.stringify(body);
    }

    const response = await fetch(url, options);

    if (!response.ok) {
        const {message} = await response.json();
        throw {message, code: response.status};
    }

    return await response.json();
};

const get = async (uri, body = {}) => {
    return await fetchApi(uri, body);
};

const post = async (uri, body = {}) => {
    return await fetchApi(uri, body, "POST");
};

export {get, post};
