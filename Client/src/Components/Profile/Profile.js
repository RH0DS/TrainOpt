import { NavLink, useNavigate } from "react-router-dom";
import './Profile.css'
import Header from "../Header/Header";


function Profile(props) {

    const person = {
        firstName:"John",
        lastName:"Doe",
        age:50,
        weight:98};

  return (
    <>
    <Header/>
    <div className="profileContainer">
    <th className="userInfo">
        <td>
           First name: {person.firstName}
           <br/>
           LastName: {person.lastName}
           <br/>
           Age:  {person.age}
           <br/> 
           Weight: {person.weight}
        </td>

        <button className="red"> button 1 </button>
        <button className="green"> button 2 </button>
        <button className="blå"> button 3 </button>
        <button> button 4 </button>
        <button> button 5 </button>

    </th>
    </div>
    </> 
  );
}





export default Profile;