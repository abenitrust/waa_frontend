import { NavLink } from "react-router-dom";

export default function Nav() {
    return(
        <div>
            <nav>
                <NavLink to="/posts" >Posts</NavLink>
                <NavLink to="/posts/add"> Add </NavLink>
                <NavLink to="/login"> Login </NavLink>
            </nav>
        </div>
    )
}