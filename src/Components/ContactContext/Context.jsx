import {createContext, useReducer} from "react";
import {contactUsersList} from "../data";
import {Reducer} from "./Reducer";

export const ContactContext = createContext({
    users:[], dispatch: () => {}
})

function ContactContextProvider({children}) {
    const [users, dispatch] = useReducer(Reducer,contactUsersList)
    return (
        <ContactContext.Provider value={{users, dispatch}}>
            {children}
        </ContactContext.Provider>
    )
}

export default ContactContextProvider;