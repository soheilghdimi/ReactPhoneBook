import MoodContextProvider from "./Components/ContactContext/MoodContext";
import UserContextProvider from "./Components/ContactContext/UserContext";
import ContactContextProvider from "./Components/ContactContext/UsersContext";
import RoutePages from "./RoutePages";

const ContextProvider = () => {
  return (
      <ContactContextProvider>
          <MoodContextProvider>
              <UserContextProvider>
                  <RoutePages/>
              </UserContextProvider>
          </MoodContextProvider>
      </ContactContextProvider>
  )
}
export default ContextProvider;