export default function PostDetail(props) {

    const doNothing = (e) => e.preventDefault();

    const onUpdate = (target, event) => {
        props.onPostChange(target, event.target.value);
    }

    return(
        <div className="edit_post">
            <h1> MIU </h1>
            <h2> DEAN </h2>
            <form onSubmit={e => doNothing(e)}>
                <div className="f_input">
                    <label htmlFor ="id" >ID:</label>  
                    <input id="id" value={props.post.id} disabled/>
                </div>
                <div className="f_input">
                    <label htmlFor ="title" >Tilte:</label>  
                    <input id="title"  value={props.post.title} onChange={e => onUpdate('title', e)} />
                </div>
                <div className="f_input">
                    <label htmlFor ="author">Author:</label>
                    <input id="author" value={props.post.author} onChange={e => onUpdate('author', e)} />
                </div>
                <button onClick={props.onPostUpdate}>Update </button>
                <button onClick={props.onPostDelete}>Delete</button>
            </form>
        </div>
    );
}