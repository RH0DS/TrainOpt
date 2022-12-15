import { Link, NavLink, useNavigate } from "react-router-dom";
import './Header.css'


function Header(props) {

  return (
    <>
  <nav className="navbar">
    <div className="header-container">
      <Link to="/Home" className="a">
          <h1 className="logo" >TrainOpt</h1>
      </Link>
      <NavLink to="/Optiweight">Optimized weight planing</NavLink>
      <NavLink to="/Profile">Profile</NavLink>
      <NavLink to="/">General training</NavLink>
    </div>
    <h4>make hamburgermeny for navbar</h4>
  </nav>
    </> 
  );
}





export default Header;