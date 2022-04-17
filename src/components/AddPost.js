import { useState } from "react";
import { useNavigate } from "react-router-dom";

import * as api from '../services/data';

export default function AddPost(props) {

    const emtpyPost = {title: '', author: ''};
    const navigate = useNavigate();

    const [newPost, setNewPost] = useState(emtpyPost);
    
    const onChange = (target, event) => {
        setNewPost(prev => { 
            return {...prev, [target]: event.target.value} 
        });
    }
    
    const doNothing = (e) => {
        e.preventDefault();
    }

    const onSubmit = (e) => {
        e.preventDefault();
    }
    
    const onAddPost = () => {
        api.savePost({...newPost, userId: 4}).then((_) => {
            
        })
        .catch(err => console.log(err));
    }

    const onCancel = () => {
        navigate('/posts');
    }

    return(
        <div className="edit_post">
            <h3> Add New Post</h3>
            <form onSubmit={onSubmit}>
                <div className="f_input">
                    <label htmlFor ="title" >Tilte:</label>  
                    <input id="title"  value={newPost.title} onChange={e => onChange('title', e)} />
                </div>
                <div className="f_input">
                    <label htmlFor ="author">Author:</label>
                    <input id="author" value={newPost.author} onChange={e => onChange('author', e)} />
                </div>
                <button onClick={onAddPost}>Add </button>
                <button onClick={onCancel}>Cancel</button>
            </form>
        </div>
    );
}