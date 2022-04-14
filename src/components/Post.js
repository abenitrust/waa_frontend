import { PostContext } from "../context/PostContext"
import { useContext } from "react";

export default function Post(props) {

    const { updatePostId } = useContext(PostContext);

    return (
        <div className="post" onClick={(_) => updatePostId(props.detail.id)}>
            <div>Id: {props.detail.id}</div>
            <div>Title: {props.detail.title}</div>
            <div>Author: {props.detail.author}</div>
        </div>
    )
}