import { useEffect, useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";

import Comment from "./Comment";
import * as api from '../services/data';

export default function PostDetail(props) {

    const params = useParams();
    const navigate = useNavigate();
    
    const emptyPost = {id: params.id, title: '', author: '', comments: []};
    
    const [post, setPost] = useState(emptyPost);
    
    const doNothing = (e) => e.preventDefault();
    
    const onUpdate = (target, event) => {
        setPost(prev => { 
            return {...prev, [target]: event.target.value}
        });
    }

    const onPostUpdate = (_) => {
        api.updatePost(post.id, {...post, userId: 4}).then( _ => {
            navigate('/posts');
        }).catch(err => {
            console.log(err);
        })
    }

    const onPostDelete = (_) => {
        api.deletePost(post.id).then( _ => {
            navigate('/posts');
        }).catch(err => {
            console.log(err);
        })
    }

    useEffect(() => {
        api.getPostById(params.id).then(result => {
            setPost(result.data);
        }).catch( err => {
            console.log(err);
        });
    }, [params.id])

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