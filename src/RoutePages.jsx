import {BrowserRouter, Route, Routes} from "react-router-dom";
import ContactList from "./Components/ContactList/ContactList";
import ContactForm from "./Components/ContactForm/ContactsForm";
import ContactInfo from "./Components/ContactInfo/ContactInfo";

const RoutePages = () => {
  return (
      <BrowserRouter>
          <Routes>
              <Route path={"/"} element={<ContactList/>}/>
              <Route path={"Form"} element={<ContactForm/>}/>
              <Route path={":infoId"} element={<ContactInfo/>}/>
          </Routes>
      </BrowserRouter>
  )
}
export default RoutePages;