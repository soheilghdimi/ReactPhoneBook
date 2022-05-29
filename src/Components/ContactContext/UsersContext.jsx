import {createContext, useReducer} from "react";
import {initialData} from "../data";
import {Reducer} from "./Reducer";

export const ContactUsersContext = createContext({
    users:[], dispatch: () => {}
})

function ContactContextProvider({children}) {
    const [users, dispatch] = useReducer(Reducer,initialData)
    return (
        <ContactUsersContext.Provider value={{users, dispatch}}>
            {children}
        </ContactUsersContext.Provider>
    )
}
export default ContactContextProvider;