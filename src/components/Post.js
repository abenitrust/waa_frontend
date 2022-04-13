export default function Post(props) {
    return (
        <div className="post" onClick={(_) => props.onEditPost(props.detail.id)}>
            <div>Id: {props.detail.id}</div>
            <div>Title: {props.detail.title}</div>
            <div>Author: {props.detail.author}</div>
        </div>
    )
}