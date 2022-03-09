import './ContactForm.style.css'
import {makeUniqueId} from "../data";
import {useContext} from "react";
import {ContactContext} from "../Context/Context";
import {Link} from "react-router-dom";

const ContactForm = ({user, setUser, mood, setMood}) => {
    const {users, setUsers} = useContext(ContactContext)
    const handleAddAndEdit = (e) => {
        e.preventDefault();
        if (user.fullName === "" || user.number === "" || user.group === "") {
            alert("please fill the inputs")
        } else {
            if (mood === "Edit") {
                setUsers(users.map(oldUser => user.id === oldUser.id ? user : oldUser))
            } else {
                setUsers([...users, {id: makeUniqueId(), ...user}])
            }
            setUser({fullName: '', number: "", group: ""})
            setMood("Add Contact")
        }
    }
    const handleChange = (e) => {
        setUser({...user, [e.target.name]: e.target.value})
    }

    return (
        <div className={'container'}>
            <header className="hero">
                <Link to="/">
                    <i className="fas fa-chevron-circle-left back-btn">{}</i>
                </Link>
                <div className="hero-info">
                    <h1>Full Name:{user.fullName}</h1>
                    <h4>Number:{user.number}</h4>
                    <p className="relationship-hero">Group:{user.group}</p>
                </div>
            </header>
            <form className="contact-info">
                <div className="info-line">
                    <i className="fas fa-phone icon-gradient">{}</i>
                    <input onChange={handleChange} className="type" type="text" name={"fullName"} id={"fullName"}
                           placeholder="Full Name"
                           value={user.fullName}/>
                </div>
                <div className="info-line">
                    <i className="fas fa-sms icon-gradient">{}</i>
                    <input onChange={handleChange} className="type" type="text" name={"number"} id={"number"}
                           placeholder="Phone Number" value={user.number}/>
                </div>
                <div className="info-line">
                    <i className="fas fa-user-circle icon-gradient">{}</i>
                    <select className="type" style={{color: "gray"}} onChange={handleChange} name={"group"} id={"group"}
                            placeholder="Phone Number" value={user.group}>
                        <option>Select group</option>
                        <option>Friends</option>
                        <option>Family</option>
                        <option>Work</option>
                    </select>
                </div>
                <section className="button-container">
                    <div className="update-contact">
                        <i className="fas fa-check-circle icon-gradient">{}</i>
                        <button onClick={handleAddAndEdit} className="button">
                            <Link to='/' style={{textDecoration:'none',color:"#6a89a1"}}  >{mood}</Link>
                        </button>
                    </div>
                </section>
            </form>
        </div>
    )
}
export default ContactForm