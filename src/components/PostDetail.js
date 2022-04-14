import { useEffect, useState } from "react";
import Comment from "./Comment";
import * as api from '../services/data';

export default function PostDetail(props) {

    const doNothing = (e) => e.preventDefault();

    const emptyPost = {id: props.postId, title: '', author: '', comments: []};

    const [post, setPost] = useState(emptyPost);

    const onUpdate = (target, event) => {
        setPost(prev => { 
            return {...prev, [target]: event.target.value}
        });
    }

    const onPostUpdate = (_) => {
        api.updatePost(post.id, {...post, userId: 4}).then( _ => {
            props.onPostUpdate();
        }).catch(err => {
            console.log(err);
        })
    }

    const onPostDelete = (_) => {
        api.deletePost(post.id).then( _ => {
            props.onPostDelete();
        }).catch(err => {
            console.log(err);
        })
    }

    useEffect(() => {
        api.getPostById(props.postId).then(result => {
            setPost(result.data);
        }).catch( err => {
            console.log(err);
        });
    }, [props.postId])

    return(
        <div className="edit_post">
            <h3> Post Detail </h3>
            <form onSubmit={e => doNothing(e)}>
                <div className="f_input">
                    <label htmlFor ="id" >ID:</label>  
                    <input id="id" value={post.id} disabled/>
                </div>
                <div className="f_input">
                    <label htmlFor ="title" >Tilte:</label>  
                    <input id="title"  value={post.title} onChange={e => onUpdate('title', e)} />
                </div>
                <div className="f_input">
                    <label htmlFor ="author">Author:</label>
                    <input id="author" value={post.author} onChange={e => onUpdate('author', e)} />
                </div>
                <button onClick={onPostUpdate}>Update </button>
                <button onClick={onPostDelete}>Delete</button>
                <Comment comments={post.comments} />
            </form>
        </div>
    );
}