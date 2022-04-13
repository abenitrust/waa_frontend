import axios from "axios";


const httpReq = axios.create({
    baseURL: 'http://172.28.240.1:8080/api/v1',
    timeout: 1000,
    headers: {
        'Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImV4cCI6MTY1MjM2NzI5OSwiaWF0IjoxNjQ5ODY3Mjk5fQ.FNgohiGbqY79k-v8e_YWYDXZwq6JzCqnM8T7FVaGugtwPJfioG6H5KpcFW87F3n18i43863pj3tQEvi-u5gm9A',
        'Access-Control-Allow-Origin': '*'
    }
})

const getPosts = () => httpReq.get('/posts');
const getPostById = (postId) => httpReq.get(`/posts/${postId}`);
const savePost = (post) => httpReq.post('/posts', post);
const deletePost = (postId) => httpReq.delete(`posts/${postId}`);


export { getPostById, getPosts, savePost, deletePost };