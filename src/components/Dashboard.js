import { Fragment, useState } from 'react';
import PostList from './PostList';

import './../index.css';
import PostDetail from './PostDetail';

const postsSources = [
    {
        "id": 1,
        "title": "Post 1",
        "author": "User 1" 
    }, {
        "id": 2,
        "title": "Post 2",
        "author": "User 2" 
    }, {
        "id": 3,
        "title": "Post 3",
        "author": "User 3" 
    }, {
        "id": 4,
        "title": "Post 4",
        "author": "User 4" 
    }, {
        "id": 5,
        "title": "Post 5",
        "author": "User 5" 
    }
];

export default function Dashboard() {

    const [title, setTitle] = useState("Random Title");
    const [posts, setPosts] = useState(postsSources);
    const [postToEditIndex, setPostToEditIndex] = useState(-1);
    const [postToEdit, setPostToEdit] = useState({});

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