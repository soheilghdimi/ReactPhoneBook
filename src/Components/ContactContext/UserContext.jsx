import {createContext, useState} from "react";

export const ContactUserContext=createContext({
    user:[],setUser:() => {}
})

function UserContextProvider ({children}) {
    const [user, setUser] = useState({fullName: "", number: '', group: ""})
    return (
        <ContactUserContext.Provider value={{user, setUser}}>
            {children}
        </ContactUserContext.Provider>
    )
}

export default UserContextProvider;