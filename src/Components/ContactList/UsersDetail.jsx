import {Link} from "react-router-dom";
import {useContext} from "react";
import {ContactUsersContext} from "../ContactContext/UsersContext";
import {ContactMoodContext} from "../ContactContext/MoodContext";
import {ContactUserContext} from "../ContactContext/UserContext";

export const UsersDetail = ({search}) => {
    const {users, dispatch} = useContext(ContactUsersContext)
    const {setMood}=useContext(ContactMoodContext)
    const {setUser}=useContext(ContactUserContext)
    const handleDeleteUsers = (id) => {
        dispatch({type: "handleDeleteUsers", payload: {id}})
    }
  return (
          users.filter(user => user.fullName.toLowerCase().includes(search.toLowerCase())).length !== 0 ?
              (
                  users.filter(user => user.fullName.toLowerCase().includes(search.toLowerCase())).map(item =>
                      <ul key={item.id} className="contacts-list">
                          <div className="contact-section">
                              <li className="list__item">
                                  <h1 className="contact-name">{item.fullName}</h1>
                                  <p style={{color: "antiquewhite"}}>{item.number}</p>
                                  <p className="relationship">{item.group}</p>
                              </li>
                              <li className="list__item">
                                  {/*delete button*/}
                                  <button className="button"
                                          onClick={() => {
                                              if (window.confirm('Are you sure you want to delete this Contact?')) {
                                                  handleDeleteUsers(item.id)
                                              }
                                          }
                                          }>
                                      <i className="fas fa-trash icon-gradient">{}</i>
                                  </button>
                                  {/*\edit button*/}
                                  <Link to={"Form"}>
                                      <button className="button" onClick={() => {
                                          setUser(item);
                                          setMood("Edit")
                                      }}>
                                          <i className="fas fa-edit icon-gradient">{}</i>
                                      </button>
                                  </Link>
                              </li>
                          </div>
                      </ul>
                  )) :
              <p className={"notFound"}>contact not found</p>
  )
}