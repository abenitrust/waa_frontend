import { Fragment, useState, useEffect } from 'react';
import PostList from './PostList';
import PostDetail from './PostDetail';
import * as api from '../services/data';

import './../index.css';


export default function Dashboard() {

    const [title, setTitle] = useState("Random Title");
    const [posts, setPosts] = useState([]);
    const [postToEditIndex, setPostToEditIndex] = useState(-1);
    const [postToEdit, setPostToEdit] = useState({});
    const [dataLoaded, setDataLoaded] = useState(false);


    useEffect(() => {
        api.getPosts().then(result => {
            setPosts(result.data);
        }).catch((_) => {
            setPosts([]);
        }).then((_) => {
            setDataLoaded(true);
        });
    }, [dataLoaded]);

    const updateTitle = (event) => {
        setTitle(event.target.value);
    }

    const persistTitle = () => {
        setPosts([{...posts[0], title}, ...posts.slice(1)]);
    }

    const editPost = (postId) => {
        const postIndex = posts.findIndex(p => p.id == postId);
        setPostToEdit(posts[postIndex]);
        setPostToEditIndex(postIndex);
    }

    const onPostDelete = () => {
        setPosts([
            ...posts.slice(0, postToEditIndex),
            ...posts.slice(postToEditIndex+1)
        ]);
        setPostToEditIndex(-1);
    }

    const onPostUpdate = () => {
        setPosts(prev => [
            ...prev.slice(0, postToEditIndex), 
            postToEdit, 
            ...prev.slice(postToEditIndex+1)
        ]);
        setPostToEditIndex(-1);
    }

    const onPostChage = (target, value) => {
        setPostToEdit(prev => { 
            return {...prev, [target]: value}
        });
    }

    return (
        <Fragment>
            <PostList posts={posts}  editPost={editPost} />
            <div className="input">
                <input value={title} onChange={updateTitle} />
                <button onClick={persistTitle}>Change Title</button>
            </div>
            {
                postToEditIndex >= 0 && 
                <PostDetail 
                    post={postToEdit} 
                    onPostChange={onPostChage} 
                    onPostUpdate={onPostUpdate}
                    onPostDelete={onPostDelete} />
            }
        </Fragment>
    )
}