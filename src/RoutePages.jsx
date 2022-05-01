import {BrowserRouter, Route, Routes} from "react-router-dom";
import ContactList from "./Components/ContactList/ContactList";
import ContactForm from "./Components/ContactForm/ContactsForm";

const RoutePages = () => {
  return (
      <BrowserRouter>
          <Routes>
              <Route path={"/"} element={<ContactList/>}/>
              <Route path={"Form"} element={<ContactForm/>}>
              </Route>
          </Routes>
      </BrowserRouter>
  )
}
export default RoutePages;