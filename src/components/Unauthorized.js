import { NavLink } from "react-router-dom";

export default function Unauthorized() {
    return (
        <div>
            <h2>Unauthorized, plese login</h2>
            <NavLink to="/login">Login</NavLink>
        </div>
    )
}