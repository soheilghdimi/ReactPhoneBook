import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import ContactList from "./Components/ContactList/ContactList";
import ContactForm from "./Components/ContactForm/ContactsForm";
import ContactContextProvider from "./Components/ContactContext/Context";
import {useState} from "react";

function App() {
    const [user, setUser] = useState({fullName: "", number: '', group: ""})
    const [mood,setMood]=useState("Add Contact")
    return (
        <ContactContextProvider>
            <BrowserRouter>
                <Routes>
                    <Route path={"/"} element={<ContactList setUser={setUser} setMood={setMood}/>}/>
                    <Route path={"Form"} element={<ContactForm user={user} setUser={setUser} mood={mood} setMood={setMood}/>}>
                    </Route>
                </Routes>
            </BrowserRouter>
        </ContactContextProvider>
    )
}
export default App;
