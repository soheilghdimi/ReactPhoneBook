import {createContext, useState} from "react";
import {contactUsersList} from "../data";

export const ContactContext = createContext({
    users: [], setUsers: () => {
    }
})

function ContactContextProvider({children}) {
    const [users, setUsers] = useState(contactUsersList)
    return (
        <ContactContext.Provider value={{users, setUsers}}>
            {children}
        </ContactContext.Provider>
    )
}

export default ContactContextProvider;