import { Fragment, useState } from 'react';
import PostList from './PostList';
import PostDetail from './PostDetail';

import './../index.css';
import AddPost from './AddPost';


export default function Dashboard() {

    const [editPostId, setEditPostId] = useState(-1);
    const [showAddPost, setShowAddPost] = useState(true);
    
    const [refreshPosts, setRefreshPosts] = useState(true);
    const [refreshPost, setRefreshPost] = useState(false);


    const editPost = (postId) => {
        setEditPostId(postId);
    }

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
        <Fragment>
            <PostList refreshData={refreshPosts}  editPost={editPost} />
            
            <div className="add_edit">
                {
                    editPostId >= 0 && 
                    <PostDetail 
                        postId={editPostId}
                        onPostUpdate={onPostUpdate}
                        onPostDelete={onPostDelete} />
                }
                {
                    showAddPost == true &&
                    <AddPost onAdd={onAddPost} onCancel={onAddPostCancel} />
                }
            </div>
        </Fragment>
    )
}