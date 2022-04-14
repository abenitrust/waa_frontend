import { useState, useRef } from "react";
import * as api from '../services/data';

export default function AddPost(props) {

    const emtpyPost = {title: '', author: ''};

    const [newPost, setNewPost] = useState(emtpyPost);
    
    const onChange = (target, event) => {
        setNewPost(prev => { 
            return {...prev, [target]: event.target.value} 
        });
    }
    
    const form = useRef(null);

    const doNothing = (e) => {
        e.preventDefault();
    }

    const onSubmit = () => {
        // TODO: currently user ID is hardcoded, until the time login
        // is properly set.
        api.savePost({...newPost, userId: 4}).then((_) => {
            props.onAdd(newPost);
            setNewPost(emtpyPost);
        })
        .catch(err => console.log(err));
    }
    
    const onAddPost = () => {
        form.current.submit();
    }

    const onCancel = () => {
        setNewPost(emtpyPost);
        props.onCancel();
    }

    return(
        <div className="edit_post">
            <h3> Add New Post</h3>
            <form ref={form} onSubmit={onSubmit}>
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