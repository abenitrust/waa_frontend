import { useNavigate } from "react-router-dom"


export default function Post(props) {
    const navigate = useNavigate();
    const editPost = () => {
        navigate(`/posts/${props.detail.id}`);
    }

    return (
        <div className="post" onClick={editPost}>
            <div>Id: {props.detail.id}</div>
            <div>Title: {props.detail.title}</div>
            <div>Author: {props.detail.author}</div>
        </div>
    )
}