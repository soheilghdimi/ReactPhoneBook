import {Link} from "react-router-dom";
import {useContext} from "react";
import {ContactUsersContext} from "../ContactContext/UsersContext";
import {ContactMoodContext} from "../ContactContext/MoodContext";
import {ContactUserContext} from "../ContactContext/UserContext";
import "./ContactForm.style.css"

const FormInput = () => {
    const {dispatch} = useContext(ContactUsersContext)
    const {mood, setMood} = useContext(ContactMoodContext)
    const {user, setUser} = useContext(ContactUserContext)

    const handleAddAndEdit = (e) => {
        e.preventDefault();
        if (user.fullName === "" || user.number === "" || user.group === "") {
            alert("please fill the inputs")
        } else {
            if (mood === "Edit") {
                dispatch({type: "HandleEdit", payload: {user}});
            } else {
                dispatch({type: "HandleAdd", payload: {user}})
            }
            setUser({fullName: '', number: "", group: ""})
            setMood("Add")
        }
    }
    const handleChange = (e) => {
        setUser({...user, [e.target.name]: e.target.value})
    }

    return (
        <form className="contact-info">

            <div className="update-contact">
                <Link to="/">
                    <i className="fas fa-chevron-circle-left back-btn">{}</i>
                </Link>
                <h2>{mood} Contact</h2>
                <button onClick={handleAddAndEdit} className="button">
                    <Link to='/' style={{textDecoration: 'none', color: "#ebeef1"}}>{mood}</Link>
                </button>
            </div>
            <div className="input-container">
                <div className="info-line">
                    <i className="fas fa-user icon-gradient">{}</i>
                    <input onChange={handleChange} className="type" type="text" name={"fullName"} id={"fullName"}
                           placeholder="Full Name"
                           value={user.fullName}/>
                </div>
                <div className="info-line">
                    <i className="fas fa-phone icon-gradient">{}</i>
                    <input onChange={handleChange} className="type" type="text" name={"number"} id={"number"}
                           placeholder="Phone Number" value={user.number}/>
                </div>
                <div className="info-line">
                    <i className="fas fa-user-circle icon-gradient">{}</i>
                    <select className="type" style={{color: "gray"}} onChange={handleChange} name={"group"} id={"group"}
                            placeholder={user.group} value={user.group}>
                        <option>{(mood === "Edit" ? user.group : "select group")}</option>
                        <option>Friends</option>
                        <option>Family</option>
                        <option>Work</option>
                    </select>
                </div>
            </div>

        </form>
    )
}

export default FormInput;