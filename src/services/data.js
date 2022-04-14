import axios from "axios";
import { corsInterceptor, authInterceptor } from "./interceptors";


const httpReq = axios.create({
    baseURL: 'http://172.23.208.1:8080/api/v1',
    timeout: 1000,
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }
});

httpReq.interceptors.request.use(
    corsInterceptor, 
    (error) => Promise.reject("Can't set cors header")
);

httpReq.interceptors.request.use(
    authInterceptor,
    (error) => Promise.reject("Can't set authorization header")
);

const getPosts = () => httpReq.get('/posts');
const getPostById = (postId) => httpReq.get(`/posts/${postId}`);
const savePost = (post) => httpReq.post('/posts', post);
const updatePost = (postId, post) => httpReq.put(`/posts/${postId}`, post);
const deletePost = (postId) => httpReq.delete(`posts/${postId}`);


export { getPostById, getPosts, savePost, deletePost, updatePost };