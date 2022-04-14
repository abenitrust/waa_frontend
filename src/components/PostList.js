import Post from './Post';
import { useEffect, useState } from 'react';
import * as api from '../services/data';

export default function PostList(props) {

    const [posts, setPosts] = useState([]);

    const onEditPost = (postId) => {
        props.editPost(postId);
    }

    useEffect(() => {
        api.getPosts().then(result => {
            setPosts(result.data);
        }).catch((_) => {
            setPosts([]);
        })
    }, [props.refreshData]);

    return(
        <div className="post_list">
            {
                posts.map(post => { 
                    return <Post key={post.id} 
                                 detail={post} 
                                 onEditPost={onEditPost} 
                                 />
                })
            }
        </div>
    )
}