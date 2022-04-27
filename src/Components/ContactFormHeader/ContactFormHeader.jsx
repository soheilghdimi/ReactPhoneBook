import {Link} from "react-router-dom";
import "./ContactFormHeader.style.css"
export const ContactFormHeader = ({user, setUser}) => {
    return (
        <header className="hero">
            <Link to="/">
                <i className="fas fa-chevron-circle-left back-btn">{}</i>
            </Link>
            <div className="hero-info">
                <h2>{user.fullName}</h2>
                <h3>{user.number}</h3>
                <p className="relationship-hero">{user.group}</p>
            </div>
        </header>
    )
}