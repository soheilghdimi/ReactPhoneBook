import {Link} from "react-router-dom";
import {useContext} from "react";
import {ContactUsersContext} from "../ContactContext/UsersContext";
import {ContactMoodContext} from "../ContactContext/MoodContext";
import {ContactUserContext} from "../ContactContext/UserContext";

const FormInput = () => {
    const {dispatch} = useContext(ContactUsersContext)
    const {mood,setMood}=useContext(ContactMoodContext)
    const {user,setUser}=useContext(ContactUserContext)

    const handleAddAndEdit = (e) => {
        e.preventDefault();
        if (user.fullName === "" || user.number === "" || user.group === "") {
            alert("please fill the inputs")
        } else {
            if (mood === "Edit") {
                dispatch({type: "HandleEdit", payload: {user}});
            } else {
                dispatch({type: "HandleAdd", payload: {user}})
            }
            setUser({fullName: '', number: "", group: ""})
            setMood("Add Contact")
        }
    }
    const handleChange = (e) => {
        setUser({...user, [e.target.name]: e.target.value})
    }

  return (
      <form className="contact-info">
          <div className="info-line">
              <i className="fas fa-phone icon-gradient">{}</i>
              <input onChange={handleChange} className="type" type="text" name={"fullName"} id={"fullName"}
                     placeholder="Full Name"
                     value={user.fullName}/>
          </div>
          <div className="info-line">
              <i className="fas fa-sms icon-gradient">{}</i>
              <input onChange={handleChange} className="type" type="text" name={"number"} id={"number"}
                     placeholder="Phone Number" value={user.number}/>
          </div>
          <div className="info-line">
              <i className="fas fa-user-circle icon-gradient">{}</i>
              <select className="type" style={{color: "gray"}} onChange={handleChange} name={"group"} id={"group"}
                      placeholder="Phone Number" value={user.group}>
                  <option>Select group</option>
                  <option>Friends</option>
                  <option>Family</option>
                  <option>Work</option>
              </select>
          </div>
          <section className="button-container">
              <div className="update-contact">
                  <i className="fas fa-check-circle icon-gradient">{}</i>
                  <button onClick={handleAddAndEdit} className="button">
                      <Link to='/' style={{textDecoration: 'none', color: "#6a89a1"}}>{mood}</Link>
                  </button>
              </div>
          </section>
      </form>
  )
}

export default FormInput;