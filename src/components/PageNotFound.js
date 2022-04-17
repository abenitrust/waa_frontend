import { Link } from 'react-router-dom';

export default function PageNotFound() {
    return (
        <div>
            <h2>404, Page not Found!</h2>
            <br/>
            <Link to="/posts">Go to Dashboard</Link>
        </div>
    )
}