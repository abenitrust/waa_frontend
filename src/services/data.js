import axios from "axios";
import { corsInterceptor, authInterceptor } from "./interceptors";


const httpReq = axios.create({
    baseURL: 'http://172.28.160.1:8080/api/v1',
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

httpReq.interceptors.response.use(
    result => result, 
    (err) => {
        if(err.data == 'Token Expired') {
            refreshToken().then(result => {
                return Promise.reject("Refresh page!"); //TODO, possibily better to recall last api call automatically.
            })
        } else if (err.data == 'refresh token expired') {
            // route page to login;
        }
    }
);



const getPosts = () => httpReq.get('/posts');
const getPostById = (postId) => httpReq.get(`/posts/${postId}`);
const savePost = (post) => httpReq.post('/posts', post);
const updatePost = (postId, post) => httpReq.put(`/posts/${postId}`, post);
const deletePost = (postId) => httpReq.delete(`posts/${postId}`);
const login = (user) => httpReq.post('/auth/login', user).then(result => {
                            localStorage.setItem('access_token', result.data.accessToken);
                            localStorage.setItem('refresh_token', result.data.refresToken);
                            return result;
                        })
                        .then(result => result.data)
                        .catch(err => Promise.reject(err));

const refreshToken = () => httpReq.post('/auth/refreshToken', {refreshToken: localStorage.get('refresh_token')})
                            .then(result => {
                                localStorage.setItem('access_token', result.data.accessToken);
                                localStorage.setItem('refresh_token', result.data.refresToken);
                                return result;
                            })
                            .then(result => result.data)
                            .catch(err => Promise.reject(err));

export { getPostById, getPosts, savePost, deletePost, updatePost, login };