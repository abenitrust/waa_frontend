import { useState } from 'react';
import PostList from './PostList';
import PostDetail from './PostDetail';
import AddPost from './AddPost';
import { PostContext } from '../context/PostContext';

import './../index.css';



export default function Dashboard() {

    const [showAddPost] = useState(true);
    const [editPostId, setEditPostId] = useState(-1);
    const [refreshPosts, setRefreshPosts] = useState(true);
    const [refreshPost, setRefreshPost] = useState(false);


    const onPostDelete = () => {
        refreshData(); 
        setEditPostId(-1);
    }

    const onPostUpdate = () => {
        refreshData(); 
        setEditPostId(-1);
    }

    const onAddPostCancel = () => { 
        // TODO: probably hide new post component 
    }

    const onAddPost = (post) => {
        refreshData(); 
    }

    const refreshData = () => {
        setRefreshPost(!refreshPost);
        setRefreshPosts(!refreshPosts);
    }


    return (
        <PostContext.Provider value={ {postId: editPostId, updatePostId: (value) => setEditPostId(value)} }>
            <PostList refreshData={refreshPosts} />
            
            <div className="add_edit">
                {
                    editPostId >= 0 && 
                    <PostDetail 
                        onPostUpdate={onPostUpdate}
                        onPostDelete={onPostDelete} />
                }
                {
                    showAddPost == true &&
                    <AddPost onAdd={onAddPost} onCancel={onAddPostCancel} />
                }
            </div>
        </PostContext.Provider>
    )
}