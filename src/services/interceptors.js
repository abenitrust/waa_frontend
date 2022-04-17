const corsInterceptor = (config) => {
    config.headers.common['Access-Control-Allow-Origin'] = '*';
    return config;
}

const authInterceptor =  (config) => {
    const token = localStorage.getItem('access_token');
    if(token !== null) {
        config.headers.common['Authorization'] = `Bearer ${token}`;
    }
    return config;
}


export { corsInterceptor, authInterceptor };