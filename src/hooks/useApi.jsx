import {useState} from 'react';

const useApi = () => {
        const [isLoading, setIsLoading] = useState(true);

        const fetchApi = async (uri, method = 'GET', body = {}) => {
            setIsLoading(true);

            const options = {
                method,
                headers: {
                    'Content-Type': 'application/json',
                },
            };

            // Si es un GET, lo agrego como query params
            if (method === 'GET' && body) {
                const params = new URLSearchParams(body);
                uri = `${uri}?${params.toString()}`;
            }

            // Si es un POST, lo agrego como un json
            if (method === 'POST' && body) {
                options.body = JSON.stringify(body);
            }

            if (uri.startsWith("/")) {
                uri = uri.slice(1);
            }

            const response = await fetch(`/api/${uri}`, options);

            if (!response.ok) {
                setIsLoading(false);
                //Deberia haber un sistema de errores especificos
                throw new Error('Ha ocurrido un error');
            }

            const result = await response.json();
            setIsLoading(false);
            return result;
        };


        const get = async (uri, body) => {
            return await fetchApi(uri, 'GET', body);
        };

        const post = async (uri, body) => {
            return await fetchApi(uri, 'POST', body);
        };

        return {get, post, isLoading};
};

export default useApi;
