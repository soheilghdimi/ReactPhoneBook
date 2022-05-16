import {createContext, useReducer} from "react";
import {contactUsersList} from "../data";
import {Reducer} from "./Reducer";

export const ContactUsersContext = createContext({
    users:[], dispatch: () => {}
})

function ContactContextProvider({children}) {
    const [users, dispatch] = useReducer(Reducer,contactUsersList.sort())
    return (
        <ContactUsersContext.Provider value={{users, dispatch}}>
            {children}
        </ContactUsersContext.Provider>
    )
}

export default ContactContextProvider;