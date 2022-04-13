import Post from './Post';

export default function PostList(props) {
    const onEditPost = (postId) => {
        props.editPost(postId);
    }
    return(
        <div className="post_list">
            {
                props.posts.map(post => { 
                    return <Post key={post.id} 
                                 detail={post} 
                                 onEditPost={onEditPost} 
                                 />
                })
            }
        </div>
    )
}