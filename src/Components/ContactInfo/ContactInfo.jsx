import "./ContactInfo.style.css"
import {Link} from "react-router-dom";
import {useContext} from "react";
import {ContactUserContext} from "../ContactContext/UserContext";

const ContactInfo = () => {
    const {user} = useContext(ContactUserContext)
    return (
        <header className="hero">
            <Link to="/">
                <i className="fas fa-chevron-circle-left back-btn">{}</i>
            </Link>
            <div className="person-info">
                <span className="pic">{user.fullName.split('')[0]}</span>
                <h1>{user.fullName}</h1>
                <hr/>
                <div className="info-button-container">
                    <button className="info-button">
                        <i className="fas fa-phone">{}</i>
                        <p>Call</p>
                    </button>
                    <button className="info-button">
                        <i className="text-icon">
                            T
                        </i>
                        <p>Text</p>
                    </button>
                    <button className="info-button">
                        <i className="fas fa-video">{}</i>
                        <p>VideoCall</p>
                    </button>
                </div>
                <hr/>
                <div>
                    <button className="info-button calling">
                        <i className="fas fa-phone">{}</i>
                        <h2>{user.number}</h2>
                        <br/>
                    </button>
                    <p className="mobile">Mobile</p>
                </div>
                <hr/>
                <h1>{user.group}</h1>
            </div>
        </header>
    )
}
export default ContactInfo;