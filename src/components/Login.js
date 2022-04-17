import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import * as api from '../services/data';

export default function Login() {
    
    const navigate = useNavigate();
    const [user, setUser] = useState({username: '', password: ''});

    const doNothing = (e) => {
        e.preventDefault();
    }

    const onChange = (target, event) => {
        setUser(prev => { 
            return {...prev, [target]: event.target.value}
        });
    }
    
    const Login = () => {
        api.login(user).then(user => {
            localStorage.setItem('userId', user.id);
            localStorage.setItem('Name', `${user.firstName} ${user.lastName}`);
            navigate('/posts');
        }).catch(e => console.log(e));
    }
    
    return(
        <div className="login">
            <h3> Login </h3>
            <form onSubmit={e => doNothing(e)}>
                <div className="f_input">
                    <label htmlFor ="title" >Username:</label>  
                    <input id="title"  value={user.title} onChange={e => onChange('username', e)} />
                </div>
                <div className="f_input">
                    <label htmlFor ="author">Password:</label>
                    <input id="author" value={user.password} type="password" onChange={e => onChange('password', e)} />
                </div>
                <button onClick={Login}>Login </button>
            </form>
        </div>
        
    )
}