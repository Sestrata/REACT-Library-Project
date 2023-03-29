const requester = async (method, url, data) => {
    const options = {};

    if (method !== 'GET') {
        options.method = method;

        if (data) {
            options.headers = {
                'content-type': 'application/json'
            };
            options.body = JSON.stringify(data);
        };
    };

    const serializeAuth = localStorage.getItem('auth');

    if (serializeAuth) {
        const auth = JSON.parse(serializeAuth);

        if (auth.accessToken) {
            options.headers = {
                ...options.headers,
                'X-Authorization': auth.accessToken,
            };
        };
    };

    const response = await fetch(url, options);

    if (response.status === 204) {
        return {};
    };

    const result = await response.json();

    if (!response.ok) {
        throw result;
    };

    return result;

    // const string = await response.text();
    // const result = string === "" ? {} : JSON.parse(string)
    // return result;
};


export const requestFactory = () => {
    return {
        get: requester.bind(null, 'GET'),
        post: requester.bind(null, 'POST'),
        put: requester.bind(null, 'PUT'),
        delete: requester.bind(null, 'DELETE'),
    }
};
