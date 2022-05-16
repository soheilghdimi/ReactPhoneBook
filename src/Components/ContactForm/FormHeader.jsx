import {Link} from "react-router-dom";
import "./FormHeader.style.css"
import {useContext} from "react";
import {ContactUserContext} from "../ContactContext/UserContext";
export const FormHeader = () => {
    const {user}=useContext(ContactUserContext)
    return (
        <header className="hero">
            <Link to="/">
                <i className="fas fa-chevron-circle-left back-btn">{}</i>
            </Link>
            <div className="person-info">
                <h2>{user.fullName}</h2>
                <h3>{user.number}</h3>
                <p className="relationship-hero">{user.group}</p>
            </div>
        </header>
    )
}