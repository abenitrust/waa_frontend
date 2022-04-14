const corsInterceptor = (config) => {
    config.headers.common['Access-Control-Allow-Origin'] = '*';
    return config;
}

const authInterceptor = (config) => {
    config.headers.common['Authorization'] = 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImV4cCI6MTY1MjM2NzI5OSwiaWF0IjoxNjQ5ODY3Mjk5fQ.FNgohiGbqY79k-v8e_YWYDXZwq6JzCqnM8T7FVaGugtwPJfioG6H5KpcFW87F3n18i43863pj3tQEvi-u5gm9A'
    return config;
}


export { corsInterceptor, authInterceptor };