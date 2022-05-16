import './ContactList.style.css'
import {useState} from "react";
import {ListHeader} from "./ListHeader";
import {UsersDetail} from "./UsersDetail";

const ContactList = () => {
    const [search, setSearch] = useState("")
    return (
        <div className='container'>
            <ListHeader setSearch={setSearch}/>
            <UsersDetail search={search}/>
        </div>
    )
}
export default ContactList;