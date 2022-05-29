import {createContext, useState} from "react";

export const ContactMoodContext = createContext({
    mood:[],setMood:() => {}
})

function MoodContextProvider({children}) {
    const [mood,setMood]=useState("Add")
    return (
        <ContactMoodContext.Provider value={{mood,setMood}}>
            {children}
        </ContactMoodContext.Provider>
    )
}

export default MoodContextProvider;