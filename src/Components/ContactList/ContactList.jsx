import './ContactList.style.css'
import {ContactContext} from "../ContactContext/Context";
import {useContext, useState} from "react";
import {Link} from "react-router-dom";

const ContactList = ({setUser, setMood}) => {
    const {users, dispatch} = useContext(ContactContext)
    const [search, setSearch] = useState("")
    const handleDeleteUsers = (id) => {
        dispatch({type: "handleDeleteUsers", payload: {id}})
    }
    return (
        <div className='container'>
            <header className="header">
                <div className={"title"}>
                    <h1 style={{color: "rgba(114,119,126,0.84)"}}>PhoneBook</h1>
                    <Link to={'Form'}>
                        <i className="fas fa-plus-circle add" style={{color: "#474849", fontSize: "30px"}}>{}</i>
                    </Link>
                </div>
                <div className={"search"}>
                    <div className="box">
                        <form name="search">
                            <input type="text" className="input" name="txt"
                                // onMouseOut={() => {
                                //     document.search.txt.value="" ;
                                // }}
                                   onChange={(event) => {
                                       setSearch(event.target.value)
                                   }}/>
                        </form>
                        <i className="fas fa-search"></i>
                    </div>
                </div>

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
                                                onClick={() => {
                                                    if (window.confirm('Are you sure you want to delete this Contact?')) {
                                                        handleDeleteUsers(item.id)
                                                    }
                                                }
                                                }>
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