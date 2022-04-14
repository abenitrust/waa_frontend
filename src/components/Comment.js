export default function Comment(props) {
    return(
        <div className="comment">
            <ul>
                {
                    props.comments.map(comment => <li>{comment.name}</li>)
                }
            </ul>
        </div>
    )
}