import './ContactList.style.css'
import {ContactContext} from "../Context/Context";
import {useContext, useState} from "react";
import {Link} from "react-router-dom";

const ContactList = ({setUser, setMood}) => {
    const {users, setUsers} = useContext(ContactContext)
    const [search, setSearch] = useState("")
    const handleDeleteUsers = (id) => {
        setUsers(users.filter(item => item.id !== id))
    }
    return (
        <div className='container'>
            <header className="header">
                <form className="search-bar">
                    <input onChange={(event) => {
                        setSearch(event.target.value)
                    }}
                           type="search-name" className="contact-search" name="search-area" placeholder="Search"/>
                </form>
                <Link to={'Form'}>
                    <i className="fas fa-plus-circle add" style={{color: "white", fontSize: "30px"}}>{}</i>
                </Link>
            </header>
            {
                users.filter(user => user.fullName.toLowerCase().includes(search.toLowerCase())).length !== 0 ?
                    (
                        users.filter(user => user.fullName.toLowerCase().includes(search.toLowerCase())).map(item =>
                            <ul key={item.id} className="contacts-list">
                                <div className="contact-section">
                                    <li className="list__item">
                                        <h1 className="contact-name">{item.fullName}</h1>
                                        <p style={{color: "antiquewhite"}}>{item.number}</p>
                                        <p className="relationship">{item.group}</p>
                                    </li>
                                    <li className="list__item">
                                        {/*delete button*/}
                                        <button className="button"
                                                onClick={() => handleDeleteUsers(item.id)}>
                                            <i className="fas fa-trash icon-gradient">{}</i>
                                        </button>
                                        {/*\edit button*/}
                                        <Link to={"Form"}>
                                            <button className="button" onClick={() => {
                                                setUser(item);
                                                setMood("Edit")
                                            }}>
                                                <i className="fas fa-edit icon-gradient">{}</i>
                                            </button>
                                        </Link>
                                    </li>
                                </div>
                            </ul>
                        )) :
                    <p className={"notFound"}>contact not found</p>
            }
        </div>
    )
}
export default ContactList;